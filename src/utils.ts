import chalk from 'chalk';
import path from 'path';
import { readFileSync, existsSync, mkdirSync, cpSync, writeFileSync } from 'fs';
import { IBuild, IBuildConfig } from './interfaces.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import shell from 'shelljs';

//ES6 <-> CJS __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//aesthetic
const { log, info } = console;

//package constants
//TODO use a new question for this instead, this will get very messy with more template combinations
const expressMongoose = readFileSync(path.join(__dirname, '/templates/json/express-mongo-mongoose/package.json'));
const expressMongo = readFileSync(path.join(__dirname, '/templates/json/express-mongo/package.json'));
const packages: IBuildConfig = {
  expressMongo,
  expressMongoose
}


export function createDirectory(path: string) {
  if (existsSync(path)) {
    log(chalk.red(`folder "${path}" already exists`))
    return false;
  } else {
    mkdirSync(path);
    log(chalk.greenBright(`successfully created ${path}`))
    return true;
  }
};

export function copyTemplate(template: IBuild) {

  const {
    buildPath,
    serverTemplate,
    databaseTemplate,
    ormTemplate,
    databaseChoice,
    ormChoice,
    serverTemplatePath,
    databaseTemplatePath,
    ormTemplatePath,
    installChoice
  } = template;

  //check if directory already exists and error if it does
  if (existsSync(`${buildPath}/${serverTemplate}`)) {
    log(chalk.red(`folder "${buildPath}/${serverTemplate}" already exists`));
  } else {
    try {
      //synchronous file copy
      cpSync(serverTemplatePath, buildPath, {recursive: true});
      log(chalk.yellowBright(`successfully wrote server directory @ ${buildPath}`));
    } catch (error: any) {
      log(chalk.red('error generating server files'))
      throw new Error(error);
    }
  }

  if (databaseChoice === true) {
    if (existsSync(`${buildPath}/${databaseTemplate}`)) {
      log(chalk.red(`folder "${buildPath}/${databaseTemplate}" already exists`));
    } else {
      try {
        cpSync(databaseTemplatePath, buildPath, {
          recursive: true,
          filter: (source) => {
            return source.includes(serverTemplate);
          }
        });
        buildPackages(buildPath, packages.expressMongo);
      } catch (error: any) {
        log(chalk.red('error generating database files'));
        throw new Error(error);
      }
    }
  }

  if (ormChoice === true) {
    if (existsSync(`${buildPath}/${ormTemplate}`)) {
      log(chalk.red(`folder "${buildPath}/${ormTemplate}" already exists`));
    } else {
      try {
        cpSync(ormTemplatePath, buildPath, {recursive: true});
        buildPackages(buildPath, packages.expressMongoose);
        if (installChoice){
          installPackages(buildPath)
        }
      } catch (error: any) {
        log(chalk.red('error generating ORM files'));
        throw new Error(error);
      }
    }
  } else {
    if (installChoice) {
      installPackages(buildPath);
    }
  }

  
  return true;
};

function buildPackages (buildPath: string, data: Buffer) {

  const build = writeFileSync(`${buildPath}/package.json`, data);
  try {
    return build
  } catch (error: any) {
    log(chalk.red('Error building package'));
    throw new Error(error);
  }
}

//TODO Add loader bar to this
function installPackages (buildPath: string) {
  shell.cd(buildPath);
  if (shell.exec('npm i').code === 0) {
    shell.exit(0);
  }
  
}

/*
function onComplete () {
  info(chalk.bgGreenBright('file generated'))
}
*/

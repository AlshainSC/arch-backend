import chalk from 'chalk';
import path from 'path';
import { readFileSync, existsSync, mkdirSync, cpSync, writeFileSync, copyFileSync, copyFile } from 'fs';
import { IBuild, IOptions } from './interfaces.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import shell from 'shelljs';

import _colors from 'ansi-colors';
import progressBar from './progressBars.js';

//ES6 <-> CJS __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//aesthetic
const { log, info } = console;

export function createDirectory(path: string) {
  if (existsSync(path)) {
    log(chalk.red(`folder "${path}" already exists`))
    return false;
  } else {
    mkdirSync(path);
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

  const opt: IOptions = {}

  //check if directory already exists and error if it does
  if (existsSync(`${buildPath}/${serverTemplate}`)) {
    log(chalk.red(`Folder: "${buildPath}/${serverTemplate}" already exists`));
  } else {
    try {
      //synchronous file copy
      cpSync(serverTemplatePath, buildPath, {recursive: true});
      opt['server'] = serverTemplate;
    } catch (error: any) {
      log(chalk.red('Error generating server files'))
      throw new Error(error);
    }
  }

  if (databaseChoice === true) {
    if (existsSync(`${buildPath}/${databaseTemplate}`)) {
      log(chalk.red(`Folder: "${buildPath}/${databaseTemplate}" already exists`));
    } else {
      try {
        cpSync(databaseTemplatePath, buildPath, {
          recursive: true,
          filter: (source) => {
            return source.includes(serverTemplate);
          }
        });
        opt['database'] = databaseTemplate;
      } catch (error: any) {
        log(chalk.red('Error generating database files'));
        throw new Error(error);
      }
    }
  } else {
    opt['database'] = '';
    opt['orm'] = '';
    buildPackages(buildPath, opt);
    if (installChoice) {
      installPackages(buildPath);
    }
  }

  if (ormChoice === true) {
    if (existsSync(`${buildPath}/${ormTemplate}`)) {
      log(chalk.red(`Folder: "${buildPath}/${ormTemplate}" already exists`));
    } else {
      try {
        cpSync(ormTemplatePath, buildPath, {recursive: true});
        opt['orm'] = ormTemplate;
        buildPackages(buildPath, opt);
        if (installChoice){
          installPackages(buildPath)
        }
      } catch (error: any) {
        log(chalk.red('Error generating ORM files'));
        throw new Error(error);
      }
    }
  } else {
    opt['orm'] = '';
    buildPackages(buildPath, opt);
    if (installChoice) {
      installPackages(buildPath);
    }
  }
  return true;
};

function buildPackages (buildPath: string, options: IOptions) {
  const { server, database, orm } = options;
  const buffer = readFileSync(path.join(__dirname,`/templates/json/${server}/${database}/${orm}/package.json`));
  const build = writeFileSync(`${buildPath}/package.json`, buffer);
  try {
    return build
  } catch (error: any) {
    log(chalk.red('Error building package'));
    throw new Error(error);
  }
}

function installPackages (buildPath: string) {
  shell.cd(buildPath);
  const child = shell.exec('npm i', {silent: true, async: true});
  child.on('spawn', progressBar);
}


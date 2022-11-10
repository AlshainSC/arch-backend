import chalk from 'chalk';
import fs from 'fs';
import { IBuild } from './interfaces';

const { log } = console;

export function createDirectory(path: string) {
  if (fs.existsSync(path)) {
    log(chalk.red(`folder "${path}" already exists`))
    return false;
  } else {
    fs.mkdirSync(path);
    log(chalk.greenBright(`successfully created folder @ ${path}`))
    return true;
  }
};

export function copyTemplate(template: IBuild) {
  if (fs.existsSync(`${template.buildPath}/${template.serverTemplate}`)) {
    log(chalk.red(`folder "${template.buildPath}/${template.serverTemplate}" already exists`))
  } else {
    fs.cp(template.serverTemplatePath, template.buildPath, {recursive: true}, () => {})
    log(chalk.yellowBright(`successfully wrote server directory @ ${template.buildPath}`))
  }
  if (fs.existsSync(`${template.buildPath}/${template.databaseTemplate}`)) {
    log(chalk.red(`folder "${template.buildPath}/${template.databaseTemplate}" already exists`))
  } else {
    fs.cp(template.databaseTemplatePath, template.buildPath, {recursive: true}, () => {})
    log(chalk.cyanBright(`successfully wrote database directory @ ${template.buildPath}`))
  }
  if (template.ormChoice === true) {
    if (fs.existsSync(`${template.buildPath}/${template.ormTemplate}`)) {
      log(chalk.red(`folder "${template.buildPath}/${template.ormTemplate}" already exists`))
    } else {
      fs.cp(template.ormTemplatePath, template.buildPath, {recursive: true}, () => {})
      log(chalk.magentaBright(`successfully wrote ORM directory @ ${template.buildPath}`))
    }
  }
  return true;
};
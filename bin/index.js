#!/usr/bin/env node
import inquirer from "inquirer";
import { cwd } from "process";
import path from "path";
import { Question } from "./questionnaire.js";
import { createDirectory, copyTemplate } from "./utils.js";
// const dirname = path.resolve('/usr/local/lib')
//path.resolve(dirname)) + 
const buildDir = path.resolve(cwd());
const { log } = console;
const srvPath = path.join('./templates/Server/');
const dbPath = path.join('./templates/Database/');
const ormPath = path.join('./templates/ORM/');
inquirer.prompt(Question)
    .then((answers) => {
    const name = answers["name"];
    const serverTemplate = answers["server-template"];
    const databaseTemplate = answers["database-template"];
    const ormTemplate = answers["orm-template"];
    const serverTemplatePath = `${srvPath}${serverTemplate}`;
    const databaseTemplatePath = `${dbPath}${databaseTemplate}`;
    const ormTemplatePath = `${ormPath}${ormTemplate}`;
    const ormChoice = answers["use-orm"];
    const databaseChoice = answers["use-database"];
    const buildPath = `${buildDir}/${name}`;
    const build = {
        serverTemplate,
        databaseTemplate,
        ormTemplate,
        serverTemplatePath,
        databaseTemplatePath,
        ormTemplatePath,
        ormChoice,
        databaseChoice,
        buildPath
    };
    const options = {
        name,
        serverTemplate,
        databaseTemplate,
        ormTemplate,
        serverTemplatePath,
        databaseTemplatePath,
        ormTemplatePath,
        buildPath
    };
    log(options);
    //create directory
    if (!createDirectory(options.name)) {
        log('something went wrong');
        return;
    }
    //populate directory based on input templates
    if (!copyTemplate(build)) {
        log('something went wrong WHILE COPYING');
        return;
    }
})
    .catch((err) => {
    console.error(err);
});
// const answers: Record<string, any> = inquirer.prompt(Question);
// try {
//   console.log(answers);
// } catch (error: any) {
//   throw new Error(error);
// }
// new Promise((resolve, reject) => {
//   try {
//     const response = resolve(inquirer.prompt(Question));
//     console.log(response);
//   } catch (error: any) {
//     reject(error)
//     throw new Error(error);
//   }
// })

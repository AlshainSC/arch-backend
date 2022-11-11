#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const process_1 = require("process");
const path_1 = __importDefault(require("path"));
const questionnaire_js_1 = require("./questionnaire.js");
const utils_js_1 = require("./utils.js");
// const dirname = path.resolve('/usr/local/lib')
//path.resolve(dirname)) + 
const buildDir = path_1.default.resolve((0, process_1.cwd)());
const { log } = console;
const srvPath = path_1.default.join(__dirname, '/templates/Server/');
const dbPath = path_1.default.join(__dirname, '/templates/Database/');
const ormPath = path_1.default.join(__dirname, '/templates/ORM/');
inquirer_1.default.prompt(questionnaire_js_1.Question)
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
    if (!(0, utils_js_1.createDirectory)(options.name)) {
        log('something went wrong');
        return;
    }
    //populate directory based on input templates
    if (!(0, utils_js_1.copyTemplate)(build)) {
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

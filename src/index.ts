#!/usr/bin/env node

import inquirer from "inquirer";
import { cwd } from "process";
import shell from "shelljs";
import path from "path";
import { Question } from "./questionnaire.js";
import { IBuild, ICliOpts } from "./interfaces.js";
import { createDirectory, copyTemplate } from "./utils.js";
import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const dirname = path.resolve('/usr/local/lib')
//path.resolve(dirname)) +

const buildDir = path.resolve(cwd());

const { log } = console;
const srvPath = path.join(__dirname, "/templates/Server/");
const dbPath = path.join(__dirname, "/templates/Database/");
const ormPath = path.join(__dirname, "/templates/ORM/");

inquirer
  .prompt(Question)
  .then((answers: Record<string, any>) => {
    const name = answers["name"];
    const serverTemplate = answers["server-template"];
    const databaseTemplate = answers["database-template"];
    const ormTemplate = answers["orm-template"];
    const serverTemplatePath = `${srvPath}${serverTemplate}`;
    const databaseTemplatePath = `${dbPath}${databaseTemplate}/${serverTemplate}`;
    const ormTemplatePath = `${ormPath}${ormTemplate}`;
    const ormChoice = answers["use-orm"];
    const databaseChoice = answers["use-database"];
    const buildPath = `${buildDir}/${name}`;
    const installChoice = answers["install"];

    const build: IBuild = {
      serverTemplate,
      databaseTemplate,
      ormTemplate,
      serverTemplatePath,
      databaseTemplatePath,
      ormTemplatePath,
      ormChoice,
      databaseChoice,
      buildPath,
      installChoice,
    };

    const options: ICliOpts = {
      name,
      serverTemplate,
      databaseTemplate,
      ormTemplate,
      serverTemplatePath,
      databaseTemplatePath,
      ormTemplatePath,
      buildPath,
    };
    //create directory
    if (!createDirectory(options.name)) {
      log("something went wrong");
      return;
    }
    //populate directory based on input templates
    if (!copyTemplate(build)) {
      log("something went wrong WHILE COPYING");
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

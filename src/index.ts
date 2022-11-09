import inquirer from "inquirer";
import { cwd } from "process";
// import path from "path";
import { Question } from "./questionnaire.js"
import { IBuild, ICliOpts } from "./interfaces.js";
import { createDirectory, copyTemplate } from "./utils.js";

const dir = cwd();
const { log } = console;

inquirer.prompt(Question)
  .then((answers: Record<string, any>) => {

    const name = answers["name"];
    const serverTemplate = answers["server template"];
    const databaseTemplate = answers["database template"];
    const ormTemplate = answers["orm template"];
    const serverTemplatePath = `templates/Server/${serverTemplate}`;
    const databaseTemplatePath = `templates/Database/${databaseTemplate}`;
    const ormTemplatePath = `templates/ORM/${ormTemplate}`;
    const buildPath = `${dir}/${name}`;

    const build: IBuild = {
      serverTemplate,
      databaseTemplate,
      ormTemplate,
      serverTemplatePath,
      databaseTemplatePath,
      ormTemplatePath,
      buildPath
    }

    const options: ICliOpts = {
      name,
      serverTemplate,
      databaseTemplate,
      ormTemplate,
      serverTemplatePath,
      databaseTemplatePath,
      ormTemplatePath,
      buildPath
    }
    log(options);

    //create directory
    if (!createDirectory(options.name)) {
      log('something went wrong')
      return;
    }
    //populate directory based on input templates
    if (!copyTemplate(build)) {
      log('something went wrong WHILE COPYING')
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
import fs from "fs";

const serverChoices = fs.readdirSync('templates/Server');
const dbChoices = fs.readdirSync('templates/Database');
const ormChoices = fs.readdirSync('templates/ORM');


export const Question = [
  {
    name: 'name',
    type: 'input',
    message: 'Back-end name: '
  },
  {
    name: 'server-template',
    type: 'list',
    message: 'Choose a server template: ',
    choices: serverChoices
  },
  {
    name: 'use-database',
    type: 'confirm',
    message: 'Use a DataBase?'
  },
  {
    name: 'database-template',
    type: 'list',
    message: 'Choose a database template: ',
    choices: dbChoices,
    when: (answers: Record<string, string | boolean>) => {return answers['use-database']}
  },
  {
    name: 'use-orm',
    type: 'confirm',
    message: 'Use an ORM?',
  },
  {
    name: 'orm-template',
    type: 'list',
    message: 'Choose an ORM: ',
    choices: ormChoices,
    when: (answers: Record<string, string | boolean>) => {return answers['use-orm']}
  }
];

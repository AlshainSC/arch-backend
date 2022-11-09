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
    name: 'server template',
    type: 'list',
    message: 'Choose a server template: ',
    choices: serverChoices
  },
  {
    name: 'database template',
    type: 'list',
    message: 'Choose a database template: ',
    choices: dbChoices
  },
  {
    name: 'orm template',
    type: 'list',
    message: 'Choose an ORM: ',
    choices: ormChoices
  }
];

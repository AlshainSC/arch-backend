import fs from "fs";
import path from "path";
// const __dirname = path.resolve('/usr/local/lib')
//path.resolve(__dirname)) + '/node_modules/arch-backend
const srvPath = path.join('./templates/Server/');
const dbPath = path.join('./templates/Database/');
const ormPath = path.join('./templates/ORM/');
const serverChoices = fs.readdirSync(srvPath);
const dbChoices = fs.readdirSync(dbPath);
const ormChoices = fs.readdirSync(ormPath);
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
        when: (answers) => { return answers['use-database']; }
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
        when: (answers) => { return answers['use-orm']; }
    }
];

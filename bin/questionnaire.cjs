"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// const __dirname = path.resolve('/usr/local/lib')
//path.resolve(__dirname)) + '/node_modules/arch-backend
const srvPath = path_1.default.join(__dirname, '/templates/Server/');
const dbPath = path_1.default.join(__dirname, '/templates/Database/');
const ormPath = path_1.default.join(__dirname, '/templates/ORM/');
const serverChoices = fs_1.default.readdirSync(srvPath);
const dbChoices = fs_1.default.readdirSync(dbPath);
const ormChoices = fs_1.default.readdirSync(ormPath);
exports.Question = [
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

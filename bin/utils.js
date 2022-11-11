"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplate = exports.createDirectory = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// const dirname = path.resolve('/usr/local/lib')
//dirname, '/node_modules/arch-backend/templates'
const { log, info } = console;
const expressMongoose = fs_1.default.readFileSync(path_1.default.join(__dirname, '/templates/json/express-mongo-mongoose/package.json'));
const expressMongo = fs_1.default.readFileSync(path_1.default.join(__dirname, '/templates/json/express-mongo/package.json'));
const packages = {
    expressMongo,
    expressMongoose
};
function createDirectory(path) {
    if (fs_1.default.existsSync(path)) {
        log(chalk_1.default.red(`folder "${path}" already exists`));
        return false;
    }
    else {
        fs_1.default.mkdirSync(path);
        log(chalk_1.default.greenBright(`successfully created ${path}`));
        return true;
    }
}
exports.createDirectory = createDirectory;
;
function copyTemplate(template) {
    if (fs_1.default.existsSync(`${template.buildPath}/${template.serverTemplate}`)) {
        log(chalk_1.default.red(`folder "${template.buildPath}/${template.serverTemplate}" already exists`));
    }
    else {
        try {
            fs_1.default.cp(template.serverTemplatePath, template.buildPath, { recursive: true }, onComplete);
            log(chalk_1.default.yellowBright(`successfully wrote server directory @ ${template.buildPath}`));
        }
        catch (error) {
            log(chalk_1.default.red('error generating server files'));
            throw new Error(error);
        }
    }
    if (template.databaseChoice === true) {
        if (fs_1.default.existsSync(`${template.buildPath}/${template.databaseTemplate}`)) {
            log(chalk_1.default.red(`folder "${template.buildPath}/${template.databaseTemplate}" already exists`));
        }
        else {
            try {
                fs_1.default.cp(template.databaseTemplatePath, template.buildPath, { recursive: true }, onComplete);
                buildPackages(template.buildPath, packages.expressMongo);
                log(chalk_1.default.cyanBright(`successfully wrote database directory @ ${template.buildPath}`));
            }
            catch (error) {
                log(chalk_1.default.red('error generating database files'));
                throw new Error(error);
            }
        }
    }
    if (template.ormChoice === true) {
        if (fs_1.default.existsSync(`${template.buildPath}/${template.ormTemplate}`)) {
            log(chalk_1.default.red(`folder "${template.buildPath}/${template.ormTemplate}" already exists`));
        }
        else {
            try {
                fs_1.default.cp(template.ormTemplatePath, template.buildPath, { recursive: true }, onComplete);
                buildPackages(template.buildPath, packages.expressMongoose);
                log(chalk_1.default.magentaBright(`successfully wrote ORM directory @ ${template.buildPath}`));
            }
            catch (error) {
                log(chalk_1.default.red('error generating ORM files'));
                throw new Error(error);
            }
        }
    }
    return true;
}
exports.copyTemplate = copyTemplate;
;
function buildPackages(buildPath, data) {
    //const build = fs.cp(directory, buildPath, {recursive: true}, onComplete)
    const build = fs_1.default.writeFile(`${buildPath}/package.json`, data, onComplete);
    try {
        log(chalk_1.default.green(`package built`));
        return build;
    }
    catch (error) {
        log(chalk_1.default.red('Error building package'));
        throw new Error(error);
    }
}
function onComplete() {
    info('file generated');
}

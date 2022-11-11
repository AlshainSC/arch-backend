import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
// const dirname = path.resolve('/usr/local/lib')
//dirname, '/node_modules/arch-backend/templates'
const { log, info } = console;
const expressMongoose = fs.readFileSync(path.join('./templates/json/express-mongo-mongoose/package.json'));
const expressMongo = fs.readFileSync(path.join('./templates/json/express-mongo/package.json'));
const packages = {
    expressMongo,
    expressMongoose
};
export function createDirectory(path) {
    if (fs.existsSync(path)) {
        log(chalk.red(`folder "${path}" already exists`));
        return false;
    }
    else {
        fs.mkdirSync(path);
        log(chalk.greenBright(`successfully created ${path}`));
        return true;
    }
}
;
export function copyTemplate(template) {
    if (fs.existsSync(`${template.buildPath}/${template.serverTemplate}`)) {
        log(chalk.red(`folder "${template.buildPath}/${template.serverTemplate}" already exists`));
    }
    else {
        try {
            fs.cp(template.serverTemplatePath, template.buildPath, { recursive: true }, onComplete);
            log(chalk.yellowBright(`successfully wrote server directory @ ${template.buildPath}`));
        }
        catch (error) {
            log(chalk.red('error generating server files'));
            throw new Error(error);
        }
    }
    if (template.databaseChoice === true) {
        if (fs.existsSync(`${template.buildPath}/${template.databaseTemplate}`)) {
            log(chalk.red(`folder "${template.buildPath}/${template.databaseTemplate}" already exists`));
        }
        else {
            try {
                fs.cp(template.databaseTemplatePath, template.buildPath, { recursive: true }, onComplete);
                buildPackages(template.buildPath, packages.expressMongo);
                log(chalk.cyanBright(`successfully wrote database directory @ ${template.buildPath}`));
            }
            catch (error) {
                log(chalk.red('error generating database files'));
                throw new Error(error);
            }
        }
    }
    if (template.ormChoice === true) {
        if (fs.existsSync(`${template.buildPath}/${template.ormTemplate}`)) {
            log(chalk.red(`folder "${template.buildPath}/${template.ormTemplate}" already exists`));
        }
        else {
            try {
                fs.cp(template.ormTemplatePath, template.buildPath, { recursive: true }, onComplete);
                buildPackages(template.buildPath, packages.expressMongoose);
                log(chalk.magentaBright(`successfully wrote ORM directory @ ${template.buildPath}`));
            }
            catch (error) {
                log(chalk.red('error generating ORM files'));
                throw new Error(error);
            }
        }
    }
    return true;
}
;
function buildPackages(buildPath, data) {
    //const build = fs.cp(directory, buildPath, {recursive: true}, onComplete)
    const build = fs.writeFile(`${buildPath}/package.json`, data, onComplete);
    try {
        log(chalk.green(`package built`));
        return build;
    }
    catch (error) {
        log(chalk.red('Error building package'));
        throw new Error(error);
    }
}
function onComplete() {
    info('file generated');
}

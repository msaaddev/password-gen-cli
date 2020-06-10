// importing packages

const fs = require('fs');
const chalk = require('chalk');
const io = require('console-read-write');
const clipboardy = require('clipboardy');

module.exports = async () => {
    let pass = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 15; i++)
        pass += characters.charAt(Math.floor(Math.random() * charactersLength));

    try {
        await clipboardy.write(pass);
        io.write(
            chalk.italic(`\n Password successfully generated & copied to the clipboard: ${pass}`)
        );
    } catch (error) {
        io.write(chalk.red(` Couldn't copy password to the clipboard\n`));
        halk.italic(`Password: ${pass}`);
    }
};

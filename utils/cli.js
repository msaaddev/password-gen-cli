// importing packages and files

const fs = require('fs');
const chalk = require('chalk');
const io = require('console-read-write');
const clipboardy = require('clipboardy');

module.exports = async () => {
    // generating random password
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 15; i++)
        password += characters.charAt(Math.floor(Math.random() * charactersLength));

    // copying to the clipboard
    try {
        await clipboardy.write(password);
        io.write(
            chalk.italic(
                `\n Password successfully generated & copied to the clipboard: ${password}`
            )
        );
    } catch (error) {
        io.write(chalk.red(` Couldn't copy password to the clipboard\n`));
        io.write(chalk.italic(`Password: ${password}`));
    }
};

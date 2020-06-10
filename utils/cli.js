// importing packages

const fs = require('fs');
const chalk = require('chalk');
const io = require('console-read-write');

module.exports = () => {
    let pass = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 15; i++)
        pass += characters.charAt(Math.floor(Math.random() * charactersLength));
    io.write(chalk.italic(`\n Password successfully generated & copied to the clipboard: ${pass}`));
};

// importing packages
const fs = require('fs');
const chalk = require('chalk');
const io = require('console-read-write');
const pwd = process.cwd();

module.exports = async (password) => {
    let check = '';
    io.write(
        chalk.yellow(
            '\n If you wish to save the password, enter any letter. If you are not interested then press Enter button to continue: '
        )
    );
    check = await io.read();

    if (check != '') {
        io.write(chalk.yellow('\n Enter website name: '));
        const website = await io.read();
        io.write(chalk.yellow('\n Enter your email: '));
        const email = await io.read();

        const credentials = `
{
	website: ${website}
	email: ${email}
	password: ${password}
}`;

        fs.appendFile(`${pwd}/credentials.txt`, credentials, (err) => {});
    } else {
        io.write(chalk.red('\n Password is not saved.'));
    }
};

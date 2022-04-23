// include required packages / modules
const fs = require('fs'); // include File System
const inquirer = require('inquirer'); // include inquirer
const generateMarkdown = require('./src/md-template'); // include md-template

// prompt user for information
const promptUserInfo = () => {
    console.log(`
================
User Information
================
    `)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please include a name ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'occupation',
                message: 'What is your occupation?',
                validate: occupationInput => {
                    if (occupationInput) {
                        return true;
                    }
                    else {
                        console.log('Please include an occupation ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your e-mail address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please include an e-mail ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                        console.log('Please include a username ❗');
                        return false;
                    }
                }
            }
        ]);
};

const promptProjectInfo = userData => {
    console.log(`
===================
Project Information
===================
    `)

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'license',
                message: 'Please select a license from the following list:',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0'],
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log('Please include a title ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project about?',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    }
                    else {
                        console.log('Please include a description ❗');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'technologiesConfirm',
                message: 'Do you want to include a technologies section?',
                default: false
            },
            {
                type: 'checkbox',
                name: 'technologies',
                message: 'What technologies will you use on this project?',
                when: (({technologiesConfirm}) => {
                    if (technologiesConfirm) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }),
                choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'Markdown'],
                validate: response => {
                    if (response.length < 1) {
                        return 'Please choose at least one technology ❗';
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What do I need to install the application?',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    }
                    else {
                        console.log('Please include instructions ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use the application?',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    }
                    else {
                        console.log('Please include ready-to-use samples of code ❗');
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'How can someone contribute to this project?',
                validate: contributingInput => {
                    if (contributingInput) {
                        return true;
                    }
                    else {
                        console.log('Please include how-to-contribute guidelines ❗');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide a test example.',
                validate: testsInput => {
                    if (testsInput) {
                        return true;
                    }
                    else {
                        console.log('Please include test examples for your application ❗');
                        return false;
                    }
                }
            },
        ])
        .then((markdownData) => {
            const finalData = Object.assign(userData, markdownData);
            console.log(finalData);
            return finalData;
        });
};

promptUserInfo()
    .then(promptProjectInfo)
    .then(userData => {
        const sendUserData = generateMarkdown(userData);

        fs.writeFile('./dist/README.md', sendUserData, (err) => {
            if (err) throw new Error(err);
        });
    });
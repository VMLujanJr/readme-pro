// TODO: Include packages needed for this application
const fs = require('fs'); // include File System
const inquirer = require('inquirer'); // include inquirer
const generateMarkdown = require('./src/md-template'); // include md-template

// TODO: Create an array of questions for user input
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

    if (!userData.readme) {
        userData.readme = [];
    }

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
                choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Node.js', 'Express.js'],
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
            {
                type: 'confirm',
                name: 'confirmGenReadme',
                message: 'Do you want to create another README.md?',
                default: false
            }
        ])
        .then((readmeData) => {

            userData.readme.push(readmeData);
            
            if (readmeData.confirmGenReadme) {
                return promptProjectInfo(userData);
            }
            else {
                return userData;
            }

            // check if responses were receieved
            /* console.log('MY RESPONSE: ', responses); */
            // write it out
/*             const gen = generateMarkdown(readmeData);

            fs.writeFile('README.md', gen, (err) => {
                if (err) throw err;
                console.log('readme created!');
            }) */
        });
};

/* const sendUserData = userData => {
    
    const genMarkdown = generateMarkdown(userData);

    fs.writeFile('README.md', genMarkdown, (err) => {
        if (err) throw err;
    })
} */

/* const mockup = {
    name: 'Victor',
    github: 'VMLujanJr',
    email: 'vmlujanjr@outlook.com',
    readme: [
        {
        licenseConfirm: true,
        license: 'MIT',
        title: 'Amazon',
        description: 'It delivers stuff!',
        languageConfirm: true,
        language: [Array],
        installation: [Array],
        usage: 'I send stuff!',
        contributing: 'Me!',
        tests: '100 + 100 = 200!',
        confirmGenReadme: true
        },
        {
        licenseConfirm: true,
        license: 'APACHE2.0',
        title: 'Facebank',
        description: 'We send and collect messages!',
        languageConfirm: true,
        language: [Array],
        installation: [Array],
        usage: 'Create a Facebank profile!',
        contributing: 'Someone else!',
        tests: '1 + 1 = 2',
        confirmGenReadme: false
        }
    ]
}; */

/* const gen = generateMarkdown(mockup); */

promptUserInfo()
    .then(promptProjectInfo)
    .then(userData => {
        const sendUserData = generateMarkdown(userData);

        fs.writeFile('./README.md', sendUserData, (err) => {
            if (err) throw new Error(err);
        });
    });



// TODO: Create a function to write README file
/* function writeToFile(fileName, data) {} */

// TODO: Create a function to initialize app
/* function init() {} */

// Function call to initialize app
/* init(); */

// `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
// ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
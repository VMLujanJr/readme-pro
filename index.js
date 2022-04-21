// TODO: Include packages needed for this application
const fs = require('fs'); // include File System
const inquirer = require('inquirer'); // include inquirer
const generateMarkdown = require('./src/md-template'); // include md-template
console.log(generateMarkdown);

// create command-line user input
/* const userData = process.argv.slice(2);  */// command-line that accepts user input

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of what your project is about.'
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: 'What technologies do you need to run the application?',
            choices: ['HTML', 'CSS', 'JavaScript']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the application? Provide an example for its use.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a few example tests.'
        }
    ])
    .then((responses) => {
        // check if responses were receieved
        console.log('MY RESPONSE: ', responses);
        // write it out
        const gen = generateMarkdown(responses);

        fs.writeFile('README.md', gen, (err) => {
            if (err) throw err;
            console.log('readme created!');
        })
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs'); // include File System
const inquirer = require('inquirer');
const generateMarkdown = require('./src/md-template'); // include md-template
console.log(generateMarkdown);

// create command-line user input
const userData = process.argv.slice(2); // command-line that accepts user input
console.log(userData);
// TODO: Create an array of questions for user input
const questions = [];
console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

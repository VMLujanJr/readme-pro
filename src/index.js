// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

const questionDataArgs = process.argv.slice(2, process.argv.length);
console.log(questionDataArgs);

const renderQuestionData = questionData => {
    questionData.forEach(questionItem => console.log(questionItem));
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

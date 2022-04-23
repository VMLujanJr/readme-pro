module.exports = userData => {
	console.log(userData, 'INSIDE TEMPLATE ❗');

	// destructure userData
	const {name, email, github, ...markdown} = userData;
	console.log(name, github, email, markdown);

	// badges
	/* 
	https://img.shields.io/badge/License-MIT-blue
	https://img.shields.io/badge/License-Apache%202.0-blue
	https://img.shields.io/badge/License-GPL%203.0-blue
	*/
/* return 
# ${title}

## Description

${description}

You may visit the deployed [website](https://${github}.github.io/${title}/) to try it out for yourself!

## Table of Contents

- [${title}](#${title})
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
    - [Additional Criteria](#additional-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## User Story
~~~
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
~~~

## Acceptance Criteria

GIVEN a command-line application that accepts user input
- [ ] WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- [x] WHEN I enter my project title
THEN this is displayed as the title of the README
- [x] WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- [ ] WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- [x] WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- [x] WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- [x] WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

### Additional Criteria

**Deliverables: 20%**

- [ ] A sample README generated using the application must be submitted
- [ ] Your GitHub repository containing your application code

**Walkthrough Video: 27%**

- [ ] A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file
- [ ] The walkthrough video must demonstrate how a user would invoke the application from the command line
- [ ] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
- [ ] The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

**Technical Acceptance: 40%**

- [ ] Satisfies all of the above acceptance criteria plus the following:
- [x] Uses the [inquierer package](https://www.npmjs.com/package/inquirer)

**Repository Quality: 13%**

- [x] Repository has a unique name
- [ ] Repository follows best practices for file structure and naming conventions
- [ ] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [ ] Repository contains multiple descriptive commit messages
- [ ] Repository contains quality README.md with description and a link to walkthrough video

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests
${tests}

## Questions

If you have any questions, you may direct them to ${github} using the following links:

| Contact | Description |
| --- | --- |
| GitHub | <https://github.com/${github}/> |
| E-mail | <${email}> |
`; */
}
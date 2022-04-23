// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // ..is it array?
  const [title, description, github, installation, usage, contributing, tests] = data;
  // ..or is it object?
  /* const {title, description, github, installation, usage, contributing, tests} = data; */

  return `
    # ${title}
    
    ## Description

    [${title}](https://github.com/${github}/${title}) ${description}

    You may visit the deployed [website](https://${github}.github.io/${title}/) to try it out for yourself!

    ## Table of Contents

    - [${title}](#${title})
      - [Description](#description)
      - [Table of Contents](#table-of-contents)
      - [Installation](#installation)
      - [Usage](#usage)
      - [Contributing](#contributing)
      - [Tests](#tests)

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Contributing

    ${contributing}

    ## Tests
    ${tests}
  `;
}

module.exports = generateMarkdown;

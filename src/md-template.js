module.exports = data => {
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
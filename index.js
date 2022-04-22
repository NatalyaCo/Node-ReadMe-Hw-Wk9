const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);



const uswrPrompts = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your Project title?',
      },
      {
        type: "input",
        name: "author",
        message: "What is the author's name?"
    },

      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
      {
        type: 'list',
        name: 'license',
        message: 'Choose license you are using',
        choices: ['None', 'MIT License', 'Apache License 2.0', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0']
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know before running this program?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Installation procedures and commands to enter to run this program',
      },

      {
          type: 'input',
          name: 'tests',
          message: 'What command does the user need to enter to run tests?'

      },
      {
          type: 'input',
          name: 'contribute',
          message: 'What are your contribution guidelines for this project?',
      },

     {
         type: 'input',
         name: 'questions',
         message: 'Enter your email',
     }, 

    ]);
    
};

function generateMD(data){
     
let badge = "";
if(data.license == "MIT License"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=yellowgreen&style=plastic)"
}else if (data.license == "APACHE License 2.0"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=green&style=plastic)"
}else if (data.license == "Boost Software License 1.0"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=Boost.0&color=yellow&style=plastic)"
}else if (data.license == "Eclipse Public License 2.0"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=Eclipse.0&color=orange&style=plastic)"
}else if (data.license == "Mozilla Public License 2.0"){
    badge = "![License](https://img.shields.io/static/v1?label=License&message=Mozilla.0&color=blue&style=plastic)"
}    


 
  
//   function generateMarkdown(data) {

    return`# ${data.title}  
    ${badge}
    ${data.description}
    ## Table of Contents:
    * [Installation](#install)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contribute)
    * [Tests](#tests)
    * [Questions](#questions)
    ### Installation:
    In order to install the necessary dependencies, open the console and run the following:
    \`\`\`${data.install}\`\`\`
    ### Usage:
    ${data.usage}
    ### License:
    This project is licensed under:
    ${data.license}
    ### Contributing:
    ${data.contribute}
    ### Tests:
    In order to test open the console and run the following:
    \`\`\`${data.tests}\`\`\`
    ### Questions:
    If you have any questions contact me on [GitHub](https://github.com/${data.username}) or contact 
    ${data.author} at ${data.email}  
     `
    }
    

uswrPrompts()
.then((data) => writeFileAsync('generatedREADME.md', generateMD(data)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
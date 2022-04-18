const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your Project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Descrribe the usage',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Installation procedures.',
      },
    ]);
};
const generateHTML= ({ name, description, usage, install }) => 

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h3>README GENERATOR <span class="badge badge-secondary">By Natalya</span></h3>
      <h1 class="display-4">ReadMe File for ${name}</h1>
      <p class="lead">Project description ${description}.</p>
      
      <ul class="list-group">
        <li class="list-group-item">Usage ${usage}</li>
        <li class="list-group-item">Intallation ${install}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`

  const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
  

//   function renderLicenseBadge(license) {
//     let licenseType = license
//     let yourLicense = ''

//     if(licenseType === 'MIT') {
//       yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//     } else if (licenseType === 'GPLv3') {
//       yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
//     } else if (licenseType === 'GPL') {
//       yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
//     } else { licenseType === ' '
//          }
//     return yourLicense;
   
//   };
//  console.log (license);
  
//   function generateMarkdown(data) {


//     return `# ${data.title}
//     ## license 
//     ${renderLicenseBadge(license)}` 
    
    
//     }
// console.log(data);

//   console.log(answer.title );
//   console.log(answer.description);
//   console.log(answer.tableCont );  
//   console.log(answer.installation);
//   console.log(answer.usage);
//   console.log(answer.license);
//   console.log(answer.contrGuide);
//   console.log(answer.tests);
//   console.log(answer.questions);
  
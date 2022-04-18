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



const generateHTML= ({ name, license, description, usage, install, tests, contribute, questions }) => 

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
      <p class="lead">License Used ${license}</p>
      
      
    </div>
  </div>

  <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-descr-list" data-toggle="list" href="#list-descr" role="tab" aria-controls="descr">Description</a>
      <a class="list-group-item list-group-item-action" id="list-install-list" data-toggle="list" href="#list-install" role="tab" aria-controls="install">Installation </a>
      <a class="list-group-item list-group-item-action" id="list-usage-list" data-toggle="list" href="#list-usage" role="tab" aria-controls="usage">Usage</a>
      <a class="list-group-item list-group-item-action" id="list-contrib-list" data-toggle="list" href="#list-contrib" role="tab" aria-controls="contrib">Contributions</a>
      <a class="list-group-item list-group-item-action" id="list-tests-list" data-toggle="list" href="#list-tests" role="tab" aria-controls="tests">Tests</a>
      <a class="list-group-item list-group-item-action" id="list-questions-list" data-toggle="list" href="#list-questions" role="tab" aria-controls="questions">Questions</a>
      </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-descr" role="tabpanel" aria-labelledby="list-descr-list">${description}</div>
      <div class="tab-pane fade" id="list-install" role="tabpanel" aria-labelledby="list-install-list">${install}</div>
      <div class="tab-pane fade" id="list-usage" role="tabpanel" aria-labelledby="list-usage-list">${usage}</div>
      <div class="tab-pane fade" id="list-contrib" role="tabpanel" aria-labelledby="list-contrib-list">${tests}</div>
      <div class="tab-pane fade" id="list-tests" role="tabpanel" aria-labelledby="list-tests-list">${contribute}</div>
      <div class="tab-pane fade" id="list-questions" role="tabpanel" aria-labelledby="list-questions-list">${questions}</div>
    </div>
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

  //to activate the list
//   $('#myList a').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
//   });

  //to activate each tab
//   $('#myList a[href="#install"]').tab('show')


  

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
  
  function generateMarkdown(data) {


    return `#{data.title}
    ## license 
    ${renderLicenseBadge(license)} 
    
    
  } 
console.log (data);

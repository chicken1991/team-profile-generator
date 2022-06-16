// Dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const generateManager = require('./lib/generateManager');
const generateFooter = require('./lib/generateFooter');
const generateEngineer = require('./lib/generateEngineer');
const generateIntern = require('./lib/generateIntern');

// lib files
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
// const { exit } = require('process');  =============     wtf is this? I don't remember this

const promptManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Manager's name: ",
    },
    {
      type: 'input',
      name: 'id',
      message: "Manager's Employee ID",
    },
    {
      type: 'input',
      name: 'email',
      message: "Manager's email address: ",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Manager's office number: ",
    }
  ])
  .then((answers) => appendToFile(generateManager(answers.name, answers.id, answers.email, answers.officeNumber)))
  .then(promptProceed)
  .catch((err) => console.log(err));
};


const promptEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Engineer's name: ",
    },
    {
      type: 'input',
      name: 'id',
      message: "Engineer's Employee ID",
    },
    {
      type: 'input',
      name: 'email',
      message: "Engineer's email address: ",
    },
    {
      type: 'input',
      name: 'github',
      message: "Engineer's Github Username: ",
    }
  ])
  .then((answers) => appendToFile(generateEngineer(answers.name, answers.id, answers.email, answers.github)))
  .then(promptProceed)
  .catch((err) => console.log(err));
};

const promptIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Intern's name: ",
    },
    {
      type: 'input',
      name: 'id',
      message: "Intern's Employee ID",
    },
    {
      type: 'input',
      name: 'email',
      message: "Intern's email address: ",
    },
    {
      type: 'input',
      name: 'school',
      message: "Intern's School: ",
    }
  ])
  .then((answers) => appendToFile(generateIntern(answers.name, answers.id, answers.email, answers.school)))
  .then(promptProceed)
  .catch((err) => console.log(err));
};

const promptProceed = () => {
  inquirer
  .prompt
  ([{
      type: 'list',
      name: 'answer',
      message: "Would you like to add a new Engineer, Intern - or exit? ",
      choices: [
        "Engineer",
        "Intern",
        "Exit"
      ]
}])
  .then(val => { 
    console.log("You have selected " + val.answer);
    if (val.answer === "Engineer") {
      promptEngineer();
    } else if (val.answer === "Intern") {
      promptIntern();
    } else {
      console.log("Exiting")
      //Append the footer of the HTML file
      appendToFile(generateFooter);
    };
  })
  .catch((err) => console.error(err));
};

function appendToFile(data) {
  fs.appendFile('./dist/index.html', data, (err) =>
  err ? console.error(err) : console.log('Sucessfully wrote file') 
  );
}

function init() {

  //Reset index.html?
  
  //prompts for manager info
  promptManager()
  
}




init();

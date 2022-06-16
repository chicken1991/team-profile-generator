// Dependancies
const inquirer = require('inquirer');
const fs = require('fs');

// lib files
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
// const { exit } = require('process'); //wtf is this? I don't remember this

//TODO: Create an object that utilizes the manager, engineer, and intern classes to append appropriate object properties based
// on the user input
let manObj;
let empObj;

const promptInit = () => {
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
  // .then(writetohtml or something)
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
      name: 'officeNumber',
      message: "Engineer's Github Username: ",
    }
  ])
  // .then(writetohtml or something)
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
      name: 'officeNumber',
      message: "Intern's School: ",
    }
  ])
  // .then(writetohtml or something)
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
    };
  })
  .catch((err) => console.error(err));



};

// input function
// Demand to fill out manager - cannot continue without manager
// Provide option to add either Engineer or Intern
// IF engineer, proceed with adding new Engineer
// IF intern, proceed with adding new Intern
// after each selection, add option to add Engineer or Intern OR Finish
function init() {
  //prompts for manager info
  promptInit()
    // .then((answers) => console.log(answers)) // console log for now TODO: write this to an object which can be called, then written to html
    // .catch((err) => console.error(err));

  // promptProceed()
  //prompt to add intern, engineer, or Finish
  // promptEmployee();
}




init();

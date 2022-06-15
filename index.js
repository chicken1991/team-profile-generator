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

async function promptManager(){
  return inquirer.prompt([
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
  ]);
};

async function promptProceed() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'answer',
      message: "Would you like to add an Engineer, Intern, or exit? ",
      choices: [
        "Engineer",
        "Intenrn",
        "Exit"
      ]
    }
  ]);
};

// input function
// Demand to fill out manager - cannot continue without manager
// Provide option to add either Engineer or Intern
// IF engineer, proceed with adding new Engineer
// IF intern, proceed with adding new Intern
// after each selection, add option to add Engineer or Intern OR Finish
function init() {
  //prompts for manager info
  promptManager()
    .then((answers) => console.log(answers)) // console log for now TODO: write this to an object which can be called, then written to html
    .catch((err) => console.error(err));

  promptProceed()
    .then((answer) => {
      if (answer === "Engineer") {
        promptEngineer();
      } else if (answer === "Intenrn") {
        promptIntern();
      } else {
        console.log("Exiting and writing to file")
      };
    })
    .catch((err) => console.error(err));
  //prompt to add intern, engineer, or Finish
  // promptEmployee();
}

//create HTML and insert appropriate ${data.stuff} for each modal
const renderHTML = (data) => { };

init();
renderHTML();
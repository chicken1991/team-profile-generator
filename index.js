// Dependancies
const inquierer = require('inquirer');
const fs = require('fs');

// lib files
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

//TODO: Create an object that utilizes the manager, engineer, and intern classes to append appropriate object properties based
// on the user input
let empObj; 

const promptManager = () => {
    return inquirer.prompt(
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
    )};

// input function
// Demand to fill out manager - cannot continue without manager
// Provide option to add either Engineer or Intern
// IF engineer, proceed with adding new Engineer
// IF intern, proceed with adding new Intern
// after each selection, add option to add Engineer or Intern OR Finish
const init = () => {
    //prompts for manager info
    promptManager();

    //prompt to add intern, engineer, or Finish
    promptEmployee();
}

//create HTML and insert appropriate ${data.stuff} for each modal
const renderHTML = (data) => {}

init();
renderHTML();
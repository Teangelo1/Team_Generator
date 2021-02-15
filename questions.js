const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const intern = require('./lib/intern')
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');


function inputEmployee() {

    inquire.prompt([
        {
            type: "list",
            message: "Choose the type of employee you would like to input.",
            name: "name",
            choices: ["Manager", "Engineer", "Intern"]
        },

    ]).then(val => {
        if (val.name === "Manager") {
             managerInput();
        } else if (val.name === "Engineer") {
            engineerInput()

        } else if (val.name === "Intern") {
            internInput();
        } // Maybe use a switch case statement here instead of else if?
    });

};

function managerInput() {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'

        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'

        }
    ])
};

function engineerInput() {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'

        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github name?'

        }
    ])
};

function internInput() {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'

        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'What school did you study at?'

        }
    ])
};



inputEmployee();
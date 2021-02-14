const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
const intern = require('./lib/intern')
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');


function inputEmployee(){

    inquire.prompt([
        {
            type: "list",
            message: "Choose the type of employee you would like to input.",
            name: "name",
            choices: ["Manager", "Engineer", "Intern"]
        },
    
    ]).then(val => {
        if(val === "Manager"){
             // function with questions for manager information will go here
            } else if(val.name === "Engineer"){
                //function with questions for engineer information will go here

            } else if(val.name === "Intern") {
                //function with questions for manager information will go here
            } // Maybe use a switch case statement here instead of else if?
    });
};

inputEmployee();
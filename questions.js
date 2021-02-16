const inquire = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const generateHtml = require('./generatehtml')

const webDevs = [];


function whichRole() {

    inquire.prompt([
        {
            type: "list",
            message: "What is your role with the company?",
            name: "name",
            choices: ["Manager", "Engineer", "Intern"]
        },

    ]).then(val => {

        switch (val.name) {
            case "Manager":
                managerInput()
                break;

            case "Engineer":
                engineerInput()
                break;

            case "Intern":
                internInput();
        }
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
            name: 'name',
            message: 'What is your role with the company?'


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

        },

        {
            type: "list",
            message: "Would you like to add another employee to the development team?",
            name: "anotherEmployee",
            choices: ["Manager", "Engineer", "Intern", "No"]

        }

    ]).then(function (data) {

        switch (data.anotherEmployee) {
            case "Manager":
                managerInput()
                break;


            case "Engineer":
                engineerInput()
                break;

            case "Intern":
                internInput();
        }
        let m = new Manager(data.name, data.id, data.email, data.officeNumber)
        webDevs.push(m)
        //  console.log(webDevs)
    })
}



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

        },
        {
            type: "list",
            message: "Would you like to add another employee to the development team",
            name: "anotherEmployee",
            choices: ["Manager", "Engineer", "Intern", "No"]

        }
    ]).then(function (data) {
        switch (data.anotherEmployee) {
            case "Manager":
                managerInput()
                break;


            case "Engineer":
                engineerInput()
                break;

            case "Intern":
                internInput();
        }
        let e = new Engineer(data.name, data.id, data.email, data.github)
        webDevs.push(e);
        // console.log(webDevs)
    });
}

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
            name: 'school',
            message: 'What is school of studies?'

        },

        {
            type: "list",
            message: "Would you like to add another employee to the development team?",
            name: "anotherEmployee",
            choices: ["Manager", "Engineer", "Intern", "No"]

        }

    ]).then(function (data) {
        switch (data.anotherEmployee) {
            case "Manager":
                managerInput()
                break;


            case "Engineer":
                engineerInput()
                break;

            case "Intern":
                internInput();
        }

        let i = new Intern(data.name, data.id, data.email, data.school)
        webDevs.push(i);
        // console.log(webDevs)
    });

}
whichRole()

 function newHtmlFile(){

        let htmlFile = generateHtml()
        fs.writeFile("index.html", htmlFile, (err) =>
        err ? console.log(err) : console.log("You're HTML file has been created") )

 }
 newHtmlFile();
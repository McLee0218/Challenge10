const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamMemberArray = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managersName',
            message: 'Please enter you managers name'
        },
        {
            type: 'input',
            name: 'managersId',
            message: 'Please enter your managers ID'
        },
        {
            type: 'input',
            name: 'managersEmail',
            message: 'What is you managers email'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your managers office number'
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.managersName, managerData.managersId, managerData.managersEmail, managerData.managerOfficeNumber)
        teamMemberArray.push(manager)
        console.log(manager)
    })
}
managerPrompt();
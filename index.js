// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    //Name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter description about your project',
    },
    //Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions to run your project',
    },
    //Usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information of your project repository',
    },
    //Contribution guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter guideline instructions on how to contribute to this project'
    },
    //test instructions
    {
        type: 'input',
        name: 'test',
        message: 'Enter commands to use to run tests (if applicable)',
    },
    //License
    {
        type: 'list',
        name: 'license',
        message: 'Select a license (if applicable) for your repository',
        choices: ['Apache 2.0', 'GNUGPLv3.0', 'MIT', 'Mozilla Public 2.0', 'the Unlicense' ]
    },
    //Your name
    {
        ype: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    //github username
    {
        ype: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        
    },
    //link to github profile
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your GitHub',
    },
    //email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            const markDown = generateMarkdown(data)
            fs.writeFile('generated-README.md', markDown, function(err) {
                if (err) {
                    console.log('File could not be created', err)
                } else {
                    console.log('Successfully created README file!')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();
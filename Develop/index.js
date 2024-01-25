// TODO: Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What tools are required?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions or examples for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List all collaborators:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [
            'MIT',
            'APACHE2.0',
            'GPL3.0',
            'BSD1',
            'BSD2',
            'BSD3',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the features of your application?'
    },
];

// TODO: Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers.title);
        writeToFile('readme.md', generateMarkdown({ ...answers }))
    })
}

// Function call to initialize app
init();

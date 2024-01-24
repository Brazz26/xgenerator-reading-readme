// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'title',
       message: 'What is the title of your application?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like?',
        choices: [
            'MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers.title);
        writeToFile('readme.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();

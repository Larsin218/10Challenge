const inquirer = require('inquirer');
const jest = require('jest');
const SVG = require('svg');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color will the shape be:'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to put into the shape:'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color will the text be:'
    }
];


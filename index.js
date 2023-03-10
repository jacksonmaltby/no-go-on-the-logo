const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Circle = require('./library/circle.js');
const Square = require('./library/square.js');
const Triangle = require('./library/triangle.js');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color for text:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape:',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color for shape:'
    }
]).then(({
    text, textColor, shapeType, shapeColor
}) => {
    let shape
    switch (shapeType) {
        case 'circle':
            shape = new Circle(text, textColor, shapeColor);
            break;
        case 'square':
            shape = new Square(text, textColor, shapeColor);
            break;
        default: 'triangle'
            shape = new Triangle(text, textColor, shapeColor);

    }
    let data = shape.render();
    writeFile('logo.svg', data);
});

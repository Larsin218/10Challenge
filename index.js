const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "Pick a shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color will the shape be:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters to put into the shape:",
    validate: (input) =>
      input.length > 3 ? "Text cannot be longer that 3 characters." : true,
  },
  {
    type: "input",
    name: "textColor",
    message: "What color will the text be:",
  },
];

const makeSVG = (shape, shapeColor, text, textColor) => {
  const width = 300,
    height = 200;

  switch (shape) {
    case "Circle":
      shapeSVG = Circle;
      break;
    case "Square":
      shapeSVG = Square;
      break;
    case "Triangle":
      shapeSVG = Triangle;
      break;
  }

  return `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
};

const saveSVGFile = (SVGLogo) => {
  fs.writeFileSync('logo.svg', SVGLogo);
  console.log('Generated logo.svg');
};

inquirer.prompt(questions).then(answers => {
  const { shape, shapeColor, text, textColor } = answers;
  const SVGLogo = makeSVG(shape, shapeColor, text, textColor);
  saveSVGFile(SVGLogo);
})
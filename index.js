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
    name: "color",
    message: "What color will the shape be:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters to put into the shape:",
  },
  {
    type: "input",
    name: "textColor",
    message: "What color will the text be:",
  },
];

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Pick a shape:",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: "What color will the shape be:",
    },
    {
      type: "input",
      name: "text",
      message: "Enter up to 3 characters to put into the shape:",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color will the text be:",
    },
  ])
  .then((answers) => {
    // TODO: finish this
  });

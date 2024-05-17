#!/usr/bin/env node
// Import necessary libraries
import inquirer from "inquirer"; // Used to prompt the user for input.
import chalk from "chalk"; // Used to add colors to the console output.
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10 + 1);
// ASCII art for the game title
const asciiArt = `
${chalk.green(" __     __          __          ___       _ ")}
${chalk.green(" \\ \\   / /          \\ \\        / (_)     | |")}
${chalk.green("  \\ \\_/ /__  _   _   \\ \\  /\\  / / _ _ __ | |")}
${chalk.green("   \\   / _ \\| | | |   \\ \\/  \\/ / | | '_ \\| |")}
${chalk.green("    | | (_) | |_| |    \\  /\\  /  | | | | |_|")}
${chalk.green("    |_|\\___/ \\__,_|     \\/  \\/   |_|_| |_(_)")}
`;
console.log(asciiArt);
// Prompt the user to guess a number
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 10: ",
    },
]);
// Check if the user's guess is correct
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.blue("Congratulations! You guessed the right number."));
}
else {
    console.log(chalk.red("Sorry, you guessed the wrong number."));
    console.log(chalk.yellow(`The correct number was ${randomNumber}.`));
}

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("Remember your Childhood Memories and Enjoy this NUMBER GUESSING GAME"));
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "game",
        type: "number",
        message: "Enter Your Guess Number from 1 to 5"
    }
]);
if (randomNumber === answer.game) {
    console.log(chalk.bgGreenBright("wow!! you guessed a right number"));
}
else {
    console.log(chalk.bgRedBright("NO my freind! guessed a wrong number I guessed  :" + " " + randomNumber));
}

#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter a sentence to count the number of words"
    }]);
const words = ans.Sentence.trim().split(" ");
console.log(words);
console.log(`Your word count in sentence is ${words.length}`);

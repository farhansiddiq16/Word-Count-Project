
import inquirer from "inquirer";

let para = await inquirer.prompt({

    type: "input",
    name: "paragrapgh",
    message: "Enter your paragraph for word count.."

});

let words = para.paragrapgh.trim().split(" ");
    
console.log(`Your paragrpah word count is ${words.length}`);


require("./db/connection")
const {addNotes, listNotes, removeNote} = require("../utils/notes");
const { Reminder } = require("./models/reminders")
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require(`inquirer`)

const topLevelQuestion = [
    {
        type: "list", name: "options", message: "What would you like to do?", choices: ["add", "remove", "list", "exit"]   
    }
]

/* const welcomeText = figlet.textSync("Notes App", {
    font: 'Big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}); */

const main = () => {
    console.log(chalk.green(figlet.textSync("Reminder App")));
    app();
}

const addQuestion = [
    {type: "input", name: "add", message: "What would you like to add?"}
]

const removeQuestion = [
    {type: "input", name: "remove", message: "What would you like to remove? Please type a number"}
]

const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion)
    
    if(answers.options == "add") {
        const answer = await inquirer.prompt(addQuestion)
        addNotes(answer.add);
        console.log(answer)
        console.log("Adding a note...")
        app()

        try {
            const Reminder = new Reminder({ 
                reminder: answer,
            }) 

            await Reminder.save()
    
        } catch (err){
            console.log(err)
        }

    }
    else if (answers.options == "list") {
        console.log("Showing notes...")
        listNotes()
        app()
    }
    else if (answers.options == "remove") {
        listNotes()
        const answer = await inquirer.prompt(removeQuestion)
        removeNote(answer.remove)
        app()
    }
    else if (answers.options == "exit") {
        console.log ("See ya soon")
    }
}

main();


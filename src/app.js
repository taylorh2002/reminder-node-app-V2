const {addNotes, listNotes, removeNote} = require("../utils/notes");

const yargs = require("yargs")

console.log(process.argv)
console.log(yargs.argv)

const command = process.argv[2];

if (command == "add") 
{
    console.log("adding a note")
    addNotes(yargs.argv.note);
}

else if (command == "remove") 
{
    console.log("removing note...")
    removeNote(yargs.argv.note)
}


else if (command == "list")
{
    console.log("listing the notes")
    listNotes();
}

else 
{
    console.log("Command not recognised")
}
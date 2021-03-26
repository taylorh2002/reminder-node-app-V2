const fs = require("fs")

const loadNotes = () => 
{
    try {
        const dataBuffer = fs.readFileSync("src/notes.json")
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];  
    }
}

const saveNotes = allNotes => {
    // A { reminder: "buy milk" } - JS
    const notesJson = JSON.stringify(allNotes);
    // B { "reminder": "buy milk" } - JSON
    fs.writeFileSync("src/notes.json", notesJson);
};

const addNotes = (myNote) => {
    const allNotes = loadNotes()
    allNotes.push({reminder: myNote})
    saveNotes(allNotes)
}

const listNotes = () => {
    const allNotes = loadNotes();

    allNotes.map((note, index) => {
        console.log(`${index + 1}: ${note.reminder}`);
    });
};

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        const removedItem = allnotes.splice(noteToDelete -1, 1)
        console.log(`Successfully removed ${removedItem[0].reminder}`);
    } catch (error) {
        console.log("Number out of range")  
    }

    saveNotes(allNotes);
};

module.exports = {
    addNotes,
    listNotes,
    removeNote,
};
const mongoose = require("mongoose"); 

const reminderSchema = new mongoose.Schema({
    reminder:{
        type: String,
        required: true
    },
})

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = {
    Reminder,
}
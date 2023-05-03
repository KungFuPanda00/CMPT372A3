const { Schema, default: mongoose } = require("mongoose");

const NotesSchema = new Schema({
    header:String,
    subtext:String,
    timeStamp:String,
    id:String
});
const Notes = mongoose.model('Notes',NotesSchema);

module.exports=Notes
//creating the mongoose schemas that connects to the mongodb
const mongoose = require('mongoose');
// we connect
mongoose.connect("mongodb+srv://talha:Talha%40123@cluster0.sbkvhnv.mongodb.net/");
//we create the schema
const todoSchema = mongoose.Schema({
    title : String,
    description : String, 
    completed : Boolean
})
// we create and name the model which holds the schema
const todo = mongoose.model("todos", todoSchema);
// now we export the model
module.exports = {
    todo
}

// creating the zod for the validation
const zod = require('zod');

const createTodo = zod.object({
    title : zod.String(),
    description : zod.String()
})
const updateTodo = zod.object({
    id : zod.String(),
})
//now we export these zod object

module.exports = {
     createTodo : createTodo,
     updateTodo : updateTodo
} 
 
const Todos = require('../model/todoModel')
const deleteTodoController = async (req, res) => {
    const { id } = req.params;
    const result = await Todos.findByIdAndDelete(id)
    res.send({message: 'Todo List Deleted'})
}

module.exports = deleteTodoController
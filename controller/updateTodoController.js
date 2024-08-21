const Todos = require('../model/todoModel')
const updateTodoController = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    data.createdTime = new Date()
    const result = await Todos.findByIdAndUpdate(id, { ...data }, { new: true })
    res.send({message: 'Todo List Updated!!!'})
}

module.exports = updateTodoController;
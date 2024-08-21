const Todos = require('../model/todoModel')
const getTodoController = async (req, res) => {
    const { id } = req.params;
    const result = await Todos.findById(id)
    res.send(result)
}

module.exports = getTodoController
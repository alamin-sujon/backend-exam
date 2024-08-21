const Todos = require('../model/todoModel')
const createTodoController = async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.send('Title Required!!!')
    if (!description) return res.send('Description Required!!!')
    const todos = new Todos({
        title, 
        description, 
        createdTime: new Date()
    })
    todos.save();
    res.send({ message: 'Post Upload Successfully!!!' })
}

module.exports = createTodoController
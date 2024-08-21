require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer')
const port = process.env.PORT || 8000;

const DBConnect = require('./helper/DBConnect')
const registrationController = require('./controller/registrationController');
const verifyController = require('./controller/verifyController');
const loginController = require('./controller/loginController');
const createTodoController = require('./controller/createTodoController')
const updateTodoController = require('./controller/updateTodoController');
const deleteTodoController = require('./controller/deleteTodoController');
const getTodoController = require('./controller/getTodoController')
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Hello World!!!')
})

// Users Api
app.post('/register', registrationController);
app.get('/verify/:email', verifyController)
app.post('/login', loginController)

// Todos Api
app.get('/todo-list/:id', getTodoController)
app.put('/update-todo/:id', updateTodoController )
app.post('/todo-list', createTodoController)
app.delete('/delete-todo/:id', deleteTodoController )


DBConnect()


app.listen(port, () => {
    console.log('Server Running at : ', port)
})
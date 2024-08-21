const Users = require('../model/userModel')
const bcrypt = require('bcrypt');
const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email) return res.send({ message: 'Email Required!!!' })
    if (!password) return res.send({ message: 'Password Required!!!' })
    const isExist = await Users.findOne({ email })
    if (!isExist) return res.send({ message: 'User Not Exist!!!' })
    bcrypt.compare(password, isExist.password, function (err, result) {
        if (result) {
            res.send({ message: 'Login Successfull!!!' })
        }
    });
}

module.exports = loginController
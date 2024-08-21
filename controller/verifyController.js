const Users = require('../model/userModel')
const verifyController = async (req, res) => {
    const email = req.params.email;
    const updateUser = await Users.findOneAndUpdate({email}, {status: true}, { new: true})
    res.send({message: 'Status Updated!!!'})
}

module.exports = verifyController;
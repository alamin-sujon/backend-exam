const Users = require('../model/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const registrationController = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name) return res.send({ message: 'Name required' })
    if (!email) return res.send({ message: 'email required' })
    if (!password) return res.send({ message: 'Password required' })
    const isExist = await Users.findOne({email})
    if(isExist) return res.send({message: 'User Already Exist!!!'})
    bcrypt.hash(password, 10,async function (err, hash) {
   
    const user = new Users({
        name,
        email,
        password: hash,
        status: false,
        time: new Date()
    })
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "alsujon2001@gmail.com",
          pass: "nbnt odvd qtwi fgcm",
        },
      });
      
  
        
        const info = await transporter.sendMail({
          from: 'alsujon2001@gmail.com', // sender address
          to: "ni700670@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: `<div>
          <h2>Welcome to our website</h2>
          <a href='http://localhost:8000/verify/${user.email}'>Click Here</a>
          </div>`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        
      
      
    user.save();
    res.send({message: 'Registration Succesfull!!!'})
    });

}

module.exports = registrationController
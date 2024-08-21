const mongoose = require('mongoose');

function DBConnect () {
    mongoose.connect(process.env.DB_URI).then(() => {
        console.log('DB Connected')
    })
}

module.exports = DBConnect
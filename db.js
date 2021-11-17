const mongoose = require('mongoose')
const mongoDBURL = "mongodb+srv://root:root@cluster0.yjizu.mongodb.net/MERN-Ecommerce"

mongoose.connect(mongoDBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

var dbConnect = mongoose.connection;

dbConnect.on('error', () => {
    console.log("Mongo DB connection failed");
})

dbConnect.on('connected', () => {
    console.log("Mongo DB connected successfully");
})

module.exports= mongoose
const express = require('express')
const User = require('../models/user')

const router = express.Router();

router.post("/register", (req, res) => {
    User.find({email: req.body.email}, (err, user) => {
        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }
    })

    let newUser = new User(req.body);
    newUser.save(err => {
        if(!err)
            return res.send("User registered Successfully")
        else
            return res.status(400).json({ message: "Something went wrong" })
            
    })
})

module.exports = router;
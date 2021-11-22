const express = require('express')
const User = require('../models/user')

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        User.find({ email: req.body.email }, (err, user) => {
            if (user.length) {
                res.status(400).json({ message: "User already exist" })
            }
            else {
                let newUser = new User(req.body);
                newUser.save(err => {
                    if (!err)
                        res.send("User registered Successfully")
                    else
                        res.send("Something went wrong")

                })
            }
        })


    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }

})

module.exports = router;
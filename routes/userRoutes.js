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

router.post("/login", async (req, res) => {
    try {
        User.find({ email: req.body.email, password: req.body.password }, (err, docs) => {
            if (docs.length) {
                const loggedInUser = {
                    _id: docs[0]._id,
                    name: docs[0].name,
                    email: docs[0].email
                }
                res.send(loggedInUser)
            } else {
                res.status(400).json({ message: "Something went wrong" })
            }

        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }

})

module.exports = router;
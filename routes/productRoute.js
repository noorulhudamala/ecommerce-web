const express = require('express')
const Product = require('../models/product')


const router = express.Router();


router.get("/getAllProducts", (req, res) => {
    Product.find({}, (err, docs) => {
        if (!err) {
            return res.json({ data: docs })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    })
})

module.exports = router;
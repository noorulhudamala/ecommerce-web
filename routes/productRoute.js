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

router.post("/getProductById", (req, res) => {
    console.log(req.body)
    Product.find({_id: req.body.productId}, (err, docs) => {
        if (!err) {
            return res.send(docs[0])
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    })
})


module.exports = router;
const express = require('express')
const db = require('./db')
const productRoute = require('./routes/productRoute')

const app = express();
const PORT = 5000;

app.use("/api/products/", productRoute)
app.get("/", (req, res) => {
    res.send("test")
})

// console.log(app)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// .catch(err=> console.log(err))
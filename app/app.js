const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const stockRoutes = require("./routes/StockRoutes")

app.get("/", (req, res) => {
    res.status(200).send({ "message": "API works !" })
})

app.use("/Stocks", stockRoutes)

module.exports = app

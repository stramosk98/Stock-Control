const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const estoqueRoutes = require("./routes/estoque")

app.get("/", (req, res) => {
    res.status(200).send({ "message": "API works !" })
})

app.use("/estoques", estoqueRoutes)

module.exports = app

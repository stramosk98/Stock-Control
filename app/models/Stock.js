const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    produto: { type: String, required: true, trim: true, maxlength: 150 },
    quantidade: { type: Number, default: 0 },
    categoria: { type: String, trim: true },
    codBarras: { type: Number, required: true, maxlength: 14 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, required: false }
})

module.exports = mongoose.model("Stock", stockSchema)
const mongoose = require('mongoose')
const Stock = require('../models/Stock')

exports.get = (id) => {
    if (id) {
        return Stock.findOne({ _id: id })
    }
    return Stock.find({})
}

exports.post = (data) => {
    const newData = { ...data }
    return Stock.create(newData)
}

exports.put = (data, id) => {
    return Stock.findOneAndUpdate({ _id: id }, data, { new: true })
}

exports.patch = (data, id) => {
    const { produto, quantidade, codBarras, categoria } = data

    const updatedAt = Date.now()

    const StockUpdated = { produto, quantidade, codBarras, categoria, updatedAt }

    for (let prop in StockUpdated) {
        if (typeof StockUpdated[prop] === "undefined") delete StockUpdated[prop]
    }

    return Stock.findOneAndUpdate({ _id: id }, StockUpdated)
}

exports.delete = async (id) => {
    return Stock.findOneAndDelete({ _id: id })
}
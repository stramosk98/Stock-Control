const mongoose = require('mongoose')
const Estoque = require('./../models/estoque.model')

exports.get = (id) => {
    if (id) {
        return Estoque.findOne({ _id: id })
    }
    return Estoque.find({})
}

exports.post = (data) => {
    const newData = { ...data }
    return Estoque.create(newData)
}

exports.put = (data, id) => {
    return Estoque.findOneAndUpdate({ _id: id }, data, { new: true })
}

exports.patch = (data, id) => {
    const { produto, quantidade, codBarras, categoria } = data

    const updatedAt = Date.now()

    const EstoqueUpdated = { produto, quantidade, codBarras, categoria, updatedAt }

    for (let prop in EstoqueUpdated) {
        if (typeof EstoqueUpdated[prop] === "undefined") delete EstoqueUpdated[prop]
    }

    return Estoque.findOneAndUpdate({ _id: id }, EstoqueUpdated)
}

exports.delete = async (id) => {
    return Estoque.findOneAndDelete({ _id: id })
}
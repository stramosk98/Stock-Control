const stockFacade = require('../facade/StockFacade')
const stockJson = require('../utils/StockJson')

exports.get = async (req, res) => {
    try {
        const stocks = await stockFacade.listarStock()
        res.status(200).send(stocks)
        stockJson.atualizaJson(stocks);
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.post = async (req, res) => {
    const { produto, codBarras, quantidade, categoria } = req.body

    if (!produto || !codBarras || isNaN(codBarras)) {
        return res.status(400).send({ message: "erro 400", err: "Requisição não formatada corretamente" })
    }

    const novoStock = {
        produto,
        quantidade,
        codBarras,
        categoria,
        createdAt: Date.now(),
        updatedAt: null,
    }

    try {
        const data = await stockFacade.adicionarStock(novoStock)
        const stocks = await stockFacade.listarStock();
        res.status(201).send(data)
        stockJson.atualizaJson(stocks);
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.getById = async (req, res) => {
    try {
        const data = await stockFacade.buscarStockPorId(req.params.id)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }


}

exports.put = async (req, res) => {
    const { produto, quantidade, codBarras, createdAt, updatedAt } = req.body

    const novoStock = {
        produto,
        quantidade, 
        codBarras,
        categoria,
        createdAt,
        updatedAt
    }

    if (!produto || !codBarras || isNaN(codBarras) || quantidade === undefined || !categoria || !createdAt) {
        return res.status(400).send({ message: "erro 400", err: "Requisição não formatada corretamente" });
    }

    try {
        const data = await stockFacade.atualizarStock(novoStock, req.params.id)
        const stocks = await stockFacade.listarStock();
        if (data) {
            res.status(200).send(data)
            stockJson.atualizaJson(stocks)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.patch = async (req, res) => {
    const { produto, quantidade, codBarras, categoria } = req.body

    try {
        const data = await stockFacade.atualizarParcialStock({ produto, quantidade, codBarras, categoria }, req.params.id)
        const stocks = await stockFacade.listarStock();
        if (data) {
            res.status(200).send(data)
            stockJson.atualizaJson(stocks)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.delete = async (req, res) => {
    try {
        const data = await stockFacade.delete(req.params.id)
        const stocks = await stockFacade.listarStock();
        if (data) {
            res.status(200).send(data)
            stockJson.atualizaJson(stocks)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }
    res.send(deletedTask)
}
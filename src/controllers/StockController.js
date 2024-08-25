const estoqueFacade = require('./../facade/EstoqueFacade')
const estoqueJson = require('./../utils/estoqueJson')

exports.get = async (req, res) => {
    try {
        const estoques = await estoqueFacade.listarEstoque()
        res.status(200).send(estoques)
        estoqueJson.atualizaJson(estoques);
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.post = async (req, res) => {
    const { produto, codBarras, quantidade, categoria } = req.body

    if (!produto || !codBarras || isNaN(codBarras)) {
        return res.status(400).send({ message: "erro 400", err: "Requisição não formatada corretamente" })
    }

    const novoEstoque = {
        produto,
        quantidade,
        codBarras,
        categoria,
        createdAt: Date.now(),
        updatedAt: null,
    }

    try {
        const data = await estoqueFacade.adicionarEstoque(novoEstoque)
        const estoques = await estoqueFacade.listarEstoque();
        res.status(201).send(data)
        estoqueJson.atualizaJson(estoques);
    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.getById = async (req, res) => {
    try {
        const data = await estoqueFacade.buscarEstoquePorId(req.params.id)
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

    const novoEstoque = {
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
        const data = await estoqueFacade.atualizarEstoque(novoEstoque, req.params.id)
        const estoques = await estoqueFacade.listarEstoque();
        if (data) {
            res.status(200).send(data)
            estoqueJson.atualizaJson(estoques)
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
        const data = await estoqueFacade.atualizarParcialEstoque({ produto, quantidade, codBarras, categoria }, req.params.id)
        const estoques = await estoqueFacade.listarEstoque();
        if (data) {
            res.status(200).send(data)
            estoqueJson.atualizaJson(estoques)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }

}

exports.delete = async (req, res) => {
    try {
        const data = await estoqueFacade.delete(req.params.id)
        const estoques = await estoqueFacade.listarEstoque();
        if (data) {
            res.status(200).send(data)
            estoqueJson.atualizaJson(estoques)
        } else {
            res.status(404).end()
        }

    } catch (e) {
        res.status(500).send({ message: "erros 500", err: e })
    }
    res.send(deletedTask)
}
const repository = require('./../repository/estoque.repository');

class EstoqueFacade {
    async listarEstoque() {
        return await repository.get();
    }

    async buscarEstoquePorId(id) {
        return await repository.get(id);
    }

    async adicionarEstoque(data) {
        return await repository.post(data);
    }

    async atualizarEstoque(id, data) {
        return await repository.put(data, id);
    }

    async atualizarParcialEstoque(id, data) {
        return await repository.patch(data, id);
    }

    async removerEstoque(id) {
        return await repository.delete(id);
    }
}

module.exports = new EstoqueFacade();

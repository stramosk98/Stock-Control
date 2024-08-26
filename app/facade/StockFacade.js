const repository = require('./../repository/StockRepository');

class StockFacade {
    async listarStock() {
        return await repository.get();
    }

    async buscarStockPorId(id) {
        return await repository.get(id);
    }

    async adicionarStock(data) {
        return await repository.post(data);
    }

    async atualizarStock(id, data) {
        return await repository.put(data, id);
    }

    async atualizarParcialStock(id, data) {
        return await repository.patch(data, id);
    }

    async removerStock(id) {
        return await repository.delete(id);
    }
}

module.exports = new StockFacade();

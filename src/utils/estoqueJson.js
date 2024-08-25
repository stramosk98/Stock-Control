const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './estoqueData.json');

class estoqueJson {
    static readJson() {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        }
        return [];
    }

    static writeJson(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    }

    static atualizaJson(estoques) {
        this.writeJson(estoques);
    }
}

module.exports = estoqueJson;

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './stockData.json');

class stockJson {
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

    static atualizaJson(stocks) {
        this.writeJson(stocks);
    }
}

module.exports = stockJson;

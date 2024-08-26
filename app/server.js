const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const express = require("express");
const app = express();

const main = async () => {
    try {
        await mongoose.connect(url, {directConnection: true});
        console.log('MongoDB conectado com replica set');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (e) {
        console.error('Erro ao conectar ao MongoDB:', e);
    }
};

main();
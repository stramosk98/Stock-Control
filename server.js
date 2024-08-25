const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL || 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/estoque?replicaSet=rs0';

const main = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado com replica set');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (e) {
        console.error('Erro ao conectar ao MongoDB:', e);
    }
};

main();
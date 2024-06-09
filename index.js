const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
    res.send('API de geração de propostas');
});

app.post('/empresa', async (req, res) => {
    const { cnpj } = req.body;

    console.log(`Recebida requisição com CNPJ: ${cnpj}`);

    // Validação básica do CNPJ
    if (!cnpj || cnpj.length !== 14 || !/^\d+$/.test(cnpj)) {
        console.log('CNPJ inválido');
        return res.status(400).json({ error: 'CNPJ inválido' });
    }

    //VALE RESSALTAR QUE SÃO APENAS 3 REQUESTS POR MINUTO NESSA API!
    try {
        console.log(`Buscando dados para o CNPJ: ${cnpj}`);
        const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });
        const empresaData = response.data;

        if (empresaData.status === 'ERROR') {
            console.log('Empresa não encontrada');
            return res.status(404).json({ error: 'Empresa não encontrada' });
        }

        console.log('Dados da empresa:', empresaData);
        res.json(empresaData);
    } catch (error) {
        console.error('Erro ao buscar dados da empresa', error);
        res.status(500).json({ error: 'Erro ao buscar dados da empresa' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

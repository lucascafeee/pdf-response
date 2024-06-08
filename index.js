const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API');
});

//POST;
app.post('/empresa', async (req, res) => {
    const { cnpj } = req.body;

    // Validação pro campo de CNPJ;
    if (!cnpj || cnpj.length !== 14) {
        return res.status(400).json({ error: 'CNPJ inválido' });
    }

    try {
        const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        const empresaData = response.data;

        if (empresaData.status === 'ERROR') {
            return res.status(404).json({ error: 'Empresa não encontrada' });
        }
        
        // DADOS DO RETURN/RESPONSE;
        res.json(empresaData);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da empresa' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

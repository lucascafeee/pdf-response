# API de Consumo de CNPJ

Esta é uma API desenvolvida em Node.js que recebe um CNPJ na requisição, valida a informação, busca os dados da empresa e retorna esses dados na resposta. A API foi desenvolvida para ser usada em conjunto com um sistema web que permite criar propostas personalizadas. (API Desenvolvida integrada com o sistema do ReceitaWS)

## Passos para Configuração

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/lucascafeee/pdf-response.git
    ```

2. **Ja no repositorio, instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure a chave da API:**

    Crie um arquivo `.env` na raiz do projeto e adicione a sua chave de API do ReceitaWS:

    ```plaintext
    API_KEY=sua_key
    ```

4. **Após tudo configurado, inicie o servidor:**
    ```bash
    node index.js
    ```

    O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Buscar dados da empresa

- **URL:** `/empresa`
- **Método:** `POST`
- **Corpo da Requisição:**
    ```json
    {
        "cnpj": "00000000000000"
    }
    ```
- **Resposta de Sucesso:**
    ```json
    {
        "abertura": "07/08/2010",
        "situacao": "BAIXADA",
        "tipo": "MATRIZ",
        "nome": "ROBERIO JOSE DOS SANTOS 16952477870",
        "porte": "MICRO EMPRESA",
        "natureza_juridica": "213-5 - Empresário (Individual)",
        "logradouro": "AVENIDA CAPITAO LUIS ANTONIO PIMENTA",
        "numero": "563",
        "complemento": "CASA 10",
        "municipio": "SAO VICENTE",
        "bairro": "PARQUE BITARU",
        "uf": "SP",
        "cep": "11.330-200",
        "email": "fhermes@vivax.comm.br",
        "telefone": "(13) 9798-7487",
        "data_situacao": "17/06/2013",
        "motivo_situacao": "Extinção Por Encerramento Liquidação Voluntária",
        "cnpj": "12.345.678/0001-95",
        "ultima_atualizacao": "2024-05-24T01:57:57.686Z",
        "status": "OK",
        "fantasia": "",
        "efr": "",
        "situacao_especial": "",
        "data_situacao_especial": "",
        "atividade_principal": [
            {
                "code": "00.00-0-00",
                "text": "********"
            }
        ],
        "atividades_secundarias": [
            {
                "code": "00.00-0-00",
                "text": "Não informada"
            }
        ],
        "capital_social": "0.00",
        "qsa": [],
        "extra": {},
        "billing": {
            "free": true,
            "database": true
        }
    }
    ```

const express = require('express')
const app = express()
const User = require('./models/user')

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial")
})

app.post("/cadastrar", async (req, res) => {

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem:"Usuario cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro ao cadastrar usuario" 
        })
    })
})

app.listen(8080, () => {
    console.log("Servidor Inicialdo com sucesso na porta 8080")
})

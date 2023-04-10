import express from "express"

const app = express()

app.get("/teste", (request, response) => {
    response.send("olaaaaa")

})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


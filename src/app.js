import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = [];
const tweets =[];

app.post("/sing-up", (req, res) => {
    const{username, avatar} = req.body

    if(!username || !avatar){
        res.status(400).send('Entre com um nome de usuario e avatar valido')
        return
    }

    user.push({username, avatar})
    res.status(200).send('ok')
})



app.get("/tweets", (req, res) => {
    
    const unity = [ ]

    for(let i=0; i<tweets.length; i++){
        for(let j=0; j<users.length; j++){
            if(user[j].username === tweets [i].username){
                unity.push({})
            }
        }
    }

    res.send(tweets)

})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


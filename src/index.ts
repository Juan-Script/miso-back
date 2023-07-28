import express from 'express'
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (req, res) => {
    console.log('alguien ha pingeado!')
    res.send('pong')
}) 

app.listen(PORT, () => {
    console.log('Server esta funcionando en puerto ${PORT}')
})

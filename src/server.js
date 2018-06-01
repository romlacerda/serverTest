const port = 3005

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const usernames = {
    1: 'Juan',
    2: 'Pedro',
    3: 'Valentino'
}

app.get('/username/:id', (req, res) => {
    console.log(req.params.id)
    res.send({
        usernames: usernames[req.params.id]
    })
})

app.listen(3000, () => {})
const express = require('express')
const routes = require('./route/routes')

const client = require('./config/connection')
const app = express()

// routes.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.use(express.static('public'))

client.connect(err =>{
    if(err) throw err
    console.log('db connected')
})

// app.get('/users', (req, res)=>{
//     client.query('SELECT * FROM USERS', (err, result)=>{
//         if(err) throw err
//         const data = result.rows
//         res.send(data)
//     })
// })
app.use(routes)

app.listen(3000, ()=>{
    console.log('server running in port 3000')
})
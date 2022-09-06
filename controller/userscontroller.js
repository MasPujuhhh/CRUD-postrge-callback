const client = require('../config/connection')
const controller = {}

controller.home = (req, res) => {
    res.render('home')
}

controller.view = (req, res) => {
    client.query('SELECT * FROM USERS', (err, result) => {
        if (err) throw err
        res.send(result.rows)
    })
}

controller.index = (req, res) => {
    const { id } = req.params
    const params = [ id ]
    client.query(`select * from users where id=$1`, params, (err, result) => {
        if (!err) {
            res.send(result.rows)
        }
    })
}

controller.add = (req, res) => {
    const sql = `insert into users(name, age, email) values ($1, $2, $3)`
    const { name, age, email } = req.body
    const params = [name, age, email]
    client.query(sql, params, (err, result) => {
        if (!err) {
            res.send(`insert succes name:${name} age:${age} email:${email}`)
        } else {
            res.send(err.message)
        }
    })
}

controller.edit = (req, res) => {
    const sql = `update users set name=$1, age=$2, email=$3 where id =$4`
    const { name, age, email } = req.body
    const { id } = req.params
    const params = [name, age, email, id]
    client.query(sql, params, (err, result) => {
        if (!err) {
            res.send(`update succes name:${name} age:${age} email:${email}`)
        } else {
            res.send(err.message)
        }
    })
}

controller.delete = (req, res) => {
    client.query(`delete from users where id=${req.params.id}`, (err, result) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send(`id ${req.params.id} deleted`)
        }
    })
}

module.exports = controller
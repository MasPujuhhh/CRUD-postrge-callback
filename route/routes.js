const routes = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controller/userscontroller')


routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: false }))

routes.get('/', controller.home)
//GET /users
routes.get('/users', controller.view)

//GET /users/:id
routes.get('/users/:id', controller.index)

//POST /users
routes.post('/users', controller.add)

//PUT /UPDATE /Users/:id
routes.put('/users/:id', controller.edit)

//DELETE /Users/:id
routes.delete('/users/:id', controller.delete)


module.exports = routes
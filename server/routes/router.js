const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/',services.homeRoutes)

route.get('/add-user',services.add_user)

route.get('/update-user',services.update_user)


//API
route.post('/api/users/post',controller.create)
route.get('/api/users/get',controller.find)
route.put('/api/users/update/:id',controller.update)
route.delete('/api/users/delete/:id',controller.delete)


module.exports = route
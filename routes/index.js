const express = require('express')
const computersRouter = require('./computers.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/computers', computersRouter)
}

module.exports = routerApi
const express = require('express')
const queryString = require('querystring')
var server = express()
server.listen(8080)


server.use((req, res, next) => {
    var str = ''
    req.on('data', (data) => {
        str += data
    })
    req.on('end', () => {
        req.body = str
        next()
    })

})
server.use('/', (req, res) => {
    console.log(queryString.parse(req.body))
})
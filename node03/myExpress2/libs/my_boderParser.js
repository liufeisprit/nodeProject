const queryString = require('querystring')


module.exports = {
    aaa: (req, res, next) => {
        var str = ''
        req.on('data', (data) => {
            str += data
        })
        req.on('end', () => {
            req.body = queryString.parse(str)
            next()
        })

    }

}
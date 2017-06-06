const
    express = require('express'),
    router = express.Router(),
    superagent = require('superagent'),
    path = require('path')

module.exports = () => {

    router.get('/api/:type', (req, res) => {
        const
            { type } = req.params, // req.params.type
            { number } = req.query //req.query.number

        superagent
            .get(`http://numbersapi.com/${number}/${type}`)
            .query({ json: true })
            .end((err, response) => {
                const obj = response.body
                res.json(response.body)
                // // console.log((obj[Object.keys(obj)[0]]))
                // if ((obj[Object.keys(obj)[3]]) === 'date'){
                //     res.json(number)
                // }
                // else{
                //     res.json(response.body)
                // }
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}




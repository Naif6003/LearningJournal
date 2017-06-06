const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { artists } = req.query // this is the same as const show = req.query.show

//        https://api.spotify.com/v1/search?query=adele&offset=0&limit=20&type=album
//        https://api.spotify.com/v1/search?query=adele&type=artist
        
//https://api.spotify.com/v1/search?type=artist&q=
        superagent
            .get('https://api.spotify.com/v1/search?type=artist&q=' + artists)
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}

//https://api.spotify.com/v1/search?query=tania+bowra&type=artist

//https://api.spotify.com/v1/search?query=adele&offset=0&limit=20&type=album

//https://api.spotify.com/v1/search?query=adele&type=album

//https://api.spotify.com/v1/search?query=tania+bowra&type=artist
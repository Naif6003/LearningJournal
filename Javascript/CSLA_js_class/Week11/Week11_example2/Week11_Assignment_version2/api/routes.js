const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')
    query = 'https://api.spotify.com/v1/',
    artist_query = 'https://api.spotify.com/v1/search?type=artist&q=',
    album_query = 'https://api.spotify.com/v1/search?type=album&q=', 
    id_q = 'https://api.spotify.com/v1/search?type=ids&q=',
    id_query='https://api.spotify.com/v1/artists/{id}/albums' //GET

    

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const {artists}= req.query // this is the same as const show = req.query.show https://api.spotify.com/v1/search?q=adele&type=artist
        superagent
            .get(artist_query + artists )
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })  
    
    router.get('/search/:id', function(req,res){
        const {id} = req.query
        superagent
            .get(query + id + '/albums'  )
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


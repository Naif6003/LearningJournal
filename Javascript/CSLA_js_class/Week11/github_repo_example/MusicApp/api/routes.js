const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent');

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { searchTerm } = req.query;

        console.log('Spotify API call: http://api.spotify.com/v1/search?type=artist&q=' + searchTerm);

        superagent
            .get('http://api.spotify.com/v1/search?type=artist&q=' + searchTerm)
            .end((err, response) => {
                if (err) {
                    res.send(err);
                }
                else {
                	//console.log('response: ' + response.body['artists']['items']);
                    res.json(response.body['artists']['items']);
                }
            });
    });

    router.get('/api/albums/:artistId', (req, res) => {
    	const artistId = req.params.artistId;

    	console.log(`Spotify API call: http://api.spotify.com/v1/artists/${artistId}/albums?market=US`);

        superagent
            .get(`http://api.spotify.com/v1/artists/${artistId}/albums?market=US`)
            .end((err, response) => {
                if (err) {
                    res.send(err);
                }
                else {
                	//console.log('response: ' + response.body['items']);
                    res.json(response.body['items']);
                }
            });    	
    });

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    });

    return router;
}
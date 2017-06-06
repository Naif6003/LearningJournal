var config = require('../config.json');
var superagent = require('superagent');

module.exports = function (app) {

  app.get('/api/show/search', function (req, res) {
    superagent
      .get(config.tvmaze.url + '/search/shows')
      .query({ q: req.query.name })
      .end(function (err, result) {
        //console.log(err, result.body);
        res.json(result.body);
      });
  });

  app.get('/api/show/:id', function (req, res) {
    superagent
      .get(config.tvmaze.url + '/shows/' + req.params.id)
      .query({ embed: 'cast' })
      .end(function (err, result) {
        //console.log(err, result.body);
        res.json(result.body);
      });
  });

};



//http://api.tvmaze.com/shows/1?embed=cast
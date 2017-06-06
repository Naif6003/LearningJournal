var fs = require('fs');
var superagent = require('superagent');
var http = require('http');
var moment = require('moment');

module.exports.run = function(flags) {
  var fileApp = new FileApp(flags);
  fileApp.init();
};

function FileApp(flags) {
  this.flags = flags;
}

FileApp.prototype.init = function() {
  if (this.flags.math) {
    this.math();
  }

  if (this.flags.trivia) {
    this.trivia();
  }

  if (this.flags.date) {
    this.date();
  }
};

FileApp.prototype.math = function () {
  var integer = this.flags.math;
  var text = '';
  var type = 'math'; 
  var found = true;
  var sav = false;

  if (this.flags.save) {
    sav = true;
  }
  /*http.get('http://numbersapi.com/'+integer+'/math', 
    function(res){
      //console.log('Response ' + res.statusCode);
      var body = '';
      res.on('data', function(data) {
        //body += data;
        console.log('math fact: ' + data);
      });

      res.on('end', function() {
        console.log(body);
      });

    }).on('error', function(err) {
      console.log('Error: ' + err);
  });*/

  superagent.get('http://numbersapi.com/'+integer+'/math?json')
  .end(function (err, response) {
    if (isNaN(err)){
      found = false;
      console.log('Error: ', err.error)
    } else {
      text = response.body.text;
      console.log('math fact: ', response.body.text)
    }
    functB();    
  });

  functB = function(){
    if (sav){
      var object = {
          'text': text, 
          'number': integer, 
          'found': found, 
          'type': type, 
          'saved': moment().format('ddd MMM DD YYYY HH:mm:ss ZZ')
      };
      save(object);
    };
  };
};

FileApp.prototype.trivia = function () {
  var integer = this.flags.trivia;
  var text = '';
  var type = 'trivia'; 
  var found = true;
  var sav = false;

  if (this.flags.save) {
    sav = true;
  }

  superagent.get('http://numbersapi.com/'+integer+'/trivia?notfound=floor&fragment')
  .end(function (err, response) {
    if (isNaN(err)){
      found = false;
      console.log('Error: ', err.error);
    } else {
      text = response.text;
      console.log('trivia fact: ', response.text)
    }    
    functB();
  });

  functB = function(){
    if (sav){
      var object = {
          'text': text, 
          'number': integer, 
          'found': found, 
          'type': type, 
          'saved': moment().format('ddd MMM DD YYYY HH:mm:ss ZZ')
      };
      save(object);
    };
  };
};

FileApp.prototype.date = function () {
  var date = this.flags.date;
  var text = '';
  var type = ''; 
  var found = true;
  var sav = false;

  if (this.flags.save) {
    sav = true;
  }

  if (typeof date === "number") {
    type = 'year';
  } else {
    type = 'date';
  }

  superagent.get('http://numbersapi.com/'+date+'/'+type)
    .end(function (err, response) {
      if (isNaN(err) || err!==null){
        found = false;
        console.log('Error: ', err.error);
      } else {
        text = response.text;
        console.log(type+' fact: ', response.text);
      };
      functB();
    });

  functB = function(){
    if (sav){
      var object = {
          'text': text, 
          'number': date, 
          'found': found, 
          'type': type, 
          'saved': moment().format('ddd MMM DD YYYY HH:mm:ss ZZ')
      };
      save(object);
    };
  };
};

function save (object) {
  var outputFileName = 'facts.json';
  var json;

  fs.stat(outputFileName, function(err, stat){
    if(err == null) {  //IF the file already exists it will add the fact to JSON inside the file. All other facts inside the file will still be present.
      var content = fs.readFileSync(outputFileName,'utf8');
      var jsonContent = JSON.parse(content);
      //console.log(jsonContent);
      jsonContent.push(object);
      //console.log(jsonContent);
      fs.writeFile(outputFileName, JSON.stringify(jsonContent, null, 4), function (err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Fact saved to " + outputFileName);
        }
      });
    } else if (err.code == 'ENOENT') { //IF the file is not created then the save flag will create the file and save the fact.
      var array = [];
      array.push(object);
      fs.writeFile(outputFileName, JSON.stringify(array, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Fact saved to " + outputFileName);
        }
      }); 
    } else {
      console.log('Some other error: ', err.code)
    }
  });
};
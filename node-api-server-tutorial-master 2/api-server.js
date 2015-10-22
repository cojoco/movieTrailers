var movies = [
  {
    name: 'Avatar',
    money: '$2,783,918,982',
    trailerUrl: 'https://www.youtube.com/embed/5PSNL1qE6VY'
  },
  {
    name: 'Titanic',
    money: '$2,207,615,668',
    trailerUrl: 'https://www.youtube.com/embed/zCy5WQ9S4c0'
  },
  {
    name: 'Jurassic World',
    money: '$1,665,482,015',
    trailerUrl: 'https://www.youtube.com/embed/RFinNxS5KN4'
  },
  {
    name: 'The Avengers',
    money: '$1,519,479,547',
    trailerUrl: 'https://www.youtube.com/embed/eOrNdBpGMv8'
  },
  {
    name: 'Furious 7',
    money: '$1,516,246,709',
    trailerUrl: 'https://www.youtube.com/embed/yISKeT6sDOg'
  },
  {
    name: 'The Avengers: Age of Ultron',
    money: '$1,404,705,868',
    trailerUrl: 'https://www.youtube.com/embed/tmeOjFno6Do'
  },
  {
    name: 'Harry Potter and the Deathly Hallows: Part II',
    money: '$1,341,511,219',
    trailerUrl: 'https://www.youtube.com/embed/mObK5XD8udk'
  },
  {
    name: 'Frozen',
    money: '$1,274,234,980',
    trailerUrl: 'https://www.youtube.com/embed/TbQm5doF_Uc'
  },
  {
    name: 'Iron Man 3',
    money: '$1,215,392,272',
    trailerUrl: 'https://www.youtube.com/embed/YLorLVa95Xo'
  },
  {
    name: 'Minions',
    money: '$1,152,974,800',
    trailerUrl: 'https://www.youtube.com/embed/eisKxhjBnZ0'
  }
];


var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "src/";
var port = 3000;

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/movies') {

    res.writeHead(
        "200",
        {
            "access-control-allow-origin": '*',
            "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
            "access-control-allow-headers": "content-type, accept"
        }
    );
    res.end(JSON.stringify(movies));

  } else {

    /**
     * Here is where we return all requests for files in our 'src' directory
     */
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }

}).listen(port);

console.log('app is now running on port: ' + port)

var movies = [
  {
    name: 'Avatar',
    money: '$2,783,918,982',
    trailerUrl: 'https://www.youtube.com/embed/5PSNL1qE6VY',
    description: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
  },
  {
    name: 'Titanic',
    money: '$2,207,615,668',
    trailerUrl: 'https://www.youtube.com/embed/zCy5WQ9S4c0',
    description: 'A fictionalized account of the sinking of the RMS Titanic, starring Leonardo DiCaprio and Kate Winslet as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage.'
  },
  {
    name: 'Jurassic World',
    money: '$1,665,482,015',
    trailerUrl: 'https://www.youtube.com/embed/RFinNxS5KN4',
    description: '22 years after the original Jurassic Park failed, the new park (also known as Jurassic World) is open for business. After years of studying genetics the scientists on the park genetically engineer a new breed of dinosaur. When everything goes horribly wrong, will our heroes make it off the island?'
  },
  {
    name: 'The Avengers',
    money: '$1,519,479,547',
    trailerUrl: 'https://www.youtube.com/embed/eOrNdBpGMv8',
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    name: 'Furious 7',
    money: '$1,516,246,709',
    trailerUrl: 'https://www.youtube.com/embed/yISKeT6sDOg',
    description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.'
  },
  {
    name: 'The Avengers: Age of Ultron',
    money: '$1,404,705,868',
    trailerUrl: 'https://www.youtube.com/embed/tmeOjFno6Do',
    description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans."
  },
  {
    name: 'Harry Potter and the Deathly Hallows: Part II',
    money: '$1,341,511,219',
    trailerUrl: 'https://www.youtube.com/embed/mObK5XD8udk',
    description: "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts."
  },
  {
    name: 'Frozen',
    money: '$1,274,234,980',
    trailerUrl: 'https://www.youtube.com/embed/TbQm5doF_Uc',
    description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
  },
  {
    name: 'Iron Man 3',
    money: '$1,215,392,272',
    trailerUrl: 'https://www.youtube.com/embed/YLorLVa95Xo',
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
  },
  {
    name: 'Minions',
    money: '$1,152,974,800',
    trailerUrl: 'https://www.youtube.com/embed/eisKxhjBnZ0',
    description: "Minions Stuart, Kevin and Bob are recruited by Scarlett Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world."
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

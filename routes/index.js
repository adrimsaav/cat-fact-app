var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Fact App' });
});

router.get('/cats/fact', async function(req, res, next) {
  const catFact = await fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(catFact => {
      res.render('cats/fact', { catFact });
    });
});

module.exports = router;

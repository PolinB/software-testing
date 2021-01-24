let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

let recipes = [];

router.post("/add-recipe", bodyParser.json(), function (req, res) {
  recipes.push(req.body);
  res.send({body: 'OK'});
});

router.post("/recipes", bodyParser.json(), function (req, res) {
  let allUserRecipes = recipes.filter(data => data.login === req.body.login);
  res.send(allUserRecipes);
});

module.exports = router;

var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

let users = []

router.post("/register", bodyParser.json(), function (req, res) {
  const user = req.body;
  if (users.some(el => el.login === user.login)) {
    res.send({
      body: 'Login already used'
    });
    return;
  }
  users.push(user);
  console.log(users);
  res.send({body: 'OK'});
});

router.post("/login", bodyParser.json(), function (req, res) {
  const user = req.body;
  if (users.some(el => el.login === user.login)) {
    res.send({body: 'OK'});
  } else {
    res.send({body:'Wrong login'});
  }
});

module.exports = router;

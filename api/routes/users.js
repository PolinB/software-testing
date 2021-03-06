// import {user, setUser} from '../app';
let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

let users = [];
let user = null;

router.get("/user", (req, res) => {
  if (user !== null) {
    res.send({
      user: user
    })
  } else {
    res.send({user: null})
  }
});

router.post("/register", bodyParser.json(), function (req, res) {
  const userReg = req.body;
  if (users.some(el => el.login === userReg.login)) {
    res.send({
      body: 'Login already used'
    });
    return;
  }
  users.push(userReg);
  res.send({body: 'OK'});
});

router.post("/login", bodyParser.json(), function (req, res) {
  const userLog = req.body;
  if (users.some(el => el.login === userLog.login)) {
    user = userLog;
    res.send({body: 'OK', user: user.login});
  } else {
    res.send({body: 'Wrong login'});
  }
});

router.get("/logout", (req, res) => {
  user = null;
  res.send({body: 'OK', user: user});
});

module.exports = router;

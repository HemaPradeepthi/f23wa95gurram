var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  a = Math.random();
  b = Math.asinh(a);
  res.send(`Math asinh applied to ${a} is ${b}`);
});

module.exports = router;
  let a,b ;

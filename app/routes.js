var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index', {basicClass:'active'})
})

router.get('/advanced-search', function (req, res) {
  res.render('advanced-search', {advancedClass:'active'})  
})
// add your routes here

module.exports = router

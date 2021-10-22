var express = require('express');
var router = express.Router();
var cors = require('cors')

var store = {}

router.use(cors())
router.get('/api/store/', cors(), function (req, res, next) {
  res.json(store||{}) 
})
router.get('/api/store/:channelName', cors(), function (req, res, next) {
  res.json(200, store[req.params.channelName]||{}) 
})
router.post('/api/store/:channelName', cors(), function (req, res, next) {
    store[req.params.channelName] = req.body
    res.send(204)
})
router.delete('/api/store/:channelName', cors(), function (req, res, next) {
  delete store[req.params.channelName]
  res.send(204)
})
router.get('/', function(req, res, next) {
  res.json({goto: '/api/store/'})
});

module.exports = router;


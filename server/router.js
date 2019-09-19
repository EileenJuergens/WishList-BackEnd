const router = require('express').Router();
const contollers = require('./controllers/wishes.controllers');

router.get('/', (req,res) => res.send('display dashboard'))


module.exports = router;
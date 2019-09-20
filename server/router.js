'use strict';

const router = require('express').Router();
const contollers = require('./controllers/wishes.controllers');
const fs = require('fs');

let _404;
//FIXME: which path??
const conf = {clientPath: __dirname + ''}

fs.readFile(conf.clientPath + '/404.html', 'utf8', (err, data) => {
  if (err) _404 = 'The requested URL was not found on this server.';
  else _404 = data;
});

// dashboard
router.get('/', contollers.getUsers);

// wishlist
router.get('/wishlist/:user_id', controllers.getWishes);

// form
router.post('/wishlist/:user_id/newwishfrom/:wish_id', contollers.postWish);
router.delete('/wishlist/:user_id/newwishfrom/:wish_id', contollers.deleteWish);

// friends
router.get('/friends', controllers.getFriends);

// Catchall for not found
router.get('/*', () => {
  this.status = 404;
  this.body = _404;
});

module.exports = router;
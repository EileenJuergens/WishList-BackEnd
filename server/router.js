'use strict';

const router = require('express').Router();
const controllers = require('./controllers/index');

// dashboard
router.get('/', controllers.getUsers);

// wishlist
router.get('/wishlist/:user_id', controllers.getWishes);

//testing
router.get('/wishlist/', controllers.getWishes);
router.post('/wishlist/', controllers.postWish);

// form
router.post('/wishlist/:user_id/newwishform/:wish_id', controllers.postWish);
router.delete('/wishlist/:user_id/newwishform/:wish_id', controllers.deleteWish);

// Create user
router.post('/friends', controllers.createUser);

module.exports = router;
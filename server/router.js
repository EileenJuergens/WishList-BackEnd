'use strict';

const router = require('express').Router();
const userControllers = require('./controllers/usersController');
const wishControllers = require('./controllers/wishesController');


// Users
router.get('/', userControllers.getUsers);
router.post('/', userControllers.createUser);
router.delete('/', userControllers.deleteUser);

// Wishes
router.get('/wishlist/', wishControllers.getWishes);
router.post('/wishlist/', wishControllers.postWish);
router.delete('/wishlist/', wishControllers.deleteWish);

// router.get('/wishlist/:user_id', wishControllers.getWishes);
// router.post('/wishlist/:user_id/newwishform/:wish_id', wishControllers.postWish);
// router.delete('/wishlist/:user_id/newwishform/:wish_id', wishControllers.deleteWish);



module.exports = router;
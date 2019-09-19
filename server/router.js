const router = require('express').Router();
const contollers = require('./controllers/wishes.controllers');

// display dashboard
router.get('/', contollers.getWishList);

// display wishlist from main user
router.get('/WishList', controllers);

// add a wish to my wish list
router.post('/WishList', controllers.postWish);

// delete a wish from my wish list
// function just for the back end & testing
router.delete('/WishList', controllers);

// get method ??
router.get('/WishList/NewWishForm', controllers);




module.exports = router;
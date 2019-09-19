// have to fix this: wich models are needed?
const WishList = require('../models/wishes.models');
const Wish = require('../models/wishes.models');


const getWishList = async (req, res) => {
  try {
    const wishList = await WishList.find();
    res.json(wishList);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
}

const postWish = async (req, res) => {
  try {
    const wish = await Wish.create({
      description = req.body.description,
      price = req.body.price,
      link = req.body.link,
      notes = req.body.notes
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
}


module.exports = {getWishList, postWish};
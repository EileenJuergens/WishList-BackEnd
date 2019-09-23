'use strict';

const db = require('../models/index');

// const user = await db.users.findOne({ where: {id: req.body.users_id}});
// const whishesLaura = await db.wishes.findAll({ where: {owner: 15}});


const getWishes = async (req, res) => {
  try {
    const wishes = await db.wishes.findAll();
    res.json(wishes);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};


const postWish = async (req, res) => {
  try {
    const wish = await db.wishes.create({
      description: req.body.description,
      price: req.body.price,
      link: req.body.link,
      notes: req.body.notes
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const deleteWish = async (req, res) => {
  try {
    const wish = await db.wishes.deleteOne({
      description: req.body.description
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};


module.exports = { getWishes, postWish, deleteWish };

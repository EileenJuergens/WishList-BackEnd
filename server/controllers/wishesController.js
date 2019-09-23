'use strict';

const db = require('../models/index');


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
    const wish = await db.wishes.create(req.body);
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const deleteWish = async (req, res) => {
  try {
    const wish = await db.wishes.findOne({where: {id: req.params.id}});
    await wish.destroy();
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};


module.exports = { getWishes, postWish, deleteWish };

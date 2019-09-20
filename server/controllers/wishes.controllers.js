'use strict';

const db = require('../models/index');


const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
};

const getWishes = async (req, res) => {
  try {
    const wishes = await db.Wish.findAll();
    res.json(wishes);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
};

const postWish = async (req, res) => {
  try {
    const wish = await db.Wish.create({
      description: req.body.description,
      price: req.body.price,
      link: req.body.link,
      notes: req.body.notes
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
};

const deleteWish = async (req, res) => {
  try {
    const wish = await db.Wish.deleteOne({
      description: req.body.description
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    req.sendStatus(500);
  }
};

module.exports = {getUsers, getWishes, postWish, deleteWish, getFriends};
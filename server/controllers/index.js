'use strict';

const db = require('../models/index');


const getUsers = async (req, res) => {
  try {
    const users = await db.user.findAll();
    res.json(users);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const getWishes = async (req, res) => {
  try {
    const wishes = await db.wish.findAll();
    res.json(wishes);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

const postWish = async (req, res) => {
  try {
    const wish = await db.wish.create({
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

// just for back-end, no functionality (yet) in front-end
const deleteWish = async (req, res) => {
  try {
    const wish = await db.wish.deleteOne({
      description: req.body.description
    });
    res.json(wish);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

// just for back-end, no functionality (yet) in front-end
const createUser = async (req, res) => {
  try {
    const user = await db.user.create({
      username: req.body.username
    });
    res.json(user);
    res.status(201);
  }
  catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {getUsers, getWishes, postWish, deleteWish, createUser};
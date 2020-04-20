const db = require('../models');

const index = async (req, res) => {
  try {
    const user = await db.User.find({});
    if (!user) return res.status(404).json({error: 'No users found!'});
    return res.json(user);
  } catch (err) {
    return res.status(500).json('uh oh');
  }
}

const show = async (req, res) => {
  try {
    const user = await db.User.findById(req.params.id);
    if (!user) return res.status(404).json({error: 'No user found with that ID!'});
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const create = async (req, res) => {
  try {
    const newUser = await db.User.create(req.body);
    if (!newUser) return res.status(404).json({error: 'User couldn\'t be created!'});
    return res.json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const update = async (req, res) => {
  console.log(req.body);
  try {
    const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({error: 'User couldn\'t be updated!'});
    return res.json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const destroy = async (req, res) => {
  try {
    const deletedUser = await db.User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({error: 'User with that ID couldn\'t be found!'});
    return res.json(deletedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
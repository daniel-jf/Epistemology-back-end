const express = require('express');
const router = express.Router();
const ctrl = require('./../controllers');

// User
router.get('/user', ctrl.user.index);
router.get('/user/:id', ctrl.user.show);
router.post('/user', ctrl.user.create);
router.put('/user/:id', ctrl.user.update);
router.delete('/user/:id', ctrl.user.destroy);

module.exports = router;
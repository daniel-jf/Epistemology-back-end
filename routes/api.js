const express = require('express');
const router = express.Router();
const ctrl = require('./../controllers');

// User
router.get('/user', ctrl.user.index);
router.get('/user/:id', ctrl.user.show);
router.post('/user', ctrl.user.create);
router.put('/user/:id', ctrl.user.update);
router.delete('/user/:id', ctrl.user.destroy);

// Lesson
router.get('/lesson', ctrl.lesson.index);
router.get('/lesson/:id', ctrl.lesson.show);
router.post('/lesson', ctrl.lesson.create);
router.put('/lesson/:id', ctrl.lesson.update);
router.delete('/lesson/:id', ctrl.lesson.destroy);

module.exports = router;
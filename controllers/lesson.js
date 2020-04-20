const db = require('../models');

const index = async (req, res) => {
   try {
    const lessons = await db.Lesson.find({});
    if (!lessons) return res.status(404).json({error: 'No lessons available!'});
      return res.json(lessons);
    } catch (err) {
      return res.status(500).json('something is wrong in index');
    }
}

const show = async (req, res) => {
    try {
      const lesson = await db.Lesson.findOne({ _id: req.params.id });
      if (!lesson) return res.status(404).json({error: 'No lesson found with that ID!'});
      return res.json(lesson);
    } catch (err) {
      return res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
      const newLesson = await db.Lesson.create(req.body);
      if (!newLesson) return res.status(404).json({error: 'Lesson couldn\'t be created!'});
      return res.json(newLesson);
    } catch (err) {
      return res.status(500).json(err);
    }
}

const update = async (req, res) => {
    console.log(req.body);
    try {
      const updatedLesson = await db.Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedLesson) return res.status(404).json({error: 'Lesson couldn\'t be updated!'});
      return res.json(updatedLesson);
    } catch (err) {
      return res.status(500).json(err);
    }
}

const destroy = async (req, res) => {
    try {
      const deletedLesson = await db.Lesson.findByIdAndDelete(req.params.id);
      if (!deletedLesson) return res.status(404).json({error: 'Lsson with that ID couldn\'t be found!'});
      return res.json(deletedLesson);
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
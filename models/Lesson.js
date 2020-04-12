const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema ({
    lesson: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
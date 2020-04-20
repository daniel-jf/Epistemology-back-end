const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema ({
    title: String,
    lecture: String,
    image: String,
    video: String,
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref:'User'
    // }
});

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
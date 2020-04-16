const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LearnSchema = new Schema ({
    subject: String,
    lesson: {
        type: Schema.Types.ObjectId,
        ref:'Lesson'
    },
});

const Learn = mongoose.model('Learn', LearnSchema);
module.exports = Learn;
const db = require('./models');

const lessons = [
    {
        title: 'Derivatives',
        lecture: 'The definition of the derivative is the slope of a line that lies tangent to the curve at the specific point. The limit of the instantaneous rate of change of the function as the time between measurements decreases to zero is an alternate derivative definition'
    },
    {
        title: 'DNA',
        lecture: 'deoxyribonucleic acid, a self-replicating material which is present in nearly all living organisms as the main constituent of chromosomes. It is the carrier of genetic information.'
    }
]

const seedDatabase = async () => {
    try {
      await db.Lesson.deleteMany({});
      console.log('Deleted previous lessons...');
      let createdLessons = await db.Lesson.create(lessons);
      console.log(`Created ${createdLessons.length} lessons...`);
      console.log(createdLessons);
      process.exit();
    } catch (err) {
      console.log(err);
      process.exit(0);
    }
}
  
seedDatabase();
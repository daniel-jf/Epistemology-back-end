// variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const session = require('express-session');
// require('dotenv').config();

// port
const PORT = process.env.PORT || 3000;
// routes
// const routs = require('./routes');
// // database
// const db = require('./models');

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// app.use('/api/v1', routes.auth);
// app.use('/api/v1', routes.api);

app.get('/', (req, res) => {
    res.send('API PAGE WORKS');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
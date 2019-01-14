const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);
/* the same as aboves
const authRoutes = require('./routes/authRoutes');
authRoutes(app);
*/

/*
const PORT = process.env.port || 5000;

app.listen(PORT);
*/

app.listen(5000);


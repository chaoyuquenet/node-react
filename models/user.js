const mongoose = require('mongoose');

const { Schema } = mongoose;  // use ES6 destructring, 

/* the same as above
const Schema = mongoose.Schema;
*/

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('user', userSchema);




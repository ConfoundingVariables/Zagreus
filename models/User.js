const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
      type: String, // Define type for consistency
      required: true, 
      unique: true, // no duplicates
      lowercase: true, // emails are not case sensitive
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email address.');
        }
      },
    },
    username: { // Display name for profile**
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
})

// Hashing the password before saving it to the database
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

//Middleware function to run before executing "save" query on DB
UserSchema.pre('save', function (next) {
  const saltIterations = 10; // saltRounds -> saltIterations
  // Check if the password field has been modified before hashing it
  if (this.modifiedPaths().includes('password')) {
    // extra layer of security 
    bcrypt.genSalt(saltIterations, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
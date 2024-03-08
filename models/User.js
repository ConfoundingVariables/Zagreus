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
        throw new Error("Invalid email address.");
      }
    },
  },
  fullname: { 
    type: String,
    required: true,
  },
  username: {
    // Display name for profile**
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  token: {
    required: true
  }
});

//Middleware function to run before executing "save" query on DB
UserSchema.pre("save", function (next) {
  const saltIterations = 10; // saltRounds -> saltIterations
  // Check if the password field has been modified before hashing it
  if (this.modifiedPaths().includes("password")) {
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

UserSchema.pre("save", async function (next) {
  if (this.isNew) { //Boolean flag specifying if the document is new.
    try {
      const document = await User.findOne({
        $or: [{ email: this.email }, { username: this.username }],
      });
      if (document)
        return next(
          new RequestError(
            "A user with that email or username already exists.",
            400
          )
        );
    } catch (err) {
      return next((err.statusCode = 400));
    }
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

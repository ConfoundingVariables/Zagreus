const jwt = require('jwt-simple');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const axios = require('axios');

const {
    validateEmail,
    validateFullName,
    validateUsername,
    validatePassword,
  } = require('../utils/validation');


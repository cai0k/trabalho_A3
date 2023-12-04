// backend/src/models/User.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../utils/database');
const mongoose  = require('mongoose');

const Usuario = mongoose.model('Usuario', {
  nome: String,
  email: String,
  senha: String, 
});

module.exports = Usuario;

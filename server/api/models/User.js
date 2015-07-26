var bcrypt = require('bcrypt');

/**
* User.js
*
* @module      :: Model
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    firstName : { type: 'string' },

    lastName : { type: 'string' },

    tagline : { type: 'string' },

    email : { type: 'string' },

    auth : { type: 'integer' },

    password : { type: 'string' },

    userType : { type: 'integer' }
  }
};


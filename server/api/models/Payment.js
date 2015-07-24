/**
* Payment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    contract : {
      type: 'STRING',   // type will get validated by the ORM
      required: true,
      unique: true
    },

    firstName : {
      type: 'STRING',   // type will get validated by the ORM
      required: true
    },

    lastName : {
      type: 'STRING',   // type will get validated by the ORM
      required: true
    },

    sum : {
      type: 'INTEGER',  // type will get validated by the ORM
      required: true,
      defaultsTo: 0
    },

    commissionOne : {
      type: 'FLOAT',    // type will get validated by the ORM
      required: true,
      defaultsTo: 0
    },

    commissionTwo : {
      type: 'INTEGER',  // type will get validated by the ORM
      required: true,
      defaultsTo: 0
    },

    commission : {
      type: 'FLOAT',    // type will get validated by the ORM
      required: true,
      defaultsTo: 0
    },

    totalAmount : {
      type: 'INTEGER',  // type will get validated by the ORM
      required: true,
      defaultsTo: 0
    },

    email : {
      type: 'STRING',   // type will get validated by the ORM
      required: true
    },

    telephone : {
      type: 'STRING',   // type will get validated by the ORM
      required: true
    }
  }
};

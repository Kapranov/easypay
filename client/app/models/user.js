import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tagline: DS.attr('string'),
  email: DS.attr('string'),
  auth: DS.attr('number'),
  password: DS.attr('string'),
  userType: DS.attr('number')
});

import DS from 'ember-data';
import Ember from 'ember';
const { computed } = Ember;

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tagline: DS.attr('string'),
  email: DS.attr('string'),
  auth: DS.attr('integer'),
  password: DS.attr('string'),
  userType: DS.attr('integer'),

  // computed
  fullName: computed('firstName', 'lastName', function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});

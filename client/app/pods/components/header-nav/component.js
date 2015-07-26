import Ember from 'ember';

export default Ember.Component.extend({
  menu: [{
    'title': 'Index',
    'link': 'index'
  }, {
    'title': 'Users',
    'link': 'users',
    'submenu': [{
        'title': 'Index',
        'link': 'users.index'
      }, {
        'title': 'Create New User',
        'link': 'users.create'
      }]
  }],

  actions: {
    invalidateSession() {
      this.sendAction('invalidateSession');
    },
    back() {
      this.sendAction('back');
    },
    forward() {
      this.sendAction('forward');
    }
  }
});

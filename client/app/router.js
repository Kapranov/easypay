import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("users", function() {
    this.route("user", {
      path: ":user_id"
    });
  });
  this.route('payment');
  this.route('payments');
  this.route('register');
  this.route('login');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register-user');
  this.route('login');
  this.route('logout');
  this.route('conversations', function() {
    this.route('new');
  });
  this.route('conversation', { path: 'conversation/:conversation_id'}, function() {
    this.route('edit');
    this.route('invite-user');
  });
});

export default Router;

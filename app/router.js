import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register-user');
  this.route('login');
  this.route('conversations', function() {
    this.route('new');
  });
  this.route('conversation', { path: 'conversations/:conversation_id'});
});

export default Router;

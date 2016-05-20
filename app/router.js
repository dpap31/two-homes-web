import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('parenting-groups', {});
  this.route('parenting-group', { path: 'parenting-group/:parenting_group_id'}, function(){
    this.route('new-invite');
    this.route('conversations', {}, function() {
      this.route('new', {});
      this.route('join');
    });
    this.route('conversation', { path: 'conversation/:conversation_id'}, function() {
      this.route('edit', {});
      this.route('add-user', {});
      this.route('messages');
    });
  });
  //Logged out
  this.route('auth', function() {
    this.route('login');
    this.route('register');
    this.route('sign-up', { path: 'sign-up/:invite_token' });
  });
});

export default Router;

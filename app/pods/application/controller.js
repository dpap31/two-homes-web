import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  sessionUser: service('session-user'),
});

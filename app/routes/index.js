import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user')
});

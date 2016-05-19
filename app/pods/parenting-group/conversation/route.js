import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model(params) {
    let route = this;
    return route.store.findRecord('conversation', params.conversation_id);
  }
});

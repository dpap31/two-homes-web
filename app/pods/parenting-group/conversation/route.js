import Ember from 'ember';
const { Route, inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model(params) {
    let route = this;
    return route.store.findRecord('conversation', params.conversation_id);
  }
});

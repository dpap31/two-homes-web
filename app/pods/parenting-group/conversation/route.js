import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let route = this;
    return route.store.findRecord('conversation', params.conversation_id);
  }
});

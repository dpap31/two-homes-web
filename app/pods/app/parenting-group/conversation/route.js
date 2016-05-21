import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model(params) {
    let route = this;
    const convo = route.store.findRecord('conversation', params.conversation_id);
    return convo;
  },

});

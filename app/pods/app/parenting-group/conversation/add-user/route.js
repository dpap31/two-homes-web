import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let conversationModel = this.modelFor('parenting-group.conversation');
    return conversationModel;
  },
});



import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    goToConvo: function(convo) {
      this.transitionToRoute('app.parenting-group.conversation.messages', convo);
    }
  }
});

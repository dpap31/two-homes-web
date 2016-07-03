import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  sessionUser: inject.service('sessionUser'),

  actions: {
    goToConvo: function(convo) {
      this.get('router').transitionTo('app.parenting-group.conversation.messages', convo);
    },
    goToNewConvo: function(){
      this.get('router').transitionTo('app.parenting-group.conversations.new');
    }
  }
});

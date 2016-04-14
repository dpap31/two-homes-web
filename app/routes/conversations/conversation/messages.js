import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  
  model() {
    let self = this;
    return this.get('sessionUser.user').then(function(user) {
      return Ember.RSVP.hash({
        messages: self.store.findAll('message'),
        newMessage: self.store.createRecord('message', {
          user: user,
          conversation: self.modelFor('conversations.conversation')
        })
      });
    });
  },

  actions: {
    messageSent: function() {
      this.refresh();
    },
    
  }
});

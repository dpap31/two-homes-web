import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
   model() {
    let router = this
    return router.get('sessionUser.user').then(function(user) {
      return Ember.RSVP.hash({
        newMessage: router.store.createRecord('message', {
          user: user,
          conversation: router.modelFor('conversations.conversation')
        }),
        messages: router.store.query('message', { param: router.modelFor('conversations.conversation') }),
      });
    });
  },

  actions: {
    sendMessage(message){
      message.setProperties({
        createdAt: new Date(),
        isSent: true,
      });
      message.save();
    }
  }
});

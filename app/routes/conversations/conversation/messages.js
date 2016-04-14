import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  model() {
    let self = this;
    const conversation = self.modelFor('conversations.conversation')
    let messages = self.store.query('message', { filter: { conversation: conversation.get('id') } })
    //.modelFor('conversations.conversation').get('messages')
    //const conversation_id = self.modelFor('conversations.conversation').get('id')

    return this.get('sessionUser.user').then(function(user) {
      return Ember.RSVP.hash({
        conversation: conversation,
        messages: messages,
        //self.store.query('message', { filter: {conversation: 1 } }),
        //self.store.findAll('message'),
        //self.store.find('message', params.conversation_id, 1),
        //self.store.find('conversation.messages'),
        //.query('message', { filter: { conversation: 1 } })
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

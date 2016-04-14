import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    search(){
      let self = this;
      let joinCode = this.get('joinCode');
      let onSuccess = function(conversation) {
        // Get conversation from promise and user from session.
        var conversationToJoin = conversation.get('firstObject');
        var user = self.get('sessionUser.user');
        // Create new userConversation
        var userConversation = self.store.createRecord('userConversation', {
          user: user,
          conversation: conversationToJoin
        });
        // After saving the record, refresh the conversations and redirect to the added convo
        userConversation.save().then(function() {
          self.get('sessionUser.user.conversations').reload();
          self.transitionToRoute('conversations.conversation', conversationToJoin.id);
        });
      };
      let onFailure = function(error) {
        console.log('There is an error', error);
      };
      this.store.query('conversation',{ filter: { code: joinCode}}).then(onSuccess, onFailure);
    }
  }
});
import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    search(joinCode){
      let route = this;
      let onSuccess = function(conversation) {
        // Get conversation from promise and user from session.
        var conversationToJoin = conversation.get('firstObject');
        var user = route.get('sessionUser.user');
        // Create new userConversation
        var userConversation = route.store.createRecord('userConversation', {
          user: user,
          conversation: conversationToJoin
        });
        // After saving the record, refresh the conversations and redirect to the added convo
        userConversation.save().then(function() {
          route.get('sessionUser.user.conversations').then(function(){
            route.transitionTo('conversation.messages', conversationToJoin.id);
          });
        });
      };
      let onFailure = function(error) {
        console.log('There is an error', error);
      };
      route.store.query('conversation',{ filter: { code: joinCode}}).then(onSuccess, onFailure);
    }
  }
});

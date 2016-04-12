import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    search(){
      let self = this;
      let joinCode = this.get('joinCode');
      let onSuccess = function(conversation) {
        var conversation = conversation.get('firstObject');
        var user = self.get('sessionUser.user');
        var userConversation = self.store.createRecord('userConversation', {
          user: user,
          conversation: conversation
        });
        userConversation.save();
      }
      let onFailure = function(error) {
        console.log('There is an error', error);
      };
      this.store.query('conversation',{ filter: { code: joinCode}}).then(onSuccess, onFailure);
    }
  }
});
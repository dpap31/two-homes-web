import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let conversationModel = this.modelFor('parenting-group.conversation')
    return conversationModel
  },
  actions: {
    addUserToThread(user, conversation){
      let router = this;
      let userConversation = router.store.createRecord('user-conversation',{
        conversation: conversation,
        user: user
      });
      userConversation.save();
      // After save create notification that new users has been added to convo
      // Reload conversation participants.
    }
  }
});



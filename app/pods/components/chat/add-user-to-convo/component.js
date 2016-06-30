import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  pgUsers: Ember.computed( function(){
    return this.get('conversation.parentingGroup.users');
  }),

  convoUsers: Ember.computed( function(){
    return this.get('conversation.users');
  }),

  actions: {
    addUserToThread(user_id){
      var store = this.get('store');
      let convo = this.get('conversation');

      let onSuccess = function(){
        convo.get('users').reload();
      };

      let userConversation = store.createRecord('user-conversation',{
        conversation: convo,
        user: store.peekRecord('user', user_id),
      });

      userConversation.save().then(onSuccess);
    },

    goToPgInvite(pg){
      this.get('router').transitionTo('app.parenting-group.new-invite', pg);
    },
  }
});

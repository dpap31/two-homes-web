import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  pgUsers: Ember.computed( function(){
    return this.get('conversation.parentingGroup.users');
  }),

  convoUsers: Ember.computed( function(){
    return this.get('conversation.users');
  }),

  diff: Ember.computed( function(){
    this.get('conversation.parentingGroup.users').then(function(pg){
      this.get('conversation.users').then(function(convo){
        console.log(pg);
        console.log(convo);
      });
    });
  }),

  actions: {
    addUserToThread(user_id){
      var store = this.get('store');
      let userConversation = store.createRecord('user-conversation',{
        conversation: this.get('convo'),
        user: store.peekRecord('user', user_id),
      });
      userConversation.save();
    },
  }
});

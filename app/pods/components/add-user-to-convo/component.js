import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  convoUsers: Ember.computed( function(){
     return this.get('convo.users');
  }),

  pgUsers: Ember.computed( function(){
    return this.get('convo.parentingGroup.users');
  }),

  newUsers: Ember.computed( function(){
    let convoUsers = this.get('convo.users');
    let pgUsers = this.get('convo.parentingGroup.users');
    return pgUsers.filter(function(x) {  convoUsers.indexOf(x) < 0 })
  }),

  actions: {
    addUserToThread(user_id){
      alert(user_id);
    //   var store = this.get('store');
    //   let userConversation = store.createRecord('user-conversation',{
    //     conversation: this.get('convo'),
    //     user: store.peekRecord('user', user_id),
    //   });
    //   userConversation.save();
    },
  }
});

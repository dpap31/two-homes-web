import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  // convoUsers: this.get('convo.parentingGroup.users'),
  // pgUsers: this.get('convo.users'),
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

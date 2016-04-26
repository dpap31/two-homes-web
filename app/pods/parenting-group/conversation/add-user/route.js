import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //Get users
    let allPGUsers = this.store.peekAll('user');
    return allPGUsers
    //Remove self and users in conversation
    //Create new userConversation
  }
});

  // create action to add users to existing convo

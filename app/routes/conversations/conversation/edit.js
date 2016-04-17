import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    save(conversation){
      console.log(conversation);
      let router = this;
      let onSuccess = function(){
        router.get('sessionUser.user.conversations').then(function(){
          router.transitionTo('conversations.conversation.messages', conversation.id);
        });
      };
      let onFailure = function(){
        console.log('ERROR');
      };
      conversation.save().then(onSuccess, onFailure);
    }
  }
});

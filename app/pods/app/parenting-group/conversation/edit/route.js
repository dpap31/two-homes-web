import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    save(conversation){
      console.log(conversation);
      let router = this;
      let onSuccess = function(){
        router.get('sessionUser.user.conversations').then(function(){
          router.transitionTo('conversation.messages', conversation.id);
        });
      };
      let onFailure = function(){
        console.log('ERROR');
      };
      conversation.save().then(onSuccess, onFailure);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  model(){
    return this.store.createRecord('conversation', {
      parentingGroup: this.modelFor('parentingGroup')
    });
  },

  actions: {
    save(conversation){
      let router = this;

      let onSuccess = function(){
        // router.get('sessionUser.user.conversations').then(function(){
        //   router.transitionTo('conversation.messages', conversation);
        // });
      };

      let onFailure = function(){
        console.log('ERROR');
      };

      conversation.save().then(onSuccess, onFailure);
    }
  }
});

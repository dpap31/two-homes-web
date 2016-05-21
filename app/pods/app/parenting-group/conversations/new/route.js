import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model(){
    return this.store.createRecord('conversation', {
      parentingGroup: this.modelFor('parentingGroup')
    });
  },

  actions: {
    save(conversation){
      //let router = this;

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

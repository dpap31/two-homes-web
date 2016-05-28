import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({

  model(){
    let convo = this.store.createRecord('conversation', {
      parentingGroup: this.modelFor('app.parentingGroup')
    });
    return convo.save()
  },

  actions: {
    save(){
      let router = this;
      let conversation = this.get('currentModel');

      let onSuccess = function(){
        router.transitionTo('conversation.messages', conversation);
      };

      let onFailure = function(){
        console.log('ERROR');
      };
      conversation.save().then(onSuccess, onFailure);
    },
  }
});

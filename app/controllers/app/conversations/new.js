import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    save(){
      let conversation = this.get('model');
      let self = this;
      let onSuccess = function(){
        self.get('sessionUser.user.conversations').reload();
        self.transitionToRoute('app.index');
      };
      let onFailure = function(){
        console.log('ERROR');
      };
      conversation.save().then(onSuccess, onFailure);
    }
  }
});

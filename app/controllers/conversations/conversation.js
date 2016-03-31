import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),
  actions: {
    save(){
      console.log('saving..');
    }
  }
});

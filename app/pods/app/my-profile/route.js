import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  sessionUser: inject.service('session-user'),

  model(){
    return this.get('sessionUser.user');
  },

  actions: {
    update(){
      let user = this.get("currentModel");
      user.save();
    }
  }
});

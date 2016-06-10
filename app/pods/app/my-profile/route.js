import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  sessionUser: inject.service('session-user'),

  model(){
    return this.get('sessionUser.user');
  },

  actions: {
    update(){
      let route = this;
      let user = route.get("currentModel");

      let onSuccess = function(){
        route.get('flashMessages').success('Updated user profile');
      };

      let onFailure = function(){
        route.get('flashMessages').danger('Error updating user profile');
      };

      user.save().then(onSuccess, onFailure);

    }
  }
});

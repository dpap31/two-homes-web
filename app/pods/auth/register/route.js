import Ember from 'ember';

export default Ember.Route.extend({
   model(){
     return this.get('store').createRecord('user');
   },

  actions: {
   doRegister() {
      let route = this;
      let onFailure = function() {
        route.get('flashMessages').danger('Registration error. Please try again.');
      };

      let onSuccess = function() {
        let user = route.get('currentModel');
        route.send('login', user.get('email'), user.get('password'));
        route.transitionTo('auth.login');
        route.get('flashMessages').success('Welcome to TwoHomes.');
      };

      route.get('currentModel').save().then(onSuccess, onFailure);
     }
   }
});


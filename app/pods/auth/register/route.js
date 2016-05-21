import Ember from 'ember';

export default Ember.Route.extend({
   model(){
     return this.get('store').createRecord('user');
   },

  actions: {
   doRegister() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
      });
     }
   }
});


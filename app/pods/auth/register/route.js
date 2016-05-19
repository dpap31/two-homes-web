import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
   model() {
     return this.store.createRecord('user');
   },

   doRegister() {
       alert('registration attempted');
     }
   }
});


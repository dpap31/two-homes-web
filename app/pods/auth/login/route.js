import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      email: '',
      password: ''
    };
  },
  actions: {
    doLogin() {
      alert('login attempted');
    }
  }
});

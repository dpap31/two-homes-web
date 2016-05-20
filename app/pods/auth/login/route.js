import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  actions: {
    doLogin(identification, password) {
      this.get('session').authenticate(
        'authenticator:oauth2', identification, password
      );
    }
  }
});

import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  flashMessages: inject.service(),

  actions: {
    doLogin(identification, password) {
      this.get('session').authenticate(
        'authenticator:oauth2', identification, password
      ).then(() => {

        // Successful Login
        this.get('flashMessages').success('Logged in!');

      }).catch((response) => {

        // Failed Login
        this.get('flashMessages').danger('There was a problem with your username or password, please try again');

      });
    }
  }
});

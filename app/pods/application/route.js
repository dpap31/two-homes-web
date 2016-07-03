import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionInvalidated() {
    this.transitionTo('auth.login');
  },

  beforeModel() {
    if(this.get('session').get('isAuthenticated')) {
      this.transitionTo('app');
    } else {
      this.transitionTo('auth.login');
    }
  },

  actions: {
    login(identification, password){
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },

    goTo(route){
      this.transitionTo(route);
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});

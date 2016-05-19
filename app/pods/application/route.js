import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // session: Ember.inject.service('session'),
  // sessionUser: Ember.inject.service('session-user'),
  actions:{
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

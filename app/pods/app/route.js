import Ember from 'ember';
import config from '../../config/environment';

const { Route, inject } = Ember;

export default Ember.Route.extend({

  session: inject.service(),
  sessionUser: inject.service('session-user'),

  beforeModel() {
    let router = this;
    if(!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
    return fetch(`${config.DS.host}/${config.DS.namespace}/users/me`, {
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${this.get('session').get('session.content.authenticated.access_token')}`
      }
    }).then((raw) => {
      return raw.json().then((data) => {
        const sessionUser = router.store.findRecord('user', data['data']['id'])
        this.set('session.sessionUser', sessionUser);
      });
    });
  }
});

import Ember from 'ember';
import config from '../../config/environment';

const { Route, inject } = Ember;

export default Ember.Route.extend({

  session: inject.service(),

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
  },


  model() {
    let router = this;
    return Ember.RSVP.hash({
      user: this.get('session.sessionUser'),
      newParentingGroup: router.store.createRecord('parenting-group'),
    });
  },



  actions: {
    save(){
      let router = this;
      let model = router.modelFor(router.routeName);
      let onSuccess = function(){
        router.get('sessionUser.user.parentingGroups').reload();
      };

      let onFailure = function(){
        console.log('ERROR');
      };
      model.newParentingGroup.save().then(onSuccess, onFailure);
    }
  }
});

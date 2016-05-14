import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model(){
    let router = this;
    return router.store.createRecord('invite', {
      sender: router.get('sessionUser.user'),
      parentingGroup: router.modelFor('parenting-group'),
    });
  },
});

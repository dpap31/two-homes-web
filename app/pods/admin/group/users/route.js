import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  model(){
    let route = this;
    return route.store.createRecord('invite', {
      sender: route.get('sessionUser.user'),
      parentingGroup: route.modelFor('admin.group'),
    });
  }
});

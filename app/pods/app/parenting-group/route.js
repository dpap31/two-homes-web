import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  sessionUser: service('session-user'),

  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id);
  },
});

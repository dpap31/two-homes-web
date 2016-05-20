import Ember from 'ember';
const { Route, inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id);
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id);
  },
});

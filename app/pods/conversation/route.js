import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('parent-group', params.parent_group_id);
  }
});

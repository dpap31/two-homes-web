import Ember from 'ember';
export default Ember.Route.extend({
  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id).then( function(pg){
      return pg.get('conversations').then(function(convos){
        return Ember.RSVP.hash({
          parentingGroup: pg,
          conversations: convos
        });
      });
    });
  }
});

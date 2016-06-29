import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  sessionUser: service('session-user'),

  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id);
  },

  actions: {

     editPgName(pg) {
       pg.set('isEditing', true);
     },

     cancelPgEdit(pg) {
       pg.set('isEditing', false);
       pg.rollbackAttributes();
     },

     savePg(pg) {
       if (pg.get('isNotValid')) {
         return;
       }

       pg.set('isEditing', false);
       pg.save();
     }
   }
});

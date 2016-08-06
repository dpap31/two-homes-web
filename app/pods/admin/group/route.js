import Ember from 'ember';

export default Ember.Route.extend({

  sessionUser: Ember.inject.service('session-user'),

  model(params) {
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

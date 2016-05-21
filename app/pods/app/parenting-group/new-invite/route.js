import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  model(){
    let router = this;
    return router.store.createRecord('invite', {
      sender: router.get('sessionUser.user'),
      parentingGroup: router.modelFor('parenting-group'),
    });
  },
});

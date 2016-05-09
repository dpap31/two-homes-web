import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model() {
    let router = this;
    return router.get('sessionUser.user').then(function(user) {
      return Ember.RSVP.hash({
        user: user,
        newParentingGroup: router.store.createRecord('parenting-group'),
      });
    });
  },

  actions: {
    save(newParentingGroup){
      let router = this;
      let onSuccess = function(){
        let model = router.modelFor(router.routeName);
        model.parentingGroups.reload();
      };

      let onFailure = function(){
        console.log('ERROR');
      };

      newParentingGroup.save().then(onSuccess, onFailure);
    }
  }
});


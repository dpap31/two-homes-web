import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({

  session: inject.service(),
  beforeModel() {
    if(!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },


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
    save(){
      let router = this;
      let model = router.modelFor(router.routeName);
      let onSuccess = function(){
        router.get('sessionUser.user.parentingGroups').reload();
      };

      let onFailure = function(){
        console.log('ERROR');
      };
      model.newParentingGroup.save().then(onSuccess, onFailure);
    }
  }
});

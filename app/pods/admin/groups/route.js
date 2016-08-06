import Ember from 'ember';

export default Ember.Route.extend({

  sessionUser: Ember.inject.service('session-user'),

  model() {
    let router = this;
    return Ember.RSVP.hash({
      user: this.get('sessionUser.user'),
      newParentingGroup: router.store.createRecord('parenting-group'),
    });
  },



  actions: {
    save(){
      let router = this;
      let model = router.modelFor(router.routeName);
      let onSuccess = function(){
        router.get('sessionUser.user.parentingGroups').reload();
        router.get('flashMessages').success('Created new group');
      };
      let onFailure = function(){
        router.get('flashMessages').danger('Failed to create group');
      };
      model.newParentingGroup.save().then(onSuccess, onFailure);
    },

    goToPgUsers: function(pg) {
      this.transitionTo('admin.group.users', pg);
    },

    goToPgSettings: function(pg) {
      this.transitionTo("admin.group.settings", pg);
    },

    goToPgReports: function(pg) {
      this.transitionTo("admin.group.reports", pg);
    },
  }
});

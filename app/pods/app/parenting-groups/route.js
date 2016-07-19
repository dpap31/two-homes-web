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

    goToPg: function(pg) {
      let firstConversation = pg.get('conversations.firstObject.id');
      this.transitionTo("app.parenting-group.conversation.messages", pg, firstConversation);
    },

    goToPgInvite: function(pg) {
      this.transitionTo("app.parenting-group.new-invite", pg);
    }
  }
});

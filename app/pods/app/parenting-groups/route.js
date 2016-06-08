import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  model() {
    let router = this;
    return Ember.RSVP.hash({
      user: this.get('session.sessionUser'),
      newParentingGroup: router.store.createRecord('parenting-group'),
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
    },

    goToPg: function(pg) {
      let firstConversation = pg.get('conversations.firstObject.id');
      if (firstConversation === undefined) {
        this.transitionTo("app.parenting-group.conversations.new", pg);
      } else {
        this.transitionTo("app.parenting-group.conversation.messages", pg, firstConversation);
      }
    },

    goToPgInvite: function(pg) {
      this.transitionTo("app.parenting-group.new-invite", pg);
    }
  }
});

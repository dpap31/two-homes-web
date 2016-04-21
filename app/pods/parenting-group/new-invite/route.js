import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model(){
    let router = this;
    return router.get('sessionUser.user').then(function(user){
      return Ember.RSVP.hash({
        newInvite: router.store.createRecord('invite', {
          sender: user,
          parentingGroup: router.modelFor('parenting-group'),
        }),
      });
    });
  },

  actions:{
    sendInvite(invite){
      let router = this;
      let parentingGroup = router.modelFor('parenting-group')
      invite.save().then(function(){
        router.transitionTo('parenting-group', parentingGroup);
      });
    }
  }
});

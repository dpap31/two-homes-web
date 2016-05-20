import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var route = this;
    return route.store.queryRecord('invite', {filter: {token: params.invite_token } } ).then(function(){
      let invite = route.store.peekAll('invite').get('firstObject');
      return invite.get('parentingGroup').then(function(parentingGroup){
        return Ember.RSVP.hash({
          invite: invite,
          parentingGroup: parentingGroup,
          user: route.store.createRecord('user')
        });
      });
    });
  },

  actions: {
    save(user) {
      let route = this;
      let model = route.modelFor(route.routeName);
      let onSuccess = function(user) {
        if (route.get('session.isAuthenticated')){
          route.transitionTo('login');
        } else{
          createMembership(route, model);
          acceptInvite(model.invite);
          route.send('login', user.get('email'), user.get('password'));
        }
      };
      let onFailure = function(error) {
        console.log('There is an error', error);
      };
      user.save().then(onSuccess, onFailure);
    }
  }
});

function createMembership(route, model){
  let membership = route.store.createRecord('membership', {
    parentingGroup: model.parentingGroup,
    user: model.user
  });
  membership.save();
}

function acceptInvite(invite){
  invite.set('accepted', true);
  invite.save();
}

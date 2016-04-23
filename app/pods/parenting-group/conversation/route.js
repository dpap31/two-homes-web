import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model(params) {
    let route = this;
    let user = route.get('sessionUser.user');
    var convo = route.store.peekRecord('conversation', params.conversation_id);
    return convo.get('parentingGroup').then(function(parentingGroup){
      return convo.get('messages').then(function(messages){
        return Ember.RSVP.hash({
          activeConvo: convo,
          messages: messages,
          user: user,
          parentingGroup: parentingGroup,
        });
      });
    });
  }
});

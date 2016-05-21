import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  sessionUser: service('session-user'),
  isDisabled: Ember.computed.empty('model.newMessage.body')
});

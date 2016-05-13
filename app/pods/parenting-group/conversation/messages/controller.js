import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: Ember.computed.empty('model.newMessage.body')
});

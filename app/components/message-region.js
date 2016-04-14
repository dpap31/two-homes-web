import Ember from 'ember';

export default Ember.Component.extend({
  sessionUser: Ember.inject.service('session-user'),
  isSender: function() {
    return this.get('param1') === this.get('param2');
  }.property('param1', 'param2')
});

import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),
  // sortProps: ['name'],
  // sortedConversations: Ember.computed.sort('parentingGroup.conversations', 'sortProps'),
});

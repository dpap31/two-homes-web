import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),
  sortProps: ['code'],
  sortedConversations: Ember.computed.sort('sessionUser.user.conversations', 'sortProps'),
});

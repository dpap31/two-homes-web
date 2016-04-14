import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  fullName: DS.attr(),
  initials: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  persona: DS.attr(),
  userConversations: DS.hasMany('user-conversations'),
  conversations: DS.hasMany('conversations', { async: true }),
  messages: DS.hasMany('messages')
});

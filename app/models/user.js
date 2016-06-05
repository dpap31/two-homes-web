import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  fullName: DS.attr('string', { serialize: false }),
  initials: DS.attr('string', { serialize: false }),
  email: DS.attr(),
  password: DS.attr(),
  persona: DS.attr(),
  userConversations: DS.hasMany('user-conversations'),
  conversations: DS.hasMany('conversations', { async: true }),
  memberships: DS.hasMany('memberships'),
  parentingGroups: DS.hasMany('parenting-groups', { async: true }),
  messages: DS.hasMany('messages')
});

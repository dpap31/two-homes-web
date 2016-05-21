import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  userConversations: DS.hasMany('user-conversations'),
  users: DS.hasMany('users', { async: true }),
  messages: DS.hasMany('messages'),
  parentingGroup: DS.belongsTo('parenting-group')
});

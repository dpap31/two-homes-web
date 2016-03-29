import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr(),
  password: DS.attr(),
  userConversations: DS.hasMany('user-conversations')
});

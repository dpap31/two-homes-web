import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  memberships: DS.hasMany('memberships'),
  users: DS.hasMany('users'),
  invites: DS.hasMany('invites'),
  conversations: DS.hasMany('conversations')
});

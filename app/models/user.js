import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  initials: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  persona: DS.attr(),
  userConversations: DS.hasMany('user-conversations'),
  conversations: DS.hasMany('conversations', { async: true }),
  memberships: DS.hasMany('memberships'),
  parentingGroups: DS.hasMany('parenting-groups', { async: true }),
  messages: DS.hasMany('messages')
});

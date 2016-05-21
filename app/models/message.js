import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  isSent: DS.attr('boolean', {
    defaultValue() { return false; }
  }),
  user: DS.belongsTo('user'),
  conversation: DS.belongsTo('conversation', { async: true }),
});

import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  user: DS.belongsTo('user'),
  conversation: DS.belongsTo('conversation'),
  timestamp: DS.attr('number')
});

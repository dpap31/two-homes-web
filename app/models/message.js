import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  conversation: DS.belongsTo('conversation'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  user: DS.belongsTo('user'),
  timestamp: DS.attr('number')
});

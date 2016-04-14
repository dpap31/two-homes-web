import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  conversation: DS.belongsTo('conversation'),
  user: DS.belongsTo('user')
});

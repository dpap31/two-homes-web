import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  email: DS.attr('string'),
  token: DS.attr('string'),
  accepted: DS.attr('boolean', { defaultValue: false }),
  sender: DS.belongsTo('user'),
  recipient: DS.belongsTo('user'),
  parentingGroup: DS.belongsTo('parenting_group')
});

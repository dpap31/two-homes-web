import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  valueChanged: Ember.observer('value', function() {
    this.send('handleFilterEntry', this.get('value'));
  }),

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },


  actions: {
    handleFilterEntry(filterInputValue) {
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }

});

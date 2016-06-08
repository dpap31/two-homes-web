import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['notification-center'],
    // inject the flashMessages service
    flashMessages: Ember.inject.service(),

    // ember-cli-flash expects flash messages to be ordered
    // from top to bottom. Since toasts come up from the bottom,
    // we need to reverse the order so that the newest message
    // is on the bottom
    reversedFlashQueue: Ember.computed('flashMessages.arrangedQueue.[]', function() {
      return this.get('flashMessages.arrangedQueue').reverse();
    })
});

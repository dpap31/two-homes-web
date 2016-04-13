import Ember from 'ember';

export default Ember.Route.extend({
   model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      newMessage: this.store.createRecord('message')
    })
  },

  actions: {
    messageSent: function() {
      this.refresh();
    }
  }
});

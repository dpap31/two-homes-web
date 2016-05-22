import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sessionUser: service('session-user'),
  isDisabled: Ember.computed.empty('messageBody'),

  actions: {
    sendMessage: function(e) {
      preventPageReload(e);
      let component = this;
      let store = this.get('store');
      let message = createNewMessage(component, store);
      message.save().then(function(){
        component.set('messageBody', '');
        Ember.$('.thread').scrollTop(1E10);
      });
    }
  }
});

// Prevent page reload during newline keypress submit.
function preventPageReload(e){
  if (e) {
    e.preventDefault();
  }
}

function createNewMessage(component, store){
  let message = store.createRecord('message',{
    body: component.get('messageBody'),
    isSent: true,
    user: component.get('sessionUser.user'),
    createdAt: new Date(),
    conversation: store.peekRecord('conversation', component.get('conversation_id')),
  });
  return message;
}

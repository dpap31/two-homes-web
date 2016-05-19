import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model() {
    let router = this;
    let conversation = router.modelFor('parenting-group.conversation');
    return Ember.RSVP.hash({
      newMessage: router.store.createRecord('message', {
        user: router.get('sessionUser.user'),
        conversation: conversation
      }),
      messages: router.store.query('message', { param: conversation }),
    });
  },

  actions: {
    sendMessage(){
      let router = this;
      let message = router.modelFor(router.routeName).newMessage;
      message.setProperties({
        createdAt: new Date(),
        isSent: true,
      });
      message.save().then(function(){
        Ember.$('.thread').scrollTop(1E10);
        router.refresh();
      });
    },
    sendMessageOnEnter(body) {
      let router = this;
      let message = router.modelFor(router.routeName).newMessage;
      message.setProperties({
        createdAt: new Date(),
        isSent: true,
        body: body
      });

      message.save().then(function(){
        Ember.$('.thread').scrollTop(1E10);
        router.refresh();
      });
    },
    willTransition() {
      let message = this.modelFor(this.routeName).newMessage;
      message.rollbackAttributes();
    }
  }
});


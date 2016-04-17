import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
   model() {
    let router = this;
    return router.get('sessionUser.user').then(function(user) {
      return Ember.RSVP.hash({
        newMessage: router.store.createRecord('message', {
          user: user,
          conversation: router.modelFor('conversation')
        }),
        messages: router.store.query('message', { param: router.modelFor('conversations.conversation') }),
      });
    });
  },

  actions: {
    sendMessage(message){
      let router = this;
      message.setProperties({
        createdAt: new Date(),
        isSent: true,
      });
      message.save().then(function(){
        $('.thread').scrollTop(1E10);
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
        $('.thread').scrollTop(1E10);
        router.refresh();
      });
    }
  }
});


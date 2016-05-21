import Ember from 'ember';
const { Route, inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model(params) {
    let route = this;
    const convo = route.store.findRecord('conversation', params.conversation_id);
    return convo;
  },

  // actions: {
  //   sendMessage(){
  //     let route = this;
  //     let message = route.currentModel.newMessage;
  //     message.setProperties({
  //       createdAt: new Date(),
  //       isSent: true,
  //     });
  //     message.save().then(function(){
  //       Ember.$('.thread').scrollTop(1E10);
  //       route.refresh();
  //     });
  //   },
  //   sendMessageOnEnter(body) {
  //     let route = this;
  //     let message = route.currentModel.newMessage;
  //     message.setProperties({
  //       createdAt: new Date(),
  //       isSent: true,
  //       body: body
  //     });

  //     message.save().then(function(){
  //       Ember.$('.thread').scrollTop(1E10);
  //       route.refresh();
  //     });
  //   },
    // willTransition() {
    //   let message = this.currentModel.newMessage;
    //   message.rollbackAttributes();
    // }
  //}
});

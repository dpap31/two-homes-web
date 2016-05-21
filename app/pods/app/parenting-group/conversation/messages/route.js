import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model() {
    let route = this;
    let convo = route.modelFor('app.parenting-group.conversation');
    //route.store.findAll('message')
    let convo_id = convo.get('id');
    // route.store.query('message', { filter: { 'conversation': convo } })
    return route.store.query('message', {
         orderBy: 'conversation',
         equalTo: convo_id
       });
    //console.log(conversation.get('messages.length'));

    // return route.store.query('message', {filter: { 'conversation_id' : conversation_id } }).then(function(messages) {
    //   console.log(messages.get('length'))
    //   return messages;
    // });
    // conversation.get('messages').then(function(m){
    //   console.log(m);
    // });
    // return conversation.get('messages');
  },
  // model: function(params, transition, queryParams)  {
  //       var post = this.modelFor('post');
  //       var post_id = post.get('id');
  //       var filterFunction = function(comment) {
  //          // promise in the filterFN return
  //          return comment.get('post').then(function(p) {
  //            return p.get('id') == post_id;
  //          });
  //       }
  //       var commentPromises = this.store.filter('comment', {'post_id':post_id});
  //       var comments = Ember.RSVP.filter(commentPromises, filterFunction);
  //       return comments;
  //     }
  // actions: {
  //   sendMessage(){
  //     let router = this;
  //     let message = router.modelFor(router.routeName).newMessage;
  //     message.setProperties({
  //       createdAt: new Date(),
  //       isSent: true,
  //     });
  //     message.save().then(function(){
  //       Ember.$('.thread').scrollTop(1E10);
  //       router.refresh();
  //     });
  //   },
  //   sendMessageOnEnter(body) {
  //     let router = this;
  //     let message = router.modelFor(router.routeName).newMessage;
  //     message.setProperties({
  //       createdAt: new Date(),
  //       isSent: true,
  //       body: body
  //     });

  //     message.save().then(function(){
  //       Ember.$('.thread').scrollTop(1E10);
  //       router.refresh();
  //     });
  //   },
  //   willTransition() {
  //     let message = this.modelFor(this.routeName).newMessage;
  //     message.rollbackAttributes();
  //   }
  // }
});


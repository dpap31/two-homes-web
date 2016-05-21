import Ember from 'ember';

const { Route, inject } = Ember;
const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service('session'),
  sessionUser: service('session-user'),

  model() {
    let route = this;
    let convo = route.modelFor('app.parenting-group.conversation').get('id');
    let messages = route.store.query('message', {
      orderBy: 'conversation',
      equalTo: convo
    });
    return messages

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


import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let conversationModel = this.modelFor('parenting-group.conversation')
    return conversationModel.activeConvo
    //Remove self and users in conversation
    //Create new userConversation
  },
  actions: {
    addUserToThread(user, conversation){
      let router = this;
      let userConversation = router.store.createRecord('user-conversation',{
        conversation: conversation,
        user: user
      });
      userConversation.save();
    }
  }
});

//    save(user) {
//       let route = this;
//       let model = route.modelFor(route.routeName);
//       let onSuccess = function(user) {
//         if (route.get('session.isAuthenticated')){
//           route.transitionTo('login');
//         } else{
//           createMembership(route, model)
//           acceptInvite(model.invite)
//           route.send('login', user.get('email'), user.get('password'));
//         }
//       };
//       let onFailure = function(error) {
//         console.log('There is an error', error);
//       };
//       user.save().then(onSuccess, onFailure);
//     }
//   }
// });

// function createMembership(route, model){
//   let membership = route.store.createRecord('membership',{
//     parentingGroup: model.parentingGroup,
//     user: model.user
//   });
//   membership.save();
// }



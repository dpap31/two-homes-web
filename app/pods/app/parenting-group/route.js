import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  sessionUser: service('session-user'),

  model(params){
    let route = this;
    return route.store.findRecord('parentingGroup', params.parenting_group_id);
    // route.get('sessionUser.user').then(function(currentUser){
    //   //console.log(currentUser)
    //   return currentUser.get('conversations').then(function(currentUserConvos){
    //     //console.log(currentUserConvos)
    //     var currentUserPgConvos = currentUserConvos.map(function(convo){
    //       return convo.parentingGroup
    //     }).filter(function(parentingGroup, index, arr){
    //       return arr.indexOf(parentingGroup) == index // throw away any instances which are not first
    //     })
    //   });
    //   return currentUserPgConvos[0].property('conversations');
    // });
    // //Get parentingGroup
    // let pg = route.store.findRecord('parentingGroup', params.parenting_group_id);
    // let pgConvos = pg.get('conversations');
    // pgConvos.filterBy
    // let currentUserConvos = route.store.query('conversation', { filter: {
    //     user_id: currentUserId,
    //     parenting_group_id: params.parenting_group_id
    //   }
    // }).then(function(peters) {
    //    // Do something with `peters`
    // });

  },

    // .then(function(pg){
    //   //Get parentingGroup's Conversations
    //   return pg.get('conversations').then(function(conversations){
    //     console.log(conversations);
    //     // filter conversations by current user
    //     let currentUserConversations = conversations.filterBy('user_id', currentUserId);
    //     console.log(currentUserConversations.get('firstObject'));
    //     return Ember.RSVP.hash({
    //       currentUserConversations: currentUserConversations,
    //       parentingGroup: pg
    //     });
    //   });
    // });
    // let route = this;
    // let convo_id = route.modelFor('app.parenting-group.conversation').get('id');
    // let messages = route.store.query('message', {
    //   orderBy: 'conversation',
    //   equalTo: convo_id
    // });
    // return Ember.RSVP.hash({
    //   convo_id: convo_id,
    //   messages: messages
    // });

  actions: {

     editPgName(pg) {
       pg.set('isEditing', true);
     },

     cancelPgEdit(pg) {
       pg.set('isEditing', false);
       pg.rollbackAttributes();
     },

     savePg(pg) {
       if (pg.get('isNotValid')) {
         return;
       }

       pg.set('isEditing', false);
       pg.save();
     }
   }
});

import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  sessionUser: inject.service('sessionUser'),

  // parentingGroupId: Ember.computed(function(){
  //   return this.get("pg.id")
  // }),
  parentingGroupId: null,

  pgUserConversations: Ember.computed.filterBy('conversations', 'parentingGroupId', 1),

  // pgUserConversations2: Ember.computed(parentingGroupId,function(){
  //   //console.log(this.get('conversations'));
  //   return this.get('conversations').filterBy('parentingGroupId', this.get("pg.id"))
  //   }.property('conversations.@each.parentingGroupId')),
  //   return this.get('conversations').filterBy('parentingGroupId', this.get('parentingGroupId'));
  // }.property('conversations.@each.parentingGroupId'),
//  return this.get('data').filterBy('id', this.get('localID'));
// }.property('data.@each.id')

  actions: {
    goToConvo: function(convo) {
      this.get('router').transitionTo('app.parenting-group.conversation.messages', convo);
    },
    goToNewConvo: function(){
      this.get('router').transitionTo('app.parenting-group.conversations.new');
    }
  }
});

import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  sessionUser: inject.service('sessionUser'),
  currentParentingGroupId: 26,
  // convo: this.get('conversations').filterBy('parentingGroupId', 26);
  // pgUserConversations: Ember.computed.filter('conversations', function(conversation){
  //   //var parentingGroupId = this.get('parentingGroup.id')
  //   //return this.get('conversations').filterBy('parentingGroupId', parentingGroupId);
  // }),
  // parentingGroupId: Ember.computed("pg", function(){
  //   return this.get("parentingGroup.id")
  // }),

  pgUserConversations: Ember.computed.filterBy('conversations', 'parentingGroupId', null),

  actions: {
    goToConvo: function(convo) {
      this.get('router').transitionTo('app.parenting-group.conversation.messages', convo);
    },
    goToNewConvo: function(){
      this.get('router').transitionTo('app.parenting-group.conversations.new');
    }
  }
});

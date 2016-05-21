import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'), // we will use Ember.store for search
    foundItems: [], // we need to store found items

    findItem(value) {
     // we get `store` service to search
     // we get `model` to know which model to query
     //    and `key` to narrow down a search to one attribute
     const { store, model, key } = this.getProperties('store', 'model', 'key');

     const query = {};
     query[key] = value;

     // we query the data and set the results as ‘foundItems’
     store.query(model, { filter: query } ).then((conversation) => {
         this.set('foundItems', conversation);
     });
    },

    createUserConversation(user, conversation){
      const store = this.get('store');
      let userConversation = store.createRecord('user-conversation', {
        conversation: conversation,
        user: user
      });
      userConversation.save();
      // After save create notification that new users has been added to convo
      // Reload conversation participants.
    },

    actions: {
      keyUp(value) {
        this.findItem(value);
      },

      addUserToThread(user, conversation){
        this.createUserConversation(user, conversation);
      }
    }
});

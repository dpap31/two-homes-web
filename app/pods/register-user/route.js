import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let newUser = this.get('store').peekAll('user').find(function(user){
      return user.get('id') == null;
    });
    if (newUser){
      return newUser;
    } else {
      return this.get('store').createRecord('user');
    }
  },

  actions:{
    saveUser() {
      let route = this;
      let user = route.modelFor(route.routeName);
      let onSuccess = function(user) {
        if (route.get('session.isAuthenticated')){
          route.transitionTo('conversations.join-conversation');
        } else{
          route.send('login', user.get('email'), user.get('password'));
        }
      };
      let onFailure = function(error) {
        console.log('There is an error', error);
      };
      user.save().then(onSuccess, onFailure);
    }
  }
});

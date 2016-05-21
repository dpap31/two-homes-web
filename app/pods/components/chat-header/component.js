import Ember from 'ember';

export default Ember.Component.extend({
  isAddingUsersToThread: false,

  actions:{
    toggleIsAddingUsersToThread(){
      this.toggleProperty('isAddingUsersToThread');
      console.log(this.get('isAddingUsersToThread'));
    }
  }
});

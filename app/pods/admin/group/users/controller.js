import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeUserFromGroup(user, group) {
      group.get('users').removeObject(user);
      group.save();
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),

  actions: {
    filterById(param) {
      if (param !== '') {
        return this.get('store').query('membership', { filter: { user_id: this.get('sessionUser.user.id'), parenting_group_id: param } });
      } else {
        return this.get('sessionUser.user.memberships')
      }
    }
  }
});

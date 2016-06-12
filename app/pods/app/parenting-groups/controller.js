import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),

  actions: {
    filterById(param) {
      if (param !== '') {
        const regexString = '(' + param.split(' ').join(')+.*(') + ')+.*';
        const regex = new RegExp(regexString, 'ig');
        let allUsers = this.get('store').peekAll('user')
        let filteredUsers = allUsers.filter((item) => item.get('fullName').match(regex));
        let filteredUsersMemberships = filteredUsers.getEach('memberships');
        return Ember.RSVP.all(filteredUsersMemberships).then(function(membershipCollections){
          var memberships = membershipCollections.reduce(function(sum, val){
              return sum.pushObjects(val.toArray());
          }, []);
          return memberships;
        });
      } else {
        return this.get('sessionUser.user.memberships')
      }
    }
  }
});

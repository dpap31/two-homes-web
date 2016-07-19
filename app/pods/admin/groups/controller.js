import Ember from 'ember';

export default Ember.Controller.extend({
  sessionUser: Ember.inject.service('session-user'),

  actions: {
    filterByUser(param) {
      if (param !== '') {
        // Search Regex
        const regexString = '(' + param.split(' ').join(')+.*(') + ')+.*';
        const regex = new RegExp(regexString, 'ig');

        // Fetch all users in the local store, filter user objects based on param
        let allUsers = this.get('store').peekAll('user');
        var filteredUsers = allUsers.filter((item) => item.get('fullName').match(regex));

        //Get each user's group memberships, merge them into one RSVP promise
        var filteredUsersMemberships = filteredUsers.getEach('memberships');
        var allMemberships =  Ember.RSVP.all(filteredUsersMemberships).then(function(membershipCollections){
          return membershipCollections.reduce(function(sum, val){
            return sum.pushObjects(val.toArray());
          }, []);
        });

        //TODO: ensure results only contains current user's memberships
        return allMemberships;

      } else {

        return this.get('sessionUser.user.memberships');

      }
    }
  }
});

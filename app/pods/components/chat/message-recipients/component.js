import Ember from 'ember';

export default Ember.Component.extend({

});

function recipientTitleString(users){
  if (users.get('length') > 1){
    users.map(function(u){return u.get('firstName')}).join(", ").toString()
  }else{
    users.get('firstObject.fullName');
  }
}

import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sessionUser: Ember.inject.service('session-user'),

  avatar_bg_color: Ember.computed(function(){
    var user = this.get('user');
    // Use fullName and firstName length to generate same bg colors
    var fullNameLength = user.get('fullName.length');
    var firstNameLength = user.get('firstName.length');
    const colors = ['#000000', '#f06d06', '#335CD6', '#6B4724', '#0000DB', '#6E6E6E', '#001947'];
    const arrLength = colors.length;
    var colorOne = colors[ fullNameLength % arrLength];
    var colorTwo = colors[ (firstNameLength * 3) % arrLength];
    // Output style text in html safe string
    var str = "background: linear-gradient(" + colorOne + ", " + colorTwo + ")";
    return Ember.String.htmlSafe(str);
  }),
});

import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sessionUser: Ember.inject.service('session-user'),

  avatar_bg_color: Ember.computed(function(){
    var user = this.get('user');
    // Use fullName and firstName length to generate same bg colors
    var fullNameLength = user.get('fullName.length');
    var firstNameLength = user.get('firstName.length');
    const colors = ['#FB615F', '060B0F', '#607d8b', '#A2D0FE', '#62292F', '#1D6D99', '#62292F'];
    const arrLength = colors.length;
    var colorOne = colors[ fullNameLength % arrLength];
    var colorTwo = colors[ (firstNameLength * 3) % arrLength];
    // Output style text in html safe string
    var str = "background: linear-gradient(" + colorOne + ", " + colorTwo + ")";
    return Ember.String.htmlSafe(str);
  }),
});

import Ember from 'ember';

export default Ember.Component.extend({
  avatar_bg_color: Ember.computed(function(){
    const colors = ['#000000', '#f06d06', '#335CD6', '#6B4724', '#0000DB', '#6E6E6E', '#001947'];
    const arrLength = colors.length;
    var colorOne = colors[Math.floor(Math.random()*100) % arrLength];
    var colorTwo = colors[Math.floor(Math.random()*100) % (arrLength)];
    var str = "background: linear-gradient(" + colorOne + ", " + colorTwo + ")"
    return Ember.String.htmlSafe(str);
  }),
});

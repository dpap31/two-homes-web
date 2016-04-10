import Ember from 'ember';

export function avatarInitials(string) {
  return string[0][0].capitalize();
}

export default Ember.Helper.helper(avatarInitials);

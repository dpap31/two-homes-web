import Ember from 'ember';

export function arrayDiff(array1, array2) {
  diff = array1.filter(function(x) { return array2.indexOf(x) < 0 })
  return diff
}
export default Ember.Helper.helper(arrayDiff);

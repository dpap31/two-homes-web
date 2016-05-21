import Ember from 'ember';

export function outputValue(params) {
    let object = params[0],
        key = params[1];

    // just to be sure, that our helper will work as expected
    if (typeof object === 'object' && typeof key === 'string') {
        if (object.get) { // we check whether the object is Ember object
            return object.get(key);
        } else {
            return object[key];
        }
    } else {
        throw new TypeError('output-value helper signature is output-value(Object, String)');
    }
}

export default Ember.Helper.helper(outputValue);

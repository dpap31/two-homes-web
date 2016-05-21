import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions:{
    sendInvite(){
      let controller = this;
      let invite = controller.get('model')
      invite.set('email', controller.get('emailAddress'));
      invite.save().then(function(){
        controller.set('responseMessage', `Invite sent to: ${controller.get('emailAddress')}`);
        controller.set('emailAddress', '');
      });
    }
  }
});
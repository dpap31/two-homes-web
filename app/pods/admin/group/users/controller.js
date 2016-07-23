import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    isAddingUser: false,
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions:{
      sendInvite(){
        let controller = this;
        let invite = controller.get('model');

        let onSuccess = function(){
          controller.get('flashMessages').success(`Invitation sent to: ${controller.get('emailAddress')}`);
          controller.set('emailAddress', '');
          controller.toggleProperty('isAddingUser');
        };

        let onFailure = function(){
          controller.get('flashMessages').danger('Error sending invitation. Try again later.');
        };

        invite.set('email', controller.get('emailAddress'));
        invite.save().then(onSuccess, onFailure);
      },

      removeUserFromGroup(user, group) {
        group.get('users').removeObject(user);
        group.save();
      },

      addUserToggle(){
        this.toggleProperty('isAddingUser');
      }
    }
  });


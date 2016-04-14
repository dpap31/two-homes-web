import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage(){
      var newMessage = this.get('model.newMessage');
      newMessage.save();
      this.send("messageSent");
    }
  }
});
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
     sendMessage(message){
      message.createdAt = new Date();
      message.isSent = true;
      message.save();
      this.send("messageSent");
     }
   }
});
import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model(params) {
    let route = this;
    const convo = route.store.findRecord('conversation', params.conversation_id);
    return convo;
  },
  actions: {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, function () {
        Ember.$('.thread').scrollTop(1E10);
      });
    },
    willTransition(){
      let convoUsersCount = this.get("currentModel.users.length")
      if (convoUsersCount == 1){
        this.get("currentModel").destroyRecord()
      }
    }
  }
});

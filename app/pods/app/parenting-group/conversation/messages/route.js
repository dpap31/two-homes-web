import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service('session'),
  sessionUser: service('session-user'),

  model() {
    let route = this;
    let convo_id = route.modelFor('app.parenting-group.conversation').get('id');
    let messages = route.store.query('message', {
      orderBy: 'conversation',
      equalTo: convo_id
    });
    return Ember.RSVP.hash({
      convo_id: convo_id,
      messages: messages
    });
  },
});


import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat/message-recipient', 'Integration | Component | chat/message recipient', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chat/message-recipient}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chat/message-recipient}}
      template block text
    {{/chat/message-recipient}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

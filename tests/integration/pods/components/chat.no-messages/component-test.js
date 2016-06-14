import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat.no-messages', 'Integration | Component | chat.no messages', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chat.no-messages}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chat.no-messages}}
      template block text
    {{/chat.no-messages}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

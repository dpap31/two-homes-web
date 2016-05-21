import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-bubbles/other', 'Integration | Component | chat bubbles/other', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chat-bubbles/other}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chat-bubbles/other}}
      template block text
    {{/chat-bubbles/other}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

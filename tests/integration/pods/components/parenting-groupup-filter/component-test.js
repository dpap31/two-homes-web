import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parenting-groupup-filter', 'Integration | Component | parenting groupup filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{parenting-groupup-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#parenting-groupup-filter}}
      template block text
    {{/parenting-groupup-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

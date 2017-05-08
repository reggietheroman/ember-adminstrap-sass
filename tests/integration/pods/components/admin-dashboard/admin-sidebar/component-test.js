import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-dashboard/admin-sidebar', 'Integration | Component | admin dashboard/admin sidebar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-dashboard/admin-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-dashboard/admin-sidebar}}
      template block text
    {{/admin-dashboard/admin-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  title: 'monkeykau',

  actions: {
    logout() {
      alert('logout: ' + this.get('title'));
    }
  }
});

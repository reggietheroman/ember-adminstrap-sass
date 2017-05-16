import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    let navs = {
      navGroupA: {
        nav: [
          {
            name: 'navA1',
            url: '#'
          },
          {
            name: 'navA1',
            url: '#'
          },
          {
            name: 'navA1',
            url: '#'
          }
        ]
      },
      navGroupB: {
        nav: [
          {
            name: 'navB1',
            url: '#'
          },
          {
            name: 'navB2',
            url: '#'
          },
          {
            name: 'navB3',
            url: '#'
          }
        ]
      },
      navGroupC: {
        nav: [
          {
            name: 'navC1',
            url: '#'
          },
          {
            name: 'navC2',
            url: '#'
          },
          {
            name: 'navC3',
            url: '#'
          }
        ]
      }
    }
    return navs;
  }
});

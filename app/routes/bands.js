import Ember from 'ember';
//import Band from '../models/band';
//import Song from '../models/song';

// var BandCollection = Ember.Object.extend({
//   content: [],
//   sortProperties: ['name:desc'],
//   sortedContent: Ember.computed.sort('content', 'sortProperties')
// });

// var bands = BandCollection.create();
// bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('band');
  },

  actions: {
    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },
    createBand: function() {
      var route = this,
        controller = this.get('controller');
      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function() {
        controller.set('name', '');
        route.transitionTo('bands.band.songs', band);
      });
    }
  }
});

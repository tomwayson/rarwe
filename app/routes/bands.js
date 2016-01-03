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
      var name = this.get('controller').get('name');
      var band = Band.create({name: name});
      bands.get('content').pushObject(band);
      this.get('controller').set('name', '');
      this.transitionTo('bands.band.songs', band);
    }
  }
});

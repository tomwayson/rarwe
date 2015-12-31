import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  raiting: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black Dog',
  rating: 3,
  band: 'Led Zepplin'
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});
var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});

var songs = SongCollection.create();
songs.get('content').push(blackDog);
songs.get('content').push(yellowLedbetter);
songs.get('content').push(pretender);

export default Ember.Controller.extend({
  songs: songs
});

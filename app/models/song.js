import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  raiting: DS.attr('number'),
  band: DS.belongsTo('band')
});

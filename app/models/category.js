import DS from 'ember-data';

export default DS.Model.extend({
  categoryname: DS.attr(),
  image: DS.attr()
});

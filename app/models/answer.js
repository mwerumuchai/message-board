import DS from 'ember-data';

export default DS.Model.extend({
  content:DS.attr(),
  user: DS.attr(),
  category:DS.belongsTo('category', { async:true }),
  upVotes: DS.attr(),
  downVotes: DS.attr()
});

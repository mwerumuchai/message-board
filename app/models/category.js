import DS from 'ember-data';

export default DS.Model.extend({
  categoryname: DS.attr(),
  author: DS.attr(),
  question: DS.attr(),
  answers: DS.hasMany('answer', {
    async: true
  })
});

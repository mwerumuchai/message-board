import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('category');
  },
  update(category, params) {
  Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      category.set(key,params[key]);
    }
  });
  category.save();
  this.transitionTo('index');
},
});

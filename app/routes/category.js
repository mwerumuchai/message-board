import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    update(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          category.set(key,params[key]);
        }
      });
      category.save();
      this.transitionTo('');
    },
      saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var category = params.category;
      category.get('answer').addObject(newAnswer);
      newAnswer.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', category);
    }
  }
});

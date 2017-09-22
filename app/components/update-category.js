import Ember from 'ember';

export default Ember.Component.extend({
  updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});

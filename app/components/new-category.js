import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categorylFormShow() {
      this.set('addNewCategory', true);
    },
    saveCategory1() {
        var params = {
          question: this.get('question'),
          author: this.get('author'),
        };
        this.set('addNewCategory', false);
        this.sendAction('saveCategory2', params);
      }
    }
  });

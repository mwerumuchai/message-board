import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

   saveCategory1() {
     var params = {
       catergoryname: this.get('catergoryname'),
       author: this.get('author'),
       question: this.get('question'),
     };
     this.set('addNewCategory', false);
     this.sendAction('saveCategory2', params);
   }
 }
});

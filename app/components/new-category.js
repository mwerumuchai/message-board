import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

   saveCategory() {
     var params = {
       categoryname: this.get('categoryname')? this.get('categoryname'): null,
       author: this.get('author')? this.get('author'): null,
       question: this.get('question')? this.get('question'): null
     };
     this.set('addNewCategory', false);
     this.sendAction('saveCategory', params);
   }
 }
});

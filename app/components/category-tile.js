import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateCategoryForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(category, params) {
      this.sendAction('update', category, params);
    },
  }
});

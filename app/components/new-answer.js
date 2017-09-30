import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        category: this.get('category')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('user', '');
      this.set('content', '');

    }
  }
});

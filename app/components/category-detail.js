import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('category.answers', 'sortBy'),

  actions: {
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('answer.user', 'answer.content', function() {
    return this.get('answer.user') + ' - ' + this.get('answer.content')
  }),

  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete your answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});

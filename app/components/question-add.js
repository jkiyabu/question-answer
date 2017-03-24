import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
      };
      this.set('addQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});

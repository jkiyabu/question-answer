import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateFormShow() {
      this.set('updateFormShow', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('updateFormShow', false);
      this.sendAction('update', question, params);
    }
  }
});

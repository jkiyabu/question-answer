import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});

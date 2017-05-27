Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'upvote btn-primary upvotable glyphicon-thumbs-up';
    } else {
      return 'unvote glyphicon-thumbs-down';
    }
  }
});

Template.postItem.events({
  'click .upvote': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },
  'click .unvote': function(e) {
    e.preventDefault();
    Meteor.call('unvote', this._id);
  }
});

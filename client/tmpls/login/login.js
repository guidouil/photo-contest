Template.login.events({
  "click [data-action=logout]": function(e, t){
    e.preventDefault();
    Meteor.logout();
  }
});

Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  trackPageView: true
});

Router.route('/', {
  name: 'home',
  subscriptions: function() {
    Meteor.subscribe('uploads');
  }
});
Router.route('/login', {
  name: 'login'
});

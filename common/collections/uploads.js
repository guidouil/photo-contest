Uploads = new Mongo.Collection('uploads');

Uploads.allow({
  insert: function (userId, doc) {
    return ( userId && doc.owner === userId );
  },
  update: function (userId, doc, fields, modifier) {
    return ( userId && doc.owner === userId );
  },
  remove: function (userId, doc) {
    return ( userId && (doc.owner === userId || Roles.userIsInRole(userId, 'admin')) );
  },
  fetch: ['owner']
});

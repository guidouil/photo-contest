Uploader.finished = function(index, file) {
  if (Meteor.userId()) {
    file.owner = Meteor.userId();
    console.log(file);
    Uploads.insert(file);
  }
};

Template.home.helpers({
  myUpload: function () {
    if (Meteor.userId()) {
      return Uploads.findOne({owner: Meteor.userId()});
    }
  },
  cropIt: function () {
    console.log(this);
  }
});


Template.home.rendered = function(){
  if ($('#myUpload')) {
    $('#myUpload').cropper({
      aspectRatio: 1 / 1,
      autoCropArea: 0.65
    });
  }
};

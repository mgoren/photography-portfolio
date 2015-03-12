app.GalleryRoute = Ember.Route.extend({
  model: function(params) {
    return galleries.findBy('id', params.gallery_id);
  }
});

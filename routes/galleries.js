app.GalleriesRoute = Ember.Route.extend({
  controllerName: 'galleries',
  renderTemplate: function() {
    this.render('galleries');
  },
  model: function() {
    return galleries;
  }
});

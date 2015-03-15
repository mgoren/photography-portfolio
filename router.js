app.Router.map(function() {
  this.resource('galleries', {path: '/'});
  this.resource('gallery', {path:'/galleries/:gallery_id'});
  this.resource('about');
  this.resource('web');
});

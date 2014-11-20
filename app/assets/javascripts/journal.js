window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Journal.Routers.PostRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});

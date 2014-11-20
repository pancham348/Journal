(function(){
  if(typeof window.Journal === "undefined"){
    window.Journal = {};
  }
  var Journal = window.Journal
  
  Journal.Models.Post = Backbone.Model.extend({
    urlRoot: '/posts'
  })
})();
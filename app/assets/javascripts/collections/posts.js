Journal.Collections.Posts = Backbone.Collection.extend({
  model: Journal.Models.Post,
  url: '/posts',
  
  getOrFetch: function (id) {
    var post = this.get(id);
    if(post){
      post.fetch();
      return post;
    }else{
      var model = new Journal.Models.Post({id: id});
      model.fetch();
      return model;
    }
  },
});

Journal.posts = new Journal.Collections.Posts();
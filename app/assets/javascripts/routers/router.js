Journal.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow",
    "posts/:id/edit" : "postEdit",
    "posts" : "postNew"
  },
  
  initialize: function () {
    this.$el = $("#content-div");
    this.$side = $("#sidebar")
    //$("#sidebar").html(this.postsIndex());
  },
  
  postsIndex: function () {
    // var newCollection = new Journal.Collections.Posts();
    var newView = new Journal.Views.Posts({
      collection: Journal.posts
    });
    this.$el.html(newView.$el);
    this.$side.html(newView.$el);
    Journal.posts.fetch();
  },
  
  postsShow: function (id) {
    // var post = new Journal.Model.Post({id: id});
    var post = Journal.posts.getOrFetch(id);
    var postView = new Journal.Views.Post({
      model: post
    })
    
    // var indexView = new Journal.Views.Posts({
//       collection: Journal.posts
//     });
    //postView.render();
    // debugger
    this.$el.html(postView.$el);
    
  },
  
  postEdit: function (id) {
    var post = Journal.posts.getOrFetch(id);
    var editView = new Journal.Views.PostForm({
      model: post
    });
    this.$el.html(editView.render().$el);
  },
  
  postNew: function () {
    var post = new Journal.Models.Post();
    var newView = new Journal.Views.PostForm({
      model: post
    });
    this.$el.html(newView.render().$el);
  }
})
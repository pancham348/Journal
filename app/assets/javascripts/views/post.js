
Journal.Views.Posts = Backbone.View.extend({
  events: {
    "click button.delete-post": "deletePost"
  },
    
  template: JST["index_template"],
    
  initialize: function () {
    this.listenTo(
      this.collection,
      'sync remove change:title reset', 
      this.render
    );
  },
    
  render: function () {
    console.log('rendered Index');
    
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },
    
  deletePost: function (event) {
    var id = $(event.currentTarget).data("id");
    var post = this.collection.get(id);
    // this.collection.remove(post);
    post.destroy();
  }
     
    
})

Journal.Views.Post = Backbone.View.extend({
  template: JST["post_template"],
  
  initialize: function () {
    this.listenTo(
      this.model, 
      'sync remove', 
      this.render
    );
  },
  
  render: function(){
    var renderedPost = this.template({post: this.model});
    this.$el.html(renderedPost);
    return this;
  }
  
})

Journal.Views.PostForm = Backbone.View.extend({
  events: {
    "submit #edit" : "editPost" 
  },

  template: JST["post_form"],
  
  initialize: function () {
    this.listenTo(
      this.model,
      'sync',
      this.render
    );
  },
  
  render: function () {
    var renderForm = this.template({
      post: this.model
    });
    this.$el.html(renderForm);
    return this;
  },
  
  editPost: function(event) {
    var id = $(event.currentTarget).data("id");
    var post = Journal.posts.get(id);
    var formData = $(this).serializeJSON();
    
    this.model.save(formData, {
      success: function () {
        Backbone.history.navigate('...')
      }
    });
  }
})
(function($) {
  
  // 'window' allows the model to be available externally
  window.Album = Backbone.Model.extend({
    
    isFirstTrack: function(index) {
      return index == 0;
    },
    
    isLastTrack: function(index) {
      return index >= this.get('tracks').length - 1;
    },
    
    trackUrlAtIndex: function(index) {
      if (this.get('tracks').length >= index) {
        return this.get('tracks')[index].url;
      }
      return null;
    }
    
  });
  
  window.AlbumView = Backbone.View.extend({
    tagName: 'li',
    className: 'album',
    // id, el(overall element represented by this view)
    
    initialize: function() {
      // 'bindAll' permanently associates methods with a specific object
      _.bindAll(this, 'render');
      
      // change event only fires for attributes set directly with set
      this.model.bind('change', this.render);
      this.template = _.template($('#album-template').html());
    },
    
    render: function() {
      var renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      
      // returns self so that multiple calls can be made to render
      return this
    }
  });
  
  // get(key)
  // set({ key:value })
  // isNew()
  // toJSON()
  
})(jQuery);

32 31

// Server-Based Controller
//   -Act on user input: GET, POST
//   -Render model date to templates
//   -Send content back to browser

// Backbone View
//   -Act on user input: click, drag
//   -Render model date to templates
//   -Add content to current document


// See sinonjs.org for full-featured mocks, stubs, and fake servers.

function Qux(target) {
  this.target = target;
  this.initialize();
}

Qux.prototype = {
  initialize: function() {
    this.bind();
  },

  bind: function() {
    var that = this;
    this.target.observe("click", function() {
      new Ajax.Updater('foo_links', that.url(), {
        method: 'get',
        evalScripts : true
      });
      that.setCurrentBar();
      return false;
    });
  },

  setCurrentBar: function() {
    set_current_bar('Baz', this.id(), this.target.readAttribute('data-magic'));
  },

  id: function() {
    return this.target.readAttribute('data-id');
  },

  url: function() {
    return ('/qux/' + this.target.readAttribute('data-qux-id') + '/foo_links/' + this.id() + '?kind=Baz');
  }
}

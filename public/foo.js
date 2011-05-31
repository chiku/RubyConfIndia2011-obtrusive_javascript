function Foo(targetSelector) {
  this.target = $$(targetSelector);
  this.initialize();
}

Foo.prototype = {
  initialize: function() {
    this.quxes = this.target.map(function(link) {
      return new Qux(link);
    });
  }
}

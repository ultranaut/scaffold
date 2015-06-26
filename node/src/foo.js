'use strict';

(function () {

  var root = this;

  function foo(bar) {
    return bar;
  }

  // export as a Node module if we're in that environment
  // otherwise set it as a global object (function, whatever)
  if (typeof module !== 'undefined' &&
      typeof module.exports !== 'undefined') {
    module.exports = foo;
  }
  else {
    root.foo = foo;
  }

}).call(this);

module.exports = function () {
  var program;
  return {
    parse: function(program) {
      program = program;
      var p = new Promise(function(resolve, reject) {
        resolve(program)
      });
      return p;
    };
  }
};

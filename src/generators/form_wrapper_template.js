var fs = require('../util/fs');
var inflector = require('../util/inflector');

module.exports = function(resource) {
  var resourceName = inflector.underscore(resource);
  fs.writeTemplate('form_wrapper_template', resourceName);
};

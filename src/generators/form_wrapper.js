var fs = require('../util/fs');
var inflector = require('../util/inflector');
var msg = require('../util/message');

module.exports = function(resource) {
  var resourceName = inflector.dasherize(resource);
  resourceName = inflector.underscore(resource) + '_form_wrapper';
  var templateName = 'wrappers/' + inflector.dasherize(resource);
  fs.writeGenerator('form_wrapper', resourceName, {
    objectName: resource,
  });
  fs.writeFormWrapperTemplate(templateName);
};

const schema = require('../../../../../schema/config/settings');

module.exports = (req, res, config) => {

  var errors = [];

  var result = schema.validate(config);

  if ("error" in result) {
    errors.push(result.error.message)
  };

  req.errors = errors;

  if (errors.length > 0) {
    
    return false;

  } else {

    return result.value

  }

}
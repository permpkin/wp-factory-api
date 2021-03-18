const Joi = require('joi');

const schema = Joi.object({
  
  key: Joi.string().required(),
  name: Joi.string().required(),
  url: Joi.string(),
  "@config": Joi.array().items(require('./config/config'))

})

module.exports = schema
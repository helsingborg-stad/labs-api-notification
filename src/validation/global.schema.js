const Joi = require('@hapi/joi');

// Write all your general Joi-specifications here so they can be imported to all schemas.
const id = Joi.string().min(5).max(24);
const message = Joi.string().min(10).max(1000);

module.exports = {
  id,
  message,
};

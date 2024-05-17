const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEnquiry = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    contact: Joi.string().required(),
    message: Joi.string().required(),
    userId: Joi.string().custom(objectId),
  }).unknown(),
};

module.exports = {
    createEnquiry,
}
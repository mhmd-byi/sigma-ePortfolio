const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createResume = {
  body: Joi.object().keys({
    data: Joi.object().keys({
      address: Joi.string().required(),
      customDomain: Joi.string(),
      about: Joi.string().required(),
      projectDescription: Joi.string().required(),
      projectName: Joi.string().required(),
      skills: Joi.string().required(),
      languages: Joi.string().required(),
      interest: Joi.string().required(),
      course: Joi.string().required(),
      year: Joi.number().required(),
      percentage: Joi.number().required(),
      jobTitle: Joi.string(),
      companyName: Joi.string(),
      workingYear: Joi.number(),
      details: Joi.string(),
      bannerPhoto: Joi.string().optional(),
      profilePhoto: Joi.string().optional(),
      theme: Joi.string().optional(),
      user: Joi.string().custom(objectId),
    }),
  }),
};

const getResumes = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getResume = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateResume = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      address: Joi.string().required(),
      customDomain: Joi.string().required(),
      about: Joi.string().required(),
      projectDescription: Joi.string().required(),
      projectName: Joi.string().required(),
      skills: Joi.string().required(),
      languages: Joi.string().required(),
      interest: Joi.string().required(),
      course: Joi.string().required(),
      year: Joi.number().required(),
      percentage: Joi.number().required(),
      jobTitle: Joi.string(),
      companyName: Joi.string(),
      workingYear: Joi.number(),
      details: Joi.string(),
    })
    .min(1),
};

const deleteResume = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createResume,
  getResumes,
  getResume,
  updateResume,
  deleteResume,
};

const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPortfolio = {
  body: Joi.object().keys({
    profilePhoto: Joi.string(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    customDomain: Joi.string(),
    about: Joi.string().required(),
    designation: Joi.string().required(),
    companyName: Joi.string().required(),
    linkedInProfileUrl: Joi.string(),
    facebookInProfileUrl: Joi.string(),
    instagramProfileUrl: Joi.string(),
    twitterProfileUrl: Joi.string(),
    theme: Joi.string().required(),
    serviceOneImage: Joi.string().required(),
    serviceOneName: Joi.string().required(),
    serviceOneDescription: Joi.string().required(),
    serviceOnePrice: Joi.string().required(),
    serviceTwoImage: Joi.string(),
    serviceTwoName: Joi.string(),
    serviceTwoDescription: Joi.string(),
    serviceTwoPrice: Joi.string(),
    serviceThreeImage: Joi.string(),
    serviceThreeName: Joi.string(),
    serviceThreeDescription: Joi.string(),
    serviceThreePrice: Joi.string(),
    videos: Joi.array().items(Joi.string()),
    galleryImages: Joi.array().items(Joi.string()),
    googlePayUPIId: Joi.string(),
    phonePayUPIId: Joi.string(),
    paytmUPIId: Joi.string(),
    amazonPayUPIId: Joi.string(),
    user: Joi.string().custom(objectId),
    // details: Joi.string(),
    // bannerPhoto: Joi.string().optional(),
    // userCompanyProfile: Joi.string(),
    // universityName: Joi.string(),
  }).unknown(),
};

const getPortfolios = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPortfolio = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updatePortfolio = {
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

const deletePortfolio = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPortfolio,
  getPortfolios,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
};

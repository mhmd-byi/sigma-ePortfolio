const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const portfolioSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    customDomain: {
        type: String,
        trim: true,
    },
    aboutMe: {
        type: String,
        trim: true,
    },
    projectDescription: {
        type: String,
        trim: true,
    },
    projectName: {
        type: String,
        trim: true,
    },
    skills: {
        type: [String],
        trim: true,
    },
    techSkills: {
        type: [String],
        trim: true,
    },
    courseName: {
        type: String,
        trim: true,
        required: true,
    },
    courseStartYear: {
        type: String,
        trim: true,
        required: true,
    },
    courseEndYear: {
        type: String,
        trim: true,
        required: true,
    },
    percentage: {
        type: String,
        trim: true,
    },
    companyName: {
        type: String,
        trim: true,
    },
    jobTitle: {
        type: String,
        trim: true,
    },
    workingStartYear: {
        type: String,
        trim: true,
    },
    workingEndYear: {
        type: String,
        trim: true,
    },
    details: {
        type: String,
        trim: true,
    },
    bannerPhoto: {
        type: String,
        trim: true,
    },
    introVideo: {
        type: String,
    },
    profilePhoto: {
        type: String,
        trim: true,
    },
    theme: {
        type: String,
        trim: true,
        required: true,
    },
    linkedInProfileUrl: {
        type: String,
        trim: true,
        required: true,
    },
    achievements: {
        type: [String],
    },
    certificate: {
        type: [String],
    },
    userCompanyProfile: {
        type: String,
    },
    universityName: {
        type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
portfolioSchema.plugin(toJSON);
portfolioSchema.plugin(paginate);

/**
 * @typedef Portfolio
 */
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;

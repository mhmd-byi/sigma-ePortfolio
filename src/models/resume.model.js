const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const resumeSchema = mongoose.Schema(
  {
    address: {
        type: String,
        required: true,
        trim: true,
    },
    customDomain: {
        type: String,
        trim: true,
    },
    about: {
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
        type: String,
        trim: true,
    },
    languages: {
        type: String,
        trim: true,
    },
    interest: {
        type: String,
        trim: true,
    },
    course: {
        type: String,
        trim: true,
    },
    year: {
        type: String,
        trim: true,
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
    workingYear: {
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
    profilePhoto: {
        type: String,
        trim: true,
    },
    theme: {
        type: String,
        trim: true,
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
resumeSchema.plugin(toJSON);
resumeSchema.plugin(paginate);

/**
 * @typedef Resume
 */
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;

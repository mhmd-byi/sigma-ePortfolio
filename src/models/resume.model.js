const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const resumeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[0-9]{10}$/)) {
          throw new Error('Invalid phone number');
        }
      },
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    jobTitle: {
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

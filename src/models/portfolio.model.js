const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const { required } = require('joi');

const portfolioSchema = mongoose.Schema(
  {
    profilePhoto: {
      type: String,
      trim: true,
    },
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
      required: true,
    },
    about: {
      type: String,
      trim: true,
      required: true,
    },
    designation: {
      type: String,
      trim: true,
      required: true,
    },
    companyName: {
      type: String,
      trim: true,
      required: true,
    },
    linkedInProfileUrl: {
      type: String,
      trim: true,
    },
    facebookInProfileUrl: {
      type: String,
      trim: true,
    },
    instagramProfileUrl: {
      type: String,
      trim: true,
    },
    twitterProfileUrl: {
      type: String,
      trim: true,
    },
    theme: {
      type: String,
      trim: true,
      required: true,
    },
    serviceOneImage: {
      type: String,
      trim: true,
      required: true,
    },
    serviceOneName: {
      type: String,
      trim: true,
      required: true,
    },
    serviceOneDescription: {
      type: String,
      trim: true,
      required: true,
    },
    serviceOnePrice: {
      type: String,
      trim: true,
      required: true,
    },
    serviceTwoName: {
      type: String,
      trim: true,
    },
    serviceTwoImage: {
      type: String,
      trim: true,
    },
    serviceTwoDescription: {
      type: String,
      trim: true,
    },
    serviceTwoPrice: {
      type: String,
      trim: true,
    },
    serviceThreeName: {
      type: String,
      trim: true,
    },
    serviceThreeImage: {
      type: String,
      trim: true,
    },
    serviceThreeDescription: {
      type: String,
      trim: true,
    },
    serviceThreePrice: {
      type: String,
      trim: true,
    },
    googlePayUPIId: {
      type: String,
      trim: true,
    },
    phonePayUPIId: {
      type: String,
      trim: true,
    },
    paytmUPIId: {
      type: String,
      trim: true,
    },
    amazonPayUPIId: {
      type: String,
      trim: true,
    },
    videos: {
      type: [String],
    },
    galleryImages: {
      type: [String],
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

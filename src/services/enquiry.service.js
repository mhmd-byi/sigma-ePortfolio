const { Enquiry } = require('../models');

/**
 * Create a enquiry
 * @param {Object} enquiryBody
 * @returns {Promise<Enquiry>}
 */
const createEnquiry = async (data) => {
  try {
    return Enquiry.create(data);
  } catch (e) {
    return e;
  }
};

/**
 * Get enquiry by user id
 * @param {ObjectId} userId
 * @returns {Promise<Enquiry>}
 */
const getEnquiryByUserId = async (userId) => {
  return Enquiry.find({ userId });
};

module.exports = {
    createEnquiry,
    getEnquiryByUserId,
};

const httpStatus = require('http-status');
const { Resume } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a resume
 * @param {Object} resumeBody
 * @returns {Promise<Resume>}
 */
const createResume = async (resumeBody) => {
  return Resume.create(resumeBody);
};

/**
 * Query for resumes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryResumes = async (filter, options) => {
  const resumes = await Resume.paginate(filter, options);
  return resumes;
};

/**
 * Get resume by id
 * @param {ObjectId} id
 * @returns {Promise<Resume>}
 */
const getResumeById = async (id) => {
  return Resume.findById(id);
};

/**
 * Get resume by email
 * @param {string} email
 * @returns {Promise<Resume>}
 */
const getResumeByUserEmail = async (email) => {
  return Resume.findOne({ email });
};

/**
 * Update resume by id
 * @param {ObjectId} userEmail
 * @param {Object} updateBody
 * @returns {Promise<Resume>}
 */
const updateResumeById = async (userEmail, updateBody) => {
  const resume = await getResumeByUserEmail(userEmail);
  if (!resume) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Resume not found');
  }
  Object.assign(resume, updateBody);
  await resume.save();
  return resume;
};

/**
 * Delete resume by id
 * @param {ObjectId} resumeId
 * @returns {Promise<Resume>}
 */
const deleteResumeById = async (resumeId) => {
  const resume = await Resume.findById(resumeId);
  if (!resume) {
    throw new ApiError(httpStatus.NOT_FOUND, 'resume not found');
  }
  await resume.remove();
  return resume;
};

module.exports = {
  createResume,
  queryResumes,
  getResumeById,
  getResumeByUserEmail,
  updateResumeById,
  deleteResumeById,
};

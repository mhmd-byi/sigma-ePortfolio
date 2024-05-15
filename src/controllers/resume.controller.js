const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { resumeService } = require('../services');

const createResume = catchAsync(async (req, res) => {
  console.log('this is req', req)
  const resume = await resumeService.createResume(req.body);
  res.status(httpStatus.CREATED).send(resume);
});

const getResumes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await resumeService.queryResumes(filter, options);
  res.send(result);
});

const getResume = catchAsync(async (req, res) => {
  const resume = await resumeService.getResumeById(req.params.resumeId);
  if (!resume) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Resume not found');
  }
  res.send(resume);
});

const getResumeByUserId = async (req, res) => {
  const resume = await resumeService.getResumeByUserId(req.params.userId);
  if (!resume) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Resume not found with following user id');
  }
  res.send(resume);
};

const updateResume = catchAsync(async (req, res) => {
  const resume = await resumeService.updateResumeById(req.params.resumeId, req.body);
  res.send(resume);
});

const deleteResume = catchAsync(async (req, res) => {
  await resumeService.deleteResumeById(req.params.resumeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createResume,
  getResumes,
  getResume,
  updateResume,
  deleteResume,
  getResumeByUserId,
};

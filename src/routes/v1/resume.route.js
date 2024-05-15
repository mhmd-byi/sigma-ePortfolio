const express = require('express');
const validate = require('../../middlewares/validate');
const resumeValidation = require('../../validations/resume.validation');
const resumeController = require('../../controllers/resume.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(resumeValidation.createResume), resumeController.createResume)
  .get(validate(resumeValidation.getResumes), resumeController.getResumes)
  .get(resumeController.getResumeByUserId)
  .get(validate(resumeValidation.getResumeEmail), resumeController.getResumeByEmail);

router
  .route('/:resumeId')
  .get(validate(resumeValidation.getResume), resumeController.getResume)
  .patch(validate(resumeValidation.updateResume), resumeController.updateResume)
  .delete(validate(resumeValidation.deleteResume), resumeController.deleteResume);

router
  .route('/resume-user-id/:userId')
  .get(resumeController.getResumeByUserId);

module.exports = router;

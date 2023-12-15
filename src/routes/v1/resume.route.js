const express = require('express');
const validate = require('../../middlewares/validate');
const resumeValidation = require('../../validations/resume.validation');
const resumeController = require('../../controllers/resume.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(resumeValidation.createUser), resumeController.createResume)
  .get(validate(resumeValidation.getUsers), resumeController.getResumes);

router
  .route('/:resumeId')
  .get(validate(resumeValidation.getUser), resumeController.getResume)
  .patch(validate(resumeValidation.updateUser), resumeController.updateResume)
  .delete(validate(resumeValidation.deleteUser), resumeController.deleteResume);

module.exports = router;

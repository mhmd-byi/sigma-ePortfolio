const express = require('express');
const { enquiryController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { enquiryValidation } = require('../../validations');

const router = express.Router();

router
    .route('/')
    .post(validate(enquiryValidation.createEnquiry), enquiryController.createEnquiry);

router
  .route('/:userId')
  .get(enquiryController.getEnquiryByUserId)

module.exports = router;
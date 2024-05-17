const httpStatus = require('http-status');
const { EnquiryService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createEnquiry = catchAsync(async (req, res) => {
  const enquiry = await EnquiryService.createEnquiry(req.body);
  res.status(httpStatus.CREATED).send(enquiry);
});

const getEnquiryByUserId = catchAsync(async (req, res) => {
  const enquiry = await EnquiryService.getEnquiryByUserId(req.params.userId);
  if (!enquiry) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Enquiry not found');
  }
  res.send(enquiry);
});


module.exports = {
    createEnquiry,
    getEnquiryByUserId,
  };

const express = require('express');
const validate = require('../../middlewares/validate');
const portfolioValidation = require('../../validations/portfolio.validation');
const portfolioController = require('../../controllers/portfolio.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(portfolioValidation.createPortfolio), portfolioController.createPortfolio)
  .get(validate(portfolioValidation.getPortfolios), portfolioController.getPortfolios);

router
  .route('/:portfolioId')
  .get(validate(portfolioValidation.getPortfolio), portfolioController.getPortfolio)
  .patch(validate(portfolioValidation.updatePortfolio), portfolioController.updatePortfolio)
  .delete(validate(portfolioValidation.deletePortfolio), portfolioController.deletePortfolio);

module.exports = router;

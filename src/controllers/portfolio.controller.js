const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { PortfolioService } = require('../services');

const createPortfolio = catchAsync(async (req, res) => {
  console.log('this is req', req)
  const portfolio = await PortfolioService.createPortfolio(req.body);
  res.status(httpStatus.CREATED).send(portfolio);
});

const getPortfolios = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await PortfolioService.queryPortfolio(filter, options);
  res.send(result);
});

const getPortfolio = catchAsync(async (req, res) => {
  const portfolio = await PortfolioService.getPortfolioById(req.params.portfolioId);
  if (!portfolio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Portfolio not found');
  }
  res.send(portfolio);
});

const updatePortfolio = catchAsync(async (req, res) => {
  const portfolio = await PortfolioService.updatePortfolioById(req.params.portfolioId, req.body);
  res.send(portfolio);
});

const deletePortfolio = catchAsync(async (req, res) => {
  await PortfolioService.deletePortfolioById(req.params.portfolioId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getPortfolioByUserId = catchAsync(async (req, res) => {
  const portfolio = await PortfolioService.getPortfolioByUserId(req.params.userId);
  if (!portfolio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Portfolio not found with following user id');
  }
  res.send(portfolio);
});

module.exports = {
  createPortfolio,
  getPortfolios,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  getPortfolioByUserId
};

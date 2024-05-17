const httpStatus = require('http-status');
const { Portfolio } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a portfolio
 * @param {Object} portfolioBody
 * @returns {Promise<Portfolio>}
 */
const createPortfolio = async (portfolioBody) => {
  return Portfolio.create(portfolioBody);
};

/**
 * Query for portfolio
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPortfolio = async (filter, options) => {
  const Portfolios = await Portfolio.paginate(filter, options);
  return Portfolios;
};

/**
 * Get portfolio by id
 * @param {ObjectId} id
 * @returns {Promise<Portfolio>}
 */
const getPortfolioById = async (id) => {
  return Portfolio.findById(id);
};

/**
 * Get portfolio by email
 * @param {string} email
 * @returns {Promise<Portfolio>}
 */
const getPortfolioByUserEmail = async (email) => {
  return Portfolio.findOne({ email });
};

/**
 * Update portfolio by id
 * @param {ObjectId} userEmail
 * @param {Object} updateBody
 * @returns {Promise<Portfolio>}
 */

const getPortfolioByUserId = async (userId) => {
  return Portfolio.findOne({ user: userId });
};
/**
 * Update resume by id
 * @param {ObjectId} userEmail
 * @param {Object} updateBody
 * @returns {Promise<Portfolio>}
 */

const updatePortfolioById = async (userEmail, updateBody) => {
  const portfolio = await getPortfolioByUserEmail(userEmail);
  if (!portfolio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Portfolio not found');
  }
  Object.assign(portfolio, updateBody);
  await portfolio.save();
  return portfolio;
};

/**
 * Delete portfolio by id
 * @param {ObjectId} portfolioId
 * @returns {Promise<Portfolio>}
 */
const deletePortfolioById = async (portfolioId) => {
  const portfolio = await Portfolio.findById(portfolioId);
  if (!portfolio) {
    throw new ApiError(httpStatus.NOT_FOUND, 'portfolio not found');
  }
  await portfolio.remove();
  return portfolio;
};

module.exports = {
  createPortfolio,
  queryPortfolio,
  getPortfolioById,
  getPortfolioByUserEmail,
  updatePortfolioById,
  deletePortfolioById,
  getPortfolioByUserId
};

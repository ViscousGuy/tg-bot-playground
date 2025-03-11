const apiClient = require("./apiClient");
const { API_URL } = require("../config/env");

async function getQuoteOfTheDay() {
  const response = await apiClient.get(API_URL);
  return response.data[0];
}

module.exports = { getQuoteOfTheDay };

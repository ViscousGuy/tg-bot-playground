const axios = require("axios");

module.exports = axios.create({
  headers: { "Content-Type": "application/json" },
});

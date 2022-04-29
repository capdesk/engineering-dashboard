const { createRequestHandler } = require("@remix-run/netlify");

module.exports = createRequestHandler({
  build: require("./_build")
});

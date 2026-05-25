// This file is the Vercel serverless function entry point.
// The actual handler is pre-bundled by esbuild into dist/server.js
// during the build step, which resolves all path aliases correctly.
module.exports = require("../dist/server.js");

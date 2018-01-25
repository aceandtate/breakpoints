const path = require("path");

const BUILD_DIR = path.join(__dirname, "../build");
const BREAKPOINTS = path.join(BUILD_DIR, "breakpoints.json");
const MEDIA = path.join(BUILD_DIR, "media.json");
const SIZES = path.join(BUILD_DIR, "sizes.json");

module.exports = {
  BUILD_DIR,
  BREAKPOINTS,
  MEDIA,
  SIZES
};

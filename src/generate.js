/* eslint-disable no-console */
const path = require("path");
const BUILD_DIR = path.join(__dirname, "../build");
const { writeJson } = require("./util");

const generators = ["rules", "breakpoints", "sizes"];

module.exports = function build(sizes) {
  console.log("-- Sizes being created:");
  console.log(JSON.stringify(sizes, null, 4), "\n");

  generators.forEach(generator => {
    const builderPath = path.resolve("generators", generator);
    const build = require(builderPath);
    const outputPath = path.resolve("build", `${generator}.json`);

    console.log(`-- Writing ${generator} json file to ${outputPath}`);
    writeJson(outputPath, build(sizes));
    console.log(`-- Complete\n`);
  });
};

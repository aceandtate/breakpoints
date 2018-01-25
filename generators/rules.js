const { flatMapKeys, mapBreakpoints, mediaRule } = require("../src/util");

module.exports = function build(sizes) {
  const breakpoints = mapBreakpoints(sizes);
  return flatMapKeys(breakpoints, (rule, key) => ({
    [key]: mediaRule(rule),
    [`${key}Min`]: mediaRule({ min: rule.min }),
    [`${key}Max`]: mediaRule({ max: rule.max })
  }));
};

import { flatMapKeys, mapBreakpoints, mediaRule } from "../util";

export default function build(sizes) {
  const breakpoints = mapBreakpoints(sizes);
  return flatMapKeys(breakpoints, (rule, key) => ({
    [key]: mediaRule(rule),
    [`${key}Min`]: mediaRule({ min: rule.min }),
    [`${key}Max`]: mediaRule({ max: rule.max })
  }));
};

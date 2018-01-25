const util = require("util");
const { writeFileSync } = require("fs");

function flattenObject(a, b) {
  return Object.assign({}, a, b);
}

// Maps an objects keys, similar to lodash.map collection mapping
function mapKeys(obj, fn) {
  return Object.keys(obj).map(key => fn(obj[key], key, obj));
}

// Flattens the result of a mapping the keys of an object
function flatMapKeys(obj, fn) {
  return mapKeys(obj, fn).reduce(flattenObject);
}

// Returns the max and min pair for a size
function getMinMax(size, prevSize) {
  return {
    min: prevSize ? prevSize + 1 : 0,
    max: size || undefined
  };
}

// Returns an object with keys referencing min - max pairs
function mapBreakpoints(sizes) {
  const sizesKeys = Object.keys(sizes);
  return sizesKeys
    .map((key, i) => {
      const size = sizes[key];
      const prevSizeKey = sizesKeys[i - 1];
      const prevSize = sizes[prevSizeKey];
      return {
        [key]: getMinMax(size, prevSize)
      };
    })
    .reduce(flattenObject);
}

// Converts a min-max pair into a media query style rule
function mediaRule({ min, max }) {
  const minRule = min && `(min-width: ${min}px)`;
  const maxRule = max && max !== Infinity && `(max-width: ${max}px)`;
  return [minRule, maxRule].filter(Boolean).join(" and ") || undefined;
}

// Writes an JSON object into a file
function writeJson(path, obj) {
  return writeFileSync(path, JSON.stringify(obj, null, 2), "utf8");
}

module.exports = {
  flatMapKeys,
  mapBreakpoints,
  mediaRule,
  writeJson
};

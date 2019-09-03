type Sizes = {
  [breakpointName: string]: number;
}

type MapperFn = (value: string, key: string, target: any) => any;

type MinMaxPair = {
  min?: number;
  max?: number;
}

function flattenObject(a: any, b: any) {
  return Object.assign({}, a, b);
}

// Maps an objects keys, similar to lodash.map collection mapping
function mapKeys(obj: any, fn: MapperFn) {
  return Object.keys(obj).map(key => fn(obj[key], key, obj));
}

// Returns the max and min pair for a size
function getMinMax(size: number, prevSize: number) {
  return {
    min: prevSize ? prevSize + 1 : 0,
    max: size || undefined
  };
}

// Returns an object with keys referencing min - max pairs
export function mapBreakpoints(sizes: Sizes) {
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

function isNumber(value?: number) {
  return typeof value === 'number';
}

// Converts a min-max pair into a media query style rule
export function mediaRule({ min, max }: MinMaxPair) {
  const minRule = isNumber(min) && `(min-width: ${min}px)`;
  const maxRule = isNumber(max) && max !== Infinity && `(max-width: ${max}px)`;
  return [minRule, maxRule].filter(Boolean).join(" and ") || undefined;
}

// Flattens the result of a mapping the keys of an object
export function flatMapKeys(obj: any, fn: MapperFn) {
  return mapKeys(obj, fn).reduce(flattenObject);
}

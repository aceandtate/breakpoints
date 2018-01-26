# @aceandtate/breakpoints

[![npm](https://img.shields.io/npm/v/@aceandtate/breakpoints.svg)](https://www.npmjs.com/package/@aceandtate/breakpoints)

Ace & Tate's website breakpoints

## Installation

```
$ npm install --save @aceandtate/breakpoints
```

## How does it work

This package exports various forms of breakpoints for use at [Ace &amp; Tate](https://www.aceandtate.com)

### Sizes

```js
import { sizes } from "@aceandtate/breakpoints";

/*
sizes = {
  "tiny": 540,
  "small": 768,
  "large": 1000,
  "xlarge": 1400,
  "xxlarge": null
}
*/
```

### Rules

```js
import { rules } from "@aceandtate/breakpoints";

/*
rules = {
  "tiny": "(max-width: 540px)",
  "tinyMax": "(max-width: 540px)",
  "small": "(min-width: 541px) and (max-width: 768px)",
  "smallMin": "(min-width: 541px)",
  "smallMax": "(max-width: 768px)",
  ... large, xlarge, xxlarge
}
*/
```

### Breakpoints

```js
import { breakpoints } from "@aceandtate/breakpoints";

/*
breakpoints = {
  "tiny": {
    "min": 0,
    "max": 540
  },
  "small": {
    "min": 541,
    "max": 768
  },
  "large": {
    "min": 769,
    "max": 1000
  },
  "xlarge": {
    "min": 1001,
    "max": 1400
  },
  "xxlarge": {
    "min": 1401
  }
}
*/
```

## Usage with Styled Components

```js
import styled from "styled-components";
import { tiny, smallMin } from "@aceandtate/breakpoints/rules";

const myComponent = styled.div`
  @media ${tiny} {
    /* Show on mobile devices */
    width: 100%;
    margin: 10px;
  }
  @media ${smallMin} {
    /* Everything else */
    width: 400px;
    margin: 0 auto;
  }
`;
```

## Development

If you want to update or add breakpoints, you can do so in `./sizes.json`, and then run:

```
$ npm run generate
```

This will then update the files in `./build/` file accordingly. Note that this task is run automatically before publishing the package to NPM.

## Shoutouts

* https://github.com/Travix-International/travix-breakpoints

## License

MIT © [Ace & Tate](https://www.aceandtate.com)

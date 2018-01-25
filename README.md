# @aceandtate/breakpoints

Ace &amp; Tate's Breakpoints package

## How it works

This package exports various forms of breakpoints for use at Ace & Tate

### Rules

```js
import { rules } from "@aceandtate/breakpoints";
```

Exports CSS breakpoint values for various sizes.

## Installation

```
$ npm install --save @aceandtate/breakpoints
```

## Usage

### CommonJS

```js
import { rules, breakpoints } from "@aceandtate/breakpoints";

// `rules` is a flat Object of key/value pairs
// `breakpoints` is an object keyed by breakpoint sizes, with min-max pairs
```

You can also import them individually:

```js
import sizes from "@aceandtate/rules";
import breakpoints from "@aceandtate/breakpoints";
```

### Styled Components

```js
import { rules, sizes } from '@aceandtate/breakpoints';

const myComponent = styled.div`
  @media ${rules.tiny} {
    /* Show on mobile devices */
    width: 100%;
    margin: 10px;
  }
  @media ${rules.smallMin} {
    /* Everything else */
    width: 400px;
    margin: 0 auto;
  }
`;

## Development

If you want to update or add breakpoints, you can do so in `./sizes.json`, and then run:
```

$ npm run generate

```
This will then update the files in `./build/` file accordingly.

## License

MIT © [Ace & Tate](https://www.aceandtate.com)
```

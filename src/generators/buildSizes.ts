import { flatMapKeys, mapBreakpoints, mediaRule } from "../util";

export default function build(sizes) {
  flatMapKeys({'x': '1'}, () => {});
  return sizes;
}

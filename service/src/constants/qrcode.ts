import { Options } from "qr-code-styling/lib/types";
import { CONFIEL_IMAGE_AS_DATA_BASE_URI } from "./conFIEL";

export const QR_CODE_STYLING_OPTS: Options = {
  "dotsOptions": {
    "color": "#000000",
    "type": "dots"
  },
  "cornersSquareOptions": {
    "color": "#000000",
    "type": "square"
  },
  "cornersDotOptions": {
    "color": "#e53737",
    "type": "square"
  },
  "imageOptions": {
    "margin": 10
  },
  "image": CONFIEL_IMAGE_AS_DATA_BASE_URI
}
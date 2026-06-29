import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

import Favicon from '../assets/logo-upload/kbslogo.svg';
// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  favicon: Favicon,
  prerender: true,
  extends: [vikeReact],
} satisfies Config;


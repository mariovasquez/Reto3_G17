'use strict';

import header from "./modules/header.js";
import switcher from "./modules/switcher.js";

const documentReady = () => {
  header();
  switcher();
};

document.addEventListener('DOMContentLoaded', documentReady);
'use strict';
import counter from "./modules/counter.js";
import header from "./modules/header.js";
import switcher from "./modules/switcher.js";

const documentReady = () => {
  counter();
  header();
  switcher();
};

document.addEventListener('DOMContentLoaded', documentReady);
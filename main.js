/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/4/2;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n\ndiv.sidebar * {\n  font-size: 19px;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-list {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.task-edit {\n  margin-top: 4px;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  font-family: halyard-display, sans-serif;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.add {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.add:hover,\n.add:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.add:hover {\n  transform: translateY(-1px);\n}\n\n.add:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  outline: 0;\n  border: 0;\n  color: white;\n  background: #000rgb(11, 0, 0);\n  transition: 0.3s;\n}\n.btn:hover {\n  background: #000000;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 10px 45px;\n  display: grid;\n  grid-template-columns: 30px 75% 20%;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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UAAU;IACV,kCAAkC;EACpC;EACA;IACE,UAAU;IACV,+BAA+B;EACjC;AACF;AACA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA,qBAAqB;;AAErB;EACE,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;EACnB,qBAAqB;EACrB,mCAAmC;EACnC,kBAAkB;EAClB,8CAA8C;EAC9C,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;;EAEE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,wBAAwB;EACxB,kBAAkB;EAClB,gCAAgC;AAClC;AACA;EACE,WAAW;EACX,UAAU;EACV,QAAQ;EACR,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;AACA;EACE,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV;gEAC4D;EAC9D;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;6EACyE;EAC3E;AACF;;AAEA,qCAAqC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/4/2;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n\ndiv.sidebar * {\n  font-size: 19px;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-list {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.task-edit {\n  margin-top: 4px;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  font-family: halyard-display, sans-serif;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.add {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.add:hover,\n.add:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.add:hover {\n  transform: translateY(-1px);\n}\n\n.add:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  outline: 0;\n  border: 0;\n  color: white;\n  background: #000rgb(11, 0, 0);\n  transition: 0.3s;\n}\n.btn:hover {\n  background: #000000;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 10px 45px;\n  display: grid;\n  grid-template-columns: 30px 75% 20%;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");


let createTask = (container) => {
  let task = document.createElement("div");
  task.classList.add("task");

  container.appendChild(task);

  let checkbox = document.createElement("input");
  checkbox.id = 0;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", 0);

  task.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", 0);
  label.innerText = "walk the dog";
  task.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let editSVG = new Image();
  editSVG.src = _edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editSVG.setAttribute("style", "width: 15%;");
  editSVG.classList.add("task-edi");
  taskInfo.appendChild(editSVG);

  let taskTime = document.createElement("div");
  taskTime.classList.add("task-time");
  taskTime.innerText = "2 days";
  taskInfo.appendChild(taskTime);

  container.appendChild(task);
};



// let createTask = (container, object) => {
//   let task = document.createElement("div");
//   task.classList.add("task");
//
//   container.appendChild(task);
//
//   let checkbox = document.createElement("input");
//   checkbox.id = object.id;
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.setAttribute("value", object.id);
//
//   task.appendChild(checkbox);
//
//   let label = document.createElement("label");
//   label.setAttribute("for", object.id);
//   label.innerText = object.title;
//   task.appendChild(label);
//
//   let taskInfo = document.createElement("div");
//   taskInfo.classList.add("task-info");
//   task.appendChild(taskInfo);
//
//   let editSVG = new Image();
//   editSVG.src = edit;
//   editSVG.setAttribute("style", "width: 15%;");
//   editSVG.classList.add("task-edi");
//   taskInfo.appendChild(editSVG);
//
//   let taskTime = document.createElement("div");
//   taskTime.classList.add("task-time");
//   taskTime.innerText = "2days";
//   taskInfo.appendChild(taskTime);
// };


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.svg */ "./src/edit.svg");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");



let initialize = (container) => {
  headers(container);
  sidebars(container);
  tasks(container);
  taskMaker(container);
};

//Create header.
let headers = (container) => {
  let heading = document.createElement("div");
  let headingStatus = document.createElement("div");
  let headingTitle = document.createElement("div");

  heading.classList.add("heading");
  headingStatus.classList.add("heading", "heading-status");
  headingTitle.classList.add("heading", "heading-title");

  headingStatus.innerText = "nothing ";
  headingTitle.innerText = "to do";
  // append children to parent, and append parent to container
  heading.append(headingStatus, headingTitle);
  container.append(heading);
};

//Create sidebar.
let sidebars = (container) => {
  let sidebar = document.createElement("div");
  let sidebarAll = document.createElement("button");
  let sidebarUnsorted = document.createElement("button");

  sidebar.classList.add("sidebar");
  sidebarAll.classList.add("link", "link--ersa");
  sidebarUnsorted.classList.add("link", "link--ersa");

  sidebarAll.id = "all";
  sidebarUnsorted.id = "unsorted";

  sidebarAll.innerText = "all tasks";
  sidebarUnsorted.innerText = "unsorted";

  sidebar.append(sidebarAll, sidebarUnsorted);
  container.appendChild(sidebar);

  let breakLine = document.createElement("hr");
  breakLine.setAttribute("style", "width:50%;text-align:left;margin-left:0");
  sidebar.appendChild(breakLine);

  let createProjectBtn = document.createElement("button");
  createProjectBtn.classList.add("create-project-btn");
  createProjectBtn.innerText = " create project";
  sidebar.appendChild(createProjectBtn);
};

//Create task container.
let tasks = (container) => {
  let tasklist = document.createElement("div");
  let button = document.createElement("div");
  let addButton = document.createElement("button");

  tasklist.classList.add("task-list");
  button.classList.add("button");
  addButton.classList.add("add");

  addButton.innerText = "+";

  button.appendChild(addButton);
  tasklist.appendChild(button);
  (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(tasklist);
  container.appendChild(tasklist);
};

//Create form to add to-do items
let taskMaker = (container) => {
  let formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  let form = document.createElement("form");
  form.id = "form";
  form.style.visibility = "hidden";

  let form__group = document.createElement("div");
  form__group.classList.add("form__group");

  let titleInput = document.createElement("input");
  titleInput.classList.add("form__input");
  {
    Object.assign(titleInput, {
      type: "text",
      placeholder: "title",
      id: "title",
      required: " ",
    });
  }

  let descriptionInput = document.createElement("input");
  descriptionInput.classList.add("form__input");
  Object.assign(descriptionInput, {
    type: "text",
    placeholder: "description",
    id: "description",
  });

  let notesInput = document.createElement("textarea");
  Object.assign(notesInput, {
    id: "notes",
    name: "notes",
    cols: "40",
    rows: "3",
    placeholder: "notes",
  });

  let selectInput = document.createElement("select");
  selectInput.id = "priority";
  selectInput.setAttribute("name", "priority");
  selectInput.options[selectInput.options.length] = new Option(
    "life or death",
    "life or death"
  );

  selectInput.options[selectInput.options.length] = new Option(
    "it can wait",
    "it can wait"
  );
  selectInput.options[selectInput.options.length] = new Option(
    "all nighter",
    "all nighter"
  );

  let dateInput = document.createElement("input");
  Object.assign(dateInput, {
    type: "date",
    name: "date",
    id: "date",
  });

  let btn = document.createElement("button");
  btn.innerText = "create task";

  form__group.append(
    titleInput,
    descriptionInput,
    notesInput,
    selectInput,
    dateInput,
    btn
  );
  form.appendChild(form__group);
  formContainer.appendChild(form);
  container.appendChild(formContainer);
};




/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
class toDo {
  constructor(form) {
    this.title = form.title.value;
    this.description = form.description.value;
    this.date = form.date.value;
    this.priority = form.priority.value;
    this.notes = form.notes.value;
    this.status = false;
  }

  todoList = {};

  set changeTitle(value) {
    this.title = value;
  }
  set changeDescription(value) {
    this.description = value;
  }
  set changeDate(value) {
    this.date = value;
  }
  set changePriority(value) {
    this.priority = value;
  }
  set changeNotes(value) {
    this.notes = value;
  }
}
//
// let example = new toDo(
//   "Take out the trash",
//   "Need to take out the trash so I get paid",
//   "12/01/2022",
//   "all nighter",
//   "do it quick, do it at night, just do it",
//   "uncomplete"
// );
//
// example.changeTitle = "Don't walk the dog";
// example.changeDueDate = "12/1/1";
//
// console.log(example);




/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ab4212bc8cd70eb5254.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");





(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.initialize)(document.body);

let todos = [];

let addBtn = document.querySelector(".add");
let form = document.getElementById("form");

addBtn.addEventListener("click", function () {
  form.style.visibility == "hidden"
    ? (form.style.visibility = "visible")
    : (form.style.visibility = "hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new _toDo__WEBPACK_IMPORTED_MODULE_2__.toDo(form);
  todos.push(r);
  console.log(todos);
});
// document.addEventListener("DOMContentLoaded", function () {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sU0FBUyxZQUFZLGFBQWEsTUFBTSxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLE1BQU0sbUNBQW1DLGNBQWMsZUFBZSxtQ0FBbUMsMkJBQTJCLHFDQUFxQyxpRUFBaUUsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0IsMkNBQTJDLDBDQUEwQyxHQUFHLFlBQVkseUJBQXlCLG9CQUFvQixrQkFBa0IsMEJBQTBCLHVCQUF1QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixrQkFBa0IsMkJBQTJCLG9CQUFvQix3QkFBd0IsZ0JBQWdCLDRCQUE0QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1QixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiw4QkFBOEIsd0JBQXdCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsdUJBQXVCLDJCQUEyQixpQ0FBaUMsR0FBRyxxR0FBcUcsb0JBQW9CLGlCQUFpQixpQkFBaUIsNEJBQTRCLG9CQUFvQiw0QkFBNEIsbUJBQW1CLDZDQUE2QyxrQkFBa0IsdUJBQXVCLDhCQUE4QixHQUFHLGdDQUFnQyxtQkFBbUIsZUFBZSx1QkFBdUIsOEJBQThCLEdBQUcsc0NBQXNDLHFCQUFxQixlQUFlLEdBQUcsK0JBQStCLGlCQUFpQixvQ0FBb0MsZ0NBQWdDLEdBQUcseUNBQXlDLGlCQUFpQiw0QkFBNEIsb0JBQW9CLG9CQUFvQix1QkFBdUIsd0JBQXdCLDZCQUE2QixpQkFBaUIsR0FBRyxrQ0FBa0MsdUJBQXVCLGdCQUFnQixnQkFBZ0IsNkJBQTZCLGNBQWMsWUFBWSx5QkFBeUIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0QixpQkFBaUIsb0JBQW9CLDZDQUE2Qyx3QkFBd0IscUJBQXFCLDhCQUE4QixHQUFHLHlCQUF5QixhQUFhLGdCQUFnQiwrQkFBK0IsZ0NBQWdDLDREQUE0RCxHQUFHLCtCQUErQiw2QkFBNkIsZ0NBQWdDLEdBQUcsc0JBQXNCLDBCQUEwQiw0REFBNEQsR0FBRyw0QkFBNEIsc0NBQXNDLEdBQUcsc0NBQXNDLDhCQUE4Qix5Q0FBeUMsMkJBQTJCLDRDQUE0QywyQkFBMkIsK0JBQStCLG9CQUFvQiw0R0FBNEcsb0JBQW9CLHFCQUFxQixtREFBbUQsMEJBQTBCLEdBQUcsNkJBQTZCLHNDQUFzQyw4Q0FBOEMsK0JBQStCLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLGlCQUFpQiw4QkFBOEIsc0NBQXNDLDhDQUE4QywrQkFBK0IsNkJBQTZCLEdBQUcsMENBQTBDLHVCQUF1QixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFNBQVMsZ0JBQWdCLGlCQUFpQix5QkFBeUIseUJBQXlCLHFCQUFxQixlQUFlLHdDQUF3QyxzREFBc0QsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxHQUFHLFlBQVkscUJBQXFCLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxlQUFlLGlDQUFpQyxlQUFlLG9DQUFvQyxHQUFHLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsY0FBYyxlQUFlLHFCQUFxQixvQkFBb0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsVUFBVSxtQkFBbUIsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsZUFBZSxjQUFjLGlCQUFpQixrQ0FBa0MscUJBQXFCLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxtQkFBbUIsaUJBQWlCLDhDQUE4QyxzQ0FBc0MsS0FBSyx5Q0FBeUMsa0RBQWtELDBDQUEwQyxLQUFLLGlDQUFpQyxpREFBaUQseUNBQXlDLEtBQUssR0FBRyxxQkFBcUIsUUFBUSxpQkFBaUIseUNBQXlDLEtBQUssVUFBVSxpQkFBaUIsc0NBQXNDLEtBQUssR0FBRyxtQkFBbUIsUUFBUSwrQkFBK0IsS0FBSyxTQUFTLGtDQUFrQyxLQUFLLFVBQVUsK0JBQStCLEtBQUssR0FBRyxxQ0FBcUMsZ0NBQWdDLG9CQUFvQixxQkFBcUIsd0JBQXdCLG1CQUFtQix1QkFBdUIsK0JBQStCLGtDQUFrQyx3QkFBd0IsMEJBQTBCLHdDQUF3Qyx1QkFBdUIsbURBQW1ELHVCQUF1QixrQkFBa0Isd0NBQXdDLHdCQUF3QixvQkFBb0IsR0FBRyxpQkFBaUIsdUJBQXVCLHVCQUF1QixvQkFBb0Isa0JBQWtCLHdCQUF3Qix1QkFBdUIsZ0NBQWdDLEdBQUcsNENBQTRDLGtCQUFrQix1QkFBdUIsR0FBRyx1QkFBdUIsZ0JBQWdCLGVBQWUsZ0JBQWdCLDZCQUE2Qix1QkFBdUIscUNBQXFDLEdBQUcscUJBQXFCLGdCQUFnQixlQUFlLGFBQWEsZ0JBQWdCLHVCQUF1QixHQUFHLGtDQUFrQyw2QkFBNkIsMEJBQTBCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGtCQUFrQixjQUFjLHVCQUF1QixvQkFBb0Isa0NBQWtDLGtCQUFrQix3QkFBd0IsR0FBRyxrRkFBa0Ysa0JBQWtCLHVCQUF1QixnQkFBZ0IsY0FBYyw2QkFBNkIsdUJBQXVCLEdBQUcsMENBQTBDLGVBQWUsZUFBZSxtQ0FBbUMsR0FBRyx5Q0FBeUMsZUFBZSxjQUFjLGtDQUFrQyxHQUFHLGtEQUFrRCwyQ0FBMkMsR0FBRyxpREFBaUQsMkNBQTJDLEdBQUcsa0RBQWtELDJCQUEyQiw0Q0FBNEMsR0FBRywwREFBMEQsZ0NBQWdDLHdDQUF3QyxHQUFHLHlEQUF5RCxnREFBZ0QsR0FBRyxxQkFBcUIsU0FBUyx3QkFBd0IseUJBQXlCLEtBQUssVUFBVSx5QkFBeUIsS0FBSyxHQUFHLG9CQUFvQixTQUFTLGtCQUFrQixnQkFBZ0IsS0FBSyxVQUFVLGtCQUFrQixpQkFBaUIsc0JBQXNCLEtBQUssR0FBRyx1QkFBdUIsUUFBUSxpQkFBaUIsZ0JBQWdCLDJCQUEyQixLQUFLLFNBQVMsaUJBQWlCLGdCQUFnQiwyQkFBMkIsS0FBSyxTQUFTLGlCQUFpQixlQUFlLCtCQUErQixLQUFLLFVBQVUsaUJBQWlCLGVBQWUsK0JBQStCLEtBQUssR0FBRyx1QkFBdUIsUUFBUSxpQkFBaUIsZ0JBQWdCLDJCQUEyQixLQUFLLFNBQVMsaUJBQWlCLGdCQUFnQiwyQkFBMkIsS0FBSyxTQUFTLGlCQUFpQixlQUFlLGdDQUFnQyxLQUFLLFVBQVUsa0JBQWtCLGVBQWUsZ0NBQWdDLEtBQUssR0FBRyx1QkFBdUIsUUFBUSxpQkFBaUIsZ0pBQWdKLEtBQUssU0FBUyxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQix5S0FBeUssS0FBSyxHQUFHLCtEQUErRDtBQUN6K3NCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2Y4Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzQ0FBSTtBQUNwQiw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEU4QjtBQUNZOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUMxSnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUVrQjtBQUNWOztBQUU5QixxREFBVTs7QUFFVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsY0FBYyx1Q0FBSTtBQUNsQjtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggOTAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMWZyIDFmcjtcXG59XFxuLmhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvNC8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnNpZGViYXIgKiB7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNS8zO1xcbiAgYm9yZGVyOiAxMHB4O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XFxufVxcblxcbi8qIGNyZWF0ZS1wcm9qZWN0LWJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBjdWF0cm9mZW5kZXIgKi9cXG4uY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzc2N2I4MDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMTA3LCAxNzksIDAuMik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXI6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxufVxcblxcbi8qIHNpZGViYXIgbGluayBzdHlsaW5nICovXFxuXFxuLmxpbmsge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ubGluazo6YmVmb3JlLFxcbi5saW5rOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgLyogc2hvdyBieSBkZWZhdWx0ICovXFxufVxcblxcbi5saW5rLS1lcnNhIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoYWx5YXJkLWRpc3BsYXksIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1pbmRlbnQ6IDFweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saW5rLS1lcnNhOjpiZWZvcmUge1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxufVxcblxcbi8qIGFkZCBidXR0b24gc3R5bGluZyAqL1xcblxcbi5hZGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyJSkgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxcmVtIC0gMXB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLmFkZDpob3ZlcixcXG4uYWRkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYWRkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLyogZm9ybSBzdHlsZXMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLzMvNC80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwMHB4LCAwKTtcXG4gIGFuaW1hdGlvbjogYXJyaXZlIDUwMG1zIGVhc2UtaW4tb3V0IDAuOXMgZm9yd2FyZHM7XFxufVxcblxcbi5mb3JtX19ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuI25vdGVzIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuI2RhdGUge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8zO1xcbn1cXG5cXG4uZm9ybS0tbm8ge1xcbiAgYW5pbWF0aW9uOiBOTyAxcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLmZvcm1fX2lucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzAwMHJnYigxMSwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgTk8ge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyaXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MHB4LCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIG1vdmUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4vKiBjaGVja2xpc3Qgc3R5bGVzICovXFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgLS10ZXh0OiAjNDE0ODU2O1xcbiAgLS1jaGVjazogIzRmMjlmMDtcXG4gIC0tZGlzYWJsZWQ6ICNjM2M4ZGU7XFxuICAtLWhlaWdodDogNTBweDtcXG4gIC8qIC0td2lkdGg6IDEwMHB4OyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDY1LCA3MiwgODYsIDAuMDUpO1xcbiAgcGFkZGluZzogMTBweCA0NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCA3NSUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUsXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGxlZnQ6IC0yN3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOmFmdGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDRweDtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogLTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlLFxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcmlnaHQ6IDYwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDBweDtcXG4gIGxlZnQ6IDQwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IGNoZWNrLTAxIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxuICBhbmltYXRpb246IGNoZWNrLTAyIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogbW92ZSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XFxuICBhbmltYXRpb246IHNsaWNlIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogZmlyZXdvcmsgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGljZSB7XFxuICA2MCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogNHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAtMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMiB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsIDE0cHggLThweCAwIDBweCAjNGYyOWYwLCAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLCAtMTRweCA4cHggMCAwcHggIzRmMjlmMCwgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQywwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUEsK0JBQStCOztBQUUvQixxQ0FBcUM7QUFDckM7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Y7Y0FDWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0lBRUUsdUNBQXVDO0lBQ3ZDLCtCQUErQjtFQUNqQztFQUNBOzs7OztJQUtFLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTs7OztJQUlFLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsK0JBQStCO0VBQ2pDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1Isd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWO2dFQUM0RDtFQUM5RDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1Y7NkVBQ3lFO0VBQzNFO0FBQ0Y7O0FBRUEscUNBQXFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggOTAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMWZyIDFmcjtcXG59XFxuLmhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvNC8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnNpZGViYXIgKiB7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNS8zO1xcbiAgYm9yZGVyOiAxMHB4O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XFxufVxcblxcbi8qIGNyZWF0ZS1wcm9qZWN0LWJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBjdWF0cm9mZW5kZXIgKi9cXG4uY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzc2N2I4MDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMTA3LCAxNzksIDAuMik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXI6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxufVxcblxcbi8qIHNpZGViYXIgbGluayBzdHlsaW5nICovXFxuXFxuLmxpbmsge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ubGluazo6YmVmb3JlLFxcbi5saW5rOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgLyogc2hvdyBieSBkZWZhdWx0ICovXFxufVxcblxcbi5saW5rLS1lcnNhIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoYWx5YXJkLWRpc3BsYXksIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1pbmRlbnQ6IDFweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saW5rLS1lcnNhOjpiZWZvcmUge1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxufVxcblxcbi8qIGFkZCBidXR0b24gc3R5bGluZyAqL1xcblxcbi5hZGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyJSkgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxcmVtIC0gMXB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLmFkZDpob3ZlcixcXG4uYWRkOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYWRkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLyogZm9ybSBzdHlsZXMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLzMvNC80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwMHB4LCAwKTtcXG4gIGFuaW1hdGlvbjogYXJyaXZlIDUwMG1zIGVhc2UtaW4tb3V0IDAuOXMgZm9yd2FyZHM7XFxufVxcblxcbi5mb3JtX19ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuI25vdGVzIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuI2RhdGUge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8zO1xcbn1cXG5cXG4uZm9ybS0tbm8ge1xcbiAgYW5pbWF0aW9uOiBOTyAxcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLmZvcm1fX2lucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzAwMHJnYigxMSwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgTk8ge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyaXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MHB4LCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIG1vdmUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4vKiBjaGVja2xpc3Qgc3R5bGVzICovXFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgLS10ZXh0OiAjNDE0ODU2O1xcbiAgLS1jaGVjazogIzRmMjlmMDtcXG4gIC0tZGlzYWJsZWQ6ICNjM2M4ZGU7XFxuICAtLWhlaWdodDogNTBweDtcXG4gIC8qIC0td2lkdGg6IDEwMHB4OyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDY1LCA3MiwgODYsIDAuMDUpO1xcbiAgcGFkZGluZzogMTBweCA0NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCA3NSUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUsXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGxlZnQ6IC0yN3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOmFmdGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDRweDtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogLTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlLFxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcmlnaHQ6IDYwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDBweDtcXG4gIGxlZnQ6IDQwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IGNoZWNrLTAxIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxuICBhbmltYXRpb246IGNoZWNrLTAyIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogbW92ZSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XFxuICBhbmltYXRpb246IHNsaWNlIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogZmlyZXdvcmsgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGljZSB7XFxuICA2MCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogNHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAtMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMiB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsIDE0cHggLThweCAwIDBweCAjNGYyOWYwLCAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLCAtMTRweCA4cHggMCAwcHggIzRmMjlmMCwgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0LnN2Z1wiO1xuXG5sZXQgY3JlYXRlVGFzayA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LmlkID0gMDtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAwKTtcblxuICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCAwKTtcbiAgbGFiZWwuaW5uZXJUZXh0ID0gXCJ3YWxrIHRoZSBkb2dcIjtcbiAgdGFzay5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2staW5mb1wiKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgbGV0IGVkaXRTVkcgPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdFNWRy5zcmMgPSBlZGl0O1xuICBlZGl0U1ZHLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDE1JTtcIik7XG4gIGVkaXRTVkcuY2xhc3NMaXN0LmFkZChcInRhc2stZWRpXCIpO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZChlZGl0U1ZHKTtcblxuICBsZXQgdGFza1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrVGltZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aW1lXCIpO1xuICB0YXNrVGltZS5pbm5lclRleHQgPSBcIjIgZGF5c1wiO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGltZSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuXG4vLyBsZXQgY3JlYXRlVGFzayA9IChjb250YWluZXIsIG9iamVjdCkgPT4ge1xuLy8gICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4vL1xuLy8gICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4vL1xuLy8gICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyAgIGNoZWNrYm94LmlkID0gb2JqZWN0LmlkO1xuLy8gICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4vLyAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iamVjdC5pZCk7XG4vL1xuLy8gICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbi8vXG4vLyAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbi8vICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG9iamVjdC5pZCk7XG4vLyAgIGxhYmVsLmlubmVyVGV4dCA9IG9iamVjdC50aXRsZTtcbi8vICAgdGFzay5hcHBlbmRDaGlsZChsYWJlbCk7XG4vL1xuLy8gICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvXCIpO1xuLy8gICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbi8vXG4vLyAgIGxldCBlZGl0U1ZHID0gbmV3IEltYWdlKCk7XG4vLyAgIGVkaXRTVkcuc3JjID0gZWRpdDtcbi8vICAgZWRpdFNWRy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxNSU7XCIpO1xuLy8gICBlZGl0U1ZHLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaVwiKTtcbi8vICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZWRpdFNWRyk7XG4vL1xuLy8gICBsZXQgdGFza1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICB0YXNrVGltZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aW1lXCIpO1xuLy8gICB0YXNrVGltZS5pbm5lclRleHQgPSBcIjJkYXlzXCI7XG4vLyAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaW1lKTtcbi8vIH07XG4iLCJpbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0LnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxubGV0IGluaXRpYWxpemUgPSAoY29udGFpbmVyKSA9PiB7XG4gIGhlYWRlcnMoY29udGFpbmVyKTtcbiAgc2lkZWJhcnMoY29udGFpbmVyKTtcbiAgdGFza3MoY29udGFpbmVyKTtcbiAgdGFza01ha2VyKGNvbnRhaW5lcik7XG59O1xuXG4vL0NyZWF0ZSBoZWFkZXIuXG5sZXQgaGVhZGVycyA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGluZ1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGhlYWRpbmdTdGF0dXMuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJoZWFkaW5nLXN0YXR1c1wiKTtcbiAgaGVhZGluZ1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIsIFwiaGVhZGluZy10aXRsZVwiKTtcblxuICBoZWFkaW5nU3RhdHVzLmlubmVyVGV4dCA9IFwibm90aGluZyBcIjtcbiAgaGVhZGluZ1RpdGxlLmlubmVyVGV4dCA9IFwidG8gZG9cIjtcbiAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudCwgYW5kIGFwcGVuZCBwYXJlbnQgdG8gY29udGFpbmVyXG4gIGhlYWRpbmcuYXBwZW5kKGhlYWRpbmdTdGF0dXMsIGhlYWRpbmdUaXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG59O1xuXG4vL0NyZWF0ZSBzaWRlYmFyLlxubGV0IHNpZGViYXJzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBzaWRlYmFyQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHNpZGViYXJVbnNvcnRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgc2lkZWJhckFsbC5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIik7XG4gIHNpZGViYXJVbnNvcnRlZC5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIik7XG5cbiAgc2lkZWJhckFsbC5pZCA9IFwiYWxsXCI7XG4gIHNpZGViYXJVbnNvcnRlZC5pZCA9IFwidW5zb3J0ZWRcIjtcblxuICBzaWRlYmFyQWxsLmlubmVyVGV4dCA9IFwiYWxsIHRhc2tzXCI7XG4gIHNpZGViYXJVbnNvcnRlZC5pbm5lclRleHQgPSBcInVuc29ydGVkXCI7XG5cbiAgc2lkZWJhci5hcHBlbmQoc2lkZWJhckFsbCwgc2lkZWJhclVuc29ydGVkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIGxldCBicmVha0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIGJyZWFrTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOjUwJTt0ZXh0LWFsaWduOmxlZnQ7bWFyZ2luLWxlZnQ6MFwiKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChicmVha0xpbmUpO1xuXG4gIGxldCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtYnRuXCIpO1xuICBjcmVhdGVQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiIGNyZWF0ZSBwcm9qZWN0XCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ0bik7XG59O1xuXG4vL0NyZWF0ZSB0YXNrIGNvbnRhaW5lci5cbmxldCB0YXNrcyA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IHRhc2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFwiKTtcblxuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIHRhc2tsaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGNyZWF0ZVRhc2sodGFza2xpc3QpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2xpc3QpO1xufTtcblxuLy9DcmVhdGUgZm9ybSB0byBhZGQgdG8tZG8gaXRlbXNcbmxldCB0YXNrTWFrZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwiZm9ybVwiO1xuICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gIGxldCBmb3JtX19ncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1fX2dyb3VwLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19ncm91cFwiKTtcblxuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRcIik7XG4gIHtcbiAgICBPYmplY3QuYXNzaWduKHRpdGxlSW5wdXQsIHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwidGl0bGVcIixcbiAgICAgIGlkOiBcInRpdGxlXCIsXG4gICAgICByZXF1aXJlZDogXCIgXCIsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRcIik7XG4gIE9iamVjdC5hc3NpZ24oZGVzY3JpcHRpb25JbnB1dCwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgaWQ6IFwiZGVzY3JpcHRpb25cIixcbiAgfSk7XG5cbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIE9iamVjdC5hc3NpZ24obm90ZXNJbnB1dCwge1xuICAgIGlkOiBcIm5vdGVzXCIsXG4gICAgbmFtZTogXCJub3Rlc1wiLFxuICAgIGNvbHM6IFwiNDBcIixcbiAgICByb3dzOiBcIjNcIixcbiAgICBwbGFjZWhvbGRlcjogXCJub3Rlc1wiLFxuICB9KTtcblxuICBsZXQgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3RJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBzZWxlY3RJbnB1dC5vcHRpb25zW3NlbGVjdElucHV0Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgXCJsaWZlIG9yIGRlYXRoXCIsXG4gICAgXCJsaWZlIG9yIGRlYXRoXCJcbiAgKTtcblxuICBzZWxlY3RJbnB1dC5vcHRpb25zW3NlbGVjdElucHV0Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgXCJpdCBjYW4gd2FpdFwiLFxuICAgIFwiaXQgY2FuIHdhaXRcIlxuICApO1xuICBzZWxlY3RJbnB1dC5vcHRpb25zW3NlbGVjdElucHV0Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgXCJhbGwgbmlnaHRlclwiLFxuICAgIFwiYWxsIG5pZ2h0ZXJcIlxuICApO1xuXG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIE9iamVjdC5hc3NpZ24oZGF0ZUlucHV0LCB7XG4gICAgdHlwZTogXCJkYXRlXCIsXG4gICAgbmFtZTogXCJkYXRlXCIsXG4gICAgaWQ6IFwiZGF0ZVwiLFxuICB9KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiY3JlYXRlIHRhc2tcIjtcblxuICBmb3JtX19ncm91cC5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIG5vdGVzSW5wdXQsXG4gICAgc2VsZWN0SW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGJ0blxuICApO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1fX2dyb3VwKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIiwiY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICB0aGlzLnRpdGxlID0gZm9ybS50aXRsZS52YWx1ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB0aGlzLmRhdGUgPSBmb3JtLmRhdGUudmFsdWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IGZvcm0ucHJpb3JpdHkudmFsdWU7XG4gICAgdGhpcy5ub3RlcyA9IGZvcm0ubm90ZXMudmFsdWU7XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZG9MaXN0ID0ge307XG5cbiAgc2V0IGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG4gIHNldCBjaGFuZ2VEZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHNldCBjaGFuZ2VQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlTm90ZXModmFsdWUpIHtcbiAgICB0aGlzLm5vdGVzID0gdmFsdWU7XG4gIH1cbn1cbi8vXG4vLyBsZXQgZXhhbXBsZSA9IG5ldyB0b0RvKFxuLy8gICBcIlRha2Ugb3V0IHRoZSB0cmFzaFwiLFxuLy8gICBcIk5lZWQgdG8gdGFrZSBvdXQgdGhlIHRyYXNoIHNvIEkgZ2V0IHBhaWRcIixcbi8vICAgXCIxMi8wMS8yMDIyXCIsXG4vLyAgIFwiYWxsIG5pZ2h0ZXJcIixcbi8vICAgXCJkbyBpdCBxdWljaywgZG8gaXQgYXQgbmlnaHQsIGp1c3QgZG8gaXRcIixcbi8vICAgXCJ1bmNvbXBsZXRlXCJcbi8vICk7XG4vL1xuLy8gZXhhbXBsZS5jaGFuZ2VUaXRsZSA9IFwiRG9uJ3Qgd2FsayB0aGUgZG9nXCI7XG4vLyBleGFtcGxlLmNoYW5nZUR1ZURhdGUgPSBcIjEyLzEvMVwiO1xuLy9cbi8vIGNvbnNvbGUubG9nKGV4YW1wbGUpO1xuXG5leHBvcnQgeyB0b0RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuaW1wb3J0IHsgdG9EbyB9IGZyb20gXCIuL3RvRG9cIjtcblxuaW5pdGlhbGl6ZShkb2N1bWVudC5ib2R5KTtcblxubGV0IHRvZG9zID0gW107XG5cbmxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCJcbiAgICA/IChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIilcbiAgICA6IChmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiKTtcbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgciA9IG5ldyB0b0RvKGZvcm0pO1xuICB0b2Rvcy5wdXNoKHIpO1xuICBjb25zb2xlLmxvZyh0b2Rvcyk7XG59KTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHt9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/5/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-display {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  grid-column: 3/4;\n  /* width: 650px;\n  margin-left: -450px; */\n}\n.edit-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.p-form-modal {\n  grid-area: 2/2/4/3;\n  display: block;\n  align-self: center;\n  position: relative;\n  z-index: 9999;\n}\n\n#p-form {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.projectname {\n  width: 400px;\n}\n\n.label-container {\n  display: flex;\n  grid-column: 1/3;\n  align-items: center;\n}\n\n.label-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 24px;\n}\n\n.descriptor {\n  font-style: italic;\n  color: lightgray;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit-svg {\n  margin-bottom: -10px;\n}\n\n/* submit project btn styling */\n\n/* From uiverse.io by @kiru2741 */\n.p-form-btn {\n  padding: 10px;\n  font-size: 15px;\n  outline: none;\n  border: 2px solid black;\n  background-color: white;\n  color: white;\n  position: relative;\n  letter-spacing: 1px;\n  width: 100px;\n  cursor: pointer;\n}\n\n.p-form-btn::before {\n  content: \"add\";\n  /*Button's value/text-content */\n  position: absolute;\n  top: -14%;\n  left: 7%;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease-in-out;\n  font-weight: bold;\n}\n\n.p-form-btn:hover::before {\n  top: 0;\n  left: 0;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.create-task-btn {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica,\n    Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.create-task-btn:hover,\n.create-task-btn:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.create-task-btn:hover {\n  transform: translateY(-1px);\n}\n\n.create-task-btn:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  /* background: var(--background); */\n  /* width: var(--width); */\n  /* height: var(--height); */\n  border-radius: var(--border-radius);\n  /* position: relative; */\n  /* box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05); */\n  padding: 10px 25px;\n  display: grid;\n  grid-template-columns: 30px 321px 480px;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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B;EACxB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;AACA;EACE,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV;gEAC4D;EAC9D;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;;8BAE0B;EAC5B;AACF;;AAEA,qCAAqC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/5/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-display {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  grid-column: 3/4;\n  /* width: 650px;\n  margin-left: -450px; */\n}\n.edit-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.p-form-modal {\n  grid-area: 2/2/4/3;\n  display: block;\n  align-self: center;\n  position: relative;\n  z-index: 9999;\n}\n\n#p-form {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.projectname {\n  width: 400px;\n}\n\n.label-container {\n  display: flex;\n  grid-column: 1/3;\n  align-items: center;\n}\n\n.label-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 24px;\n}\n\n.descriptor {\n  font-style: italic;\n  color: lightgray;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit-svg {\n  margin-bottom: -10px;\n}\n\n/* submit project btn styling */\n\n/* From uiverse.io by @kiru2741 */\n.p-form-btn {\n  padding: 10px;\n  font-size: 15px;\n  outline: none;\n  border: 2px solid black;\n  background-color: white;\n  color: white;\n  position: relative;\n  letter-spacing: 1px;\n  width: 100px;\n  cursor: pointer;\n}\n\n.p-form-btn::before {\n  content: \"add\";\n  /*Button's value/text-content */\n  position: absolute;\n  top: -14%;\n  left: 7%;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease-in-out;\n  font-weight: bold;\n}\n\n.p-form-btn:hover::before {\n  top: 0;\n  left: 0;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.create-task-btn {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica,\n    Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.create-task-btn:hover,\n.create-task-btn:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.create-task-btn:hover {\n  transform: translateY(-1px);\n}\n\n.create-task-btn:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  /* background: var(--background); */\n  /* width: var(--width); */\n  /* height: var(--height); */\n  border-radius: var(--border-radius);\n  /* position: relative; */\n  /* box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05); */\n  padding: 10px 25px;\n  display: grid;\n  grid-template-columns: 30px 321px 480px;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,\n      14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,\n      -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n"],"sourceRoot":""}]);
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

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTasks": () => (/* binding */ addTasks)
/* harmony export */ });
//Changes active project to clicked project, removes all previous tasks from the container to display newly active project tasks.

let addTasks = (x) => {
  let border = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  let active = document.querySelector(".active");
  active.classList.remove("active");
  x.classList.add("active");
  //remove all current tasks from display
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });

  x.style.cssText = border;
  // //if selecting all tasks, style alltasks button as selected but keep default to unsorted.
  // y == "yes" ? (x.style.cssText = border) : (allTasks.style.cssText = border);
};




/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _displayUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayUpdate */ "./src/displayUpdate.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");
/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTasks */ "./src/addTasks.js");




let createProject = (sidebarContainer, name, list, taskContainer) => {
  //create the project element
  let button = document.createElement("button");
  button.classList.add("link", "link--ersa");
  button.id = name;
  button.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  button.addEventListener("click", function (event) {
    (0,_styleHelper__WEBPACK_IMPORTED_MODULE_1__.selector)();
    (0,_addTasks__WEBPACK_IMPORTED_MODULE_2__.addTasks)(event.target, "yes");
    (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_0__.displayUpdate)(list, name, taskContainer);
  });
  sidebarContainer.appendChild(button);
};




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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");



let createTask = (container, object, id) => {
  let index = id; //stores the index at which this specific "toDo" exists in the project
  let task = document.createElement("div");
  task.classList.add("task");
  container.appendChild(task);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container");

  task.appendChild(labelContainer);

  let checkbox = document.createElement("input");
  checkbox.id = object.project + id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", object.project + id);

  //remove on check
  checkbox.addEventListener("change", function () {
    setTimeout(() => {
      if (this.checked) {
        task.remove();
        _index__WEBPACK_IMPORTED_MODULE_1__.tasks[object.project].splice(index, 1);
      }
    }, 700);
  });
  labelContainer.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", object.project + id);

  let labelText = document.createElement("div");
  labelText.classList.add("label-text");
  labelText.innerText = object.title;
  label.appendChild(labelText);

  labelContainer.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let descriptor = document.createElement("div");
  descriptor.classList.add("descriptor");
  descriptor.innerText = object.description;
  taskInfo.appendChild(descriptor);

  let editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  taskInfo.appendChild(editButton);

  let editSVG = new Image();
  editSVG.src = _edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editSVG.classList.add("edit-svg");
  editButton.appendChild(editSVG);

  // let editor = () => {
  //   let taskForm = document.getElementById("t-form");
  //   visibility(taskForm, true);
  //   taskForm.title.value = object.title;
  //   taskForm.description.value = object.description;
  //   taskForm.notes.value = object.notes;
  //   taskForm.priority.value = object.priority;
  //   taskForm.date.value = object.date;
  //   taskForm.addEventListener("submit", something);
  // };

  // let something = (e) => {
  //   let taskForm = document.getElementById("t-form");
  //   e.preventDefault();
  //   object.changeTitle = taskForm.title.value;
  //   object.changeDescription = taskForm.description.value;
  //   object.changeNotes = taskForm.notes.value;
  //   object.changePriority = taskForm.priority.value;
  //   object.changeDate = taskForm.date.value;
  //   e.target.removeEventListener("submit", something);
  //   console.log("editor");
  // };

  // editButton.addEventListener("click", editor);

  let taskTime = document.createElement("div");
  taskTime.classList.add("task-time");
  taskTime.innerText = "2 days";
  taskInfo.appendChild(taskTime);
};




/***/ }),

/***/ "./src/displayUpdate.js":
/*!******************************!*\
  !*** ./src/displayUpdate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayUpdate": () => (/* binding */ displayUpdate),
/* harmony export */   "displayUpdateAll": () => (/* binding */ displayUpdateAll)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


let resetDisplay = () => {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
};

//Updates task container to show respective project/tasks from list of tasks.
let displayUpdate = (list, project, container) => {
  resetDisplay();
  list[project].forEach((result, id) => {
    (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(container, result, id);
  });
};

//used to update taskDisplay with ALL tasks
let displayUpdateAll = (list, container) => {
  resetDisplay();
  Object.keys(list).forEach((key) => {
    list[key].forEach((result, id) => {
      (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(container, result, id);
    });
  });
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _displayUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayUpdate */ "./src/displayUpdate.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");
/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTasks */ "./src/addTasks.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
// document.addEventListener("DOMContentLoaded", function () {}









(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.initialize)(document.body);

const createProjectBtn = document.querySelector(".create-project-btn");
const projectFormModal = document.querySelector(".p-form-modal");
const projectForm = document.getElementById("p-form");
const createTaskBtn = document.querySelector(".create-task-btn");
const taskForm = document.getElementById("t-form");
const taskDisplay = document.querySelector(".task-display");

const unsorted = document.querySelector(".unsorted");
const allTasks = document.querySelector(".all");

let tasks = { unsorted: [] };

//load default project tasks
unsorted.addEventListener("click", function (event) {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_4__.selector)(); //remove currently active link border
  (0,_addTasks__WEBPACK_IMPORTED_MODULE_5__.addTasks)(event.target); //removes tasks and styles clicked project
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_3__.displayUpdate)(tasks, event.target.id, taskDisplay);
});
allTasks.addEventListener("click", function (event) {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_4__.selector)();
  (0,_addTasks__WEBPACK_IMPORTED_MODULE_5__.addTasks)(event.target);
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_3__.displayUpdateAll)(tasks, taskDisplay);
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_4__.visibility)(taskForm, true);
  taskForm.addEventListener("submit", _newTask__WEBPACK_IMPORTED_MODULE_6__.newTask);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  projectForm.addEventListener("submit", _newProject__WEBPACK_IMPORTED_MODULE_7__.newProject);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_4__.visibility)(projectFormModal, false);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_4__.blurTasks)(taskDisplay);
  console.log(tasks);
});




/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");




let newProject = (e) => {
  e.preventDefault();
  const sidebarContainer = document.querySelector(".sidebar");
  const taskDisplay = document.querySelector(".task-display");
  const projectFormModal = document.querySelector(".p-form-modal");

  let name = e.target.projectname.value;
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_1__.blurTasks)(taskDisplay);
  if (name) {
    _index__WEBPACK_IMPORTED_MODULE_0__.tasks[name] = []; //create a project key
    (0,_createProject__WEBPACK_IMPORTED_MODULE_2__.createProject)(sidebarContainer, name, _index__WEBPACK_IMPORTED_MODULE_0__.tasks, taskDisplay);
  }
  e.target.reset();
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_1__.visibility)(projectFormModal, false);
  e.target.removeEventListener("submit", newProject);
};




/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _displayUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayUpdate */ "./src/displayUpdate.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");





let newTask = (e) => {
  e.preventDefault();
  let taskDisplay = document.querySelector(".task-display");
  let active = document.querySelector(".active");
  let task = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDo(e.target); //create a new task from form
  task.project = active.id;
  _index__WEBPACK_IMPORTED_MODULE_1__.tasks[active.id].push(task); // get current project key from id, add task to list
  if (active.classList.contains("all")) {
    (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_2__.displayUpdateAll)(_index__WEBPACK_IMPORTED_MODULE_1__.tasks, taskDisplay);
  } else {
    (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_2__.displayUpdate)(_index__WEBPACK_IMPORTED_MODULE_1__.tasks, active.id, taskDisplay);
  }
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_3__.visibility)(e.target, true); //target the taskForm, since its a form reset
  e.target.removeEventListener("submit", newTask);
};




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
let initialize = (container) => {
  headers(container);
  sidebars(container);
  tasks(container);
  taskForm(container);
  projectForm(container);
};

//Create header.
let headers = (container) => {
  let heading = document.createElement("div");
  let headingStatus = document.createElement("div");
  let headingTitle = document.createElement("div");

  heading.classList.add("heading");
  headingStatus.classList.add("heading", "heading-status");
  headingTitle.classList.add("heading", "heading-title");

  headingStatus.innerText = "------- ";
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
  sidebarAll.classList.add("link", "link--ersa", "all");
  sidebarUnsorted.classList.add("link", "link--ersa", "unsorted", "active");

  sidebarAll.id = "unsorted";
  sidebarUnsorted.id = "unsorted";

  sidebarAll.innerText = "all tasks";
  sidebarUnsorted.innerText = "unsorted";
  sidebarUnsorted.style.cssText =
    "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";

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
  let btn = document.createElement("div");
  let addBtn = document.createElement("button");

  tasklist.classList.add("task-display");
  btn.classList.add("button");
  addBtn.classList.add("create-task-btn");

  addBtn.innerText = "+";

  btn.appendChild(addBtn);
  tasklist.appendChild(btn);
  container.appendChild(tasklist);
};

//Create form to add to-do items
let taskForm = (container) => {
  let formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  let form = document.createElement("form");
  form.id = "t-form";
  form.setAttribute("style", "display:none");

  let form__group = document.createElement("div");
  form__group.classList.add("form__group");

  // title input
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

  // description input
  let descriptionInput = document.createElement("input");
  descriptionInput.classList.add("form__input");
  Object.assign(descriptionInput, {
    type: "text",
    placeholder: "description",
    id: "description",
  });

  // notes textbox

  let notesInput = document.createElement("textarea");
  Object.assign(notesInput, {
    id: "notes",
    name: "notes",
    cols: "40",
    rows: "3",
    placeholder: "notes",
  });

  // priority dropdown
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

  // date input
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

//Create form to create projects
let projectForm = (container) => {
  let projectFormModal = document.createElement("div");
  projectFormModal.classList.add("p-form-modal");
  projectFormModal.setAttribute("style", "display: none;");

  let form = document.createElement("form");
  form.id = "p-form";

  let label = document.createElement("label");
  label.setAttribute("for", "projectname");
  // label.setAttribute("style", "width: 100%");
  label.innerText = "project name";

  let input = document.createElement("input");
  input.classList.add("projectname");
  input.setAttribute("type", "text");
  input.setAttribute("name", "projectname");

  let btn = document.createElement("button");
  btn.classList.add("p-form-btn");
  btn.innerText = "add";

  container.appendChild(projectFormModal);
  projectFormModal.appendChild(form);
  form.append(label, input, btn);
};



/***/ }),

/***/ "./src/styleHelper.js":
/*!****************************!*\
  !*** ./src/styleHelper.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blurTasks": () => (/* binding */ blurTasks),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "visibility": () => (/* binding */ visibility)
/* harmony export */ });
//Makes input visible/invisible
let visibility = (modal, form) => {
  modal.style.display == "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");

  form == true ? modal.reset() : null;
};
//Blur's task container
let blurTasks = (taskList) => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
//Removes currently active project styling
let selector = () => {
  let r = document.querySelectorAll(".link");
  r.forEach((result) => {
    result.style.cssText = "";
  });
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
    this.notes = form.notes.value;
    this.priority = form.priority.value;
    this.date = form.date.value;
    this.project;
  }

  set changeTitle(value) {
    this.title = value;
  }
  set changeDescription(value) {
    this.description = value;
  }
  set changeNotes(value) {
    this.notes = value;
  }
  set changePriority(value) {
    this.priority = value;
  }
  set changeDate(value) {
    this.date = value;
  }
}




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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sU0FBUyxZQUFZLGFBQWEsTUFBTSxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0s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N0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5VXBkYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZUhlbHBlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7ICovXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA5MDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmciAxZnIgMWZyO1xcbn1cXG4uaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS81LzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNS8zO1xcbiAgYm9yZGVyOiAxMHB4O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAvKiB3aWR0aDogNjUwcHg7XFxuICBtYXJnaW4tbGVmdDogLTQ1MHB4OyAqL1xcbn1cXG4uZWRpdC1idG4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XFxufVxcblxcbi5wLWZvcm0tbW9kYWwge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNC8zO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4ucHJvamVjdG5hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsLXRleHQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRvciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZWRpdC1zdmcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi8qIHN1Ym1pdCBwcm9qZWN0IGJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBraXJ1Mjc0MSAqL1xcbi5wLWZvcm0tYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wLWZvcm0tYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImFkZFxcXCI7XFxuICAvKkJ1dHRvbidzIHZhbHVlL3RleHQtY29udGVudCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTQlO1xcbiAgbGVmdDogNyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wLWZvcm0tYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLyogY3JlYXRlLXByb2plY3QtYnRuIHN0eWxpbmcgKi9cXG5cXG4vKiBGcm9tIHVpdmVyc2UuaW8gYnkgQGN1YXRyb2ZlbmRlciAqL1xcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNzY3YjgwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAxMDcsIDE3OSwgMC4yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlcjpiZWZvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG59XFxuXFxuLyogc2lkZWJhciBsaW5rIHN0eWxpbmcgKi9cXG5cXG4ubGluayB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5saW5rOjpiZWZvcmUsXFxuLmxpbms6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5saW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAvKiBzaG93IGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLmxpbmstLWVyc2Ege1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtaW5kZW50OiAxcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubGluay0tZXJzYTo6YmVmb3JlIHtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbn1cXG5cXG4ubGluay0tZXJzYSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbn1cXG5cXG4vKiBhZGQgYnV0dG9uIHN0eWxpbmcgKi9cXG5cXG4uY3JlYXRlLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMiUpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsXFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IGNhbGMoMC41NzVyZW0gLSAxcHgpIGNhbGMoMXJlbSAtIDFweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIsXFxuLmNyZWF0ZS10YXNrLWJ0bjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMCAycHggNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi8qIGZvcm0gc3R5bGVzICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8zLzQvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MDBweCwgMCk7XFxuICBhbmltYXRpb246IGFycml2ZSA1MDBtcyBlYXNlLWluLW91dCAwLjlzIGZvcndhcmRzO1xcbn1cXG5cXG4uZm9ybV9fZ3JvdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxufVxcblxcbiNub3RlcyB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxufVxcblxcbiNkYXRlIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvMztcXG59XFxuXFxuLmZvcm0tLW5vIHtcXG4gIGFuaW1hdGlvbjogTk8gMXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5mb3JtX19pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIE5PIHtcXG4gIGZyb20sXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG4gIDEwJSxcXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgNDAlLFxcbiAgNjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFycml2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTBweCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG59XFxuXFxuLyogY2hlY2tsaXN0IHN0eWxlcyAqL1xcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIC0tdGV4dDogIzQxNDg1NjtcXG4gIC0tY2hlY2s6ICM0ZjI5ZjA7XFxuICAtLWRpc2FibGVkOiAjYzNjOGRlO1xcbiAgLS1oZWlnaHQ6IDUwcHg7XFxuICAvKiAtLXdpZHRoOiAxMDBweDsgKi9cXG4gIC0tYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAqL1xcbiAgLyogd2lkdGg6IHZhcigtLXdpZHRoKTsgKi9cXG4gIC8qIGhlaWdodDogdmFyKC0taGVpZ2h0KTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgLyogYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg2NSwgNzIsIDg2LCAwLjA1KTsgKi9cXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzIxcHggNDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6OmJlZm9yZSxcXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogOHB4O1xcbiAgbGVmdDogLTI3cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAtMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDAgMTVweCAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUsXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIHdpZHRoOiAwcHg7XFxuICByaWdodDogNjAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxuICB3aWR0aDogMHB4O1xcbiAgbGVmdDogNDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDEgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDIgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQpO1xcbiAgYW5pbWF0aW9uOiBtb3ZlIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogc2xpY2UgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBmaXJld29yayAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDUwJSB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWNlIHtcXG4gIDYwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAyIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmlyZXdvcmsge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjA7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTE1cHggMCAwcHggIzRmMjlmMCwgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCwgMCAxNXB4IDAgMHB4ICM0ZjI5ZjAsIC0xNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIC0xNHB4IC04cHggMCAwcHggIzRmMjlmMDtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7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KiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7ICovXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA5MDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmciAxZnIgMWZyO1xcbn1cXG4uaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS81LzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNS8zO1xcbiAgYm9yZGVyOiAxMHB4O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAvKiB3aWR0aDogNjUwcHg7XFxuICBtYXJnaW4tbGVmdDogLTQ1MHB4OyAqL1xcbn1cXG4uZWRpdC1idG4ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XFxufVxcblxcbi5wLWZvcm0tbW9kYWwge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNC8zO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4ucHJvamVjdG5hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsLXRleHQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRvciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZWRpdC1zdmcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi8qIHN1Ym1pdCBwcm9qZWN0IGJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBraXJ1Mjc0MSAqL1xcbi5wLWZvcm0tYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wLWZvcm0tYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImFkZFxcXCI7XFxuICAvKkJ1dHRvbidzIHZhbHVlL3RleHQtY29udGVudCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTQlO1xcbiAgbGVmdDogNyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wLWZvcm0tYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLyogY3JlYXRlLXByb2plY3QtYnRuIHN0eWxpbmcgKi9cXG5cXG4vKiBGcm9tIHVpdmVyc2UuaW8gYnkgQGN1YXRyb2ZlbmRlciAqL1xcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNzY3YjgwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAxMDcsIDE3OSwgMC4yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlcjpiZWZvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG59XFxuXFxuLyogc2lkZWJhciBsaW5rIHN0eWxpbmcgKi9cXG5cXG4ubGluayB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5saW5rOjpiZWZvcmUsXFxuLmxpbms6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5saW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAvKiBzaG93IGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLmxpbmstLWVyc2Ege1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtaW5kZW50OiAxcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubGluay0tZXJzYTo6YmVmb3JlIHtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbn1cXG5cXG4ubGluay0tZXJzYSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbn1cXG5cXG4vKiBhZGQgYnV0dG9uIHN0eWxpbmcgKi9cXG5cXG4uY3JlYXRlLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMiUpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsXFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IGNhbGMoMC41NzVyZW0gLSAxcHgpIGNhbGMoMXJlbSAtIDFweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIsXFxuLmNyZWF0ZS10YXNrLWJ0bjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMCAycHggNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi8qIGZvcm0gc3R5bGVzICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8zLzQvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MDBweCwgMCk7XFxuICBhbmltYXRpb246IGFycml2ZSA1MDBtcyBlYXNlLWluLW91dCAwLjlzIGZvcndhcmRzO1xcbn1cXG5cXG4uZm9ybV9fZ3JvdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxufVxcblxcbiNub3RlcyB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxufVxcblxcbiNkYXRlIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvMztcXG59XFxuXFxuLmZvcm0tLW5vIHtcXG4gIGFuaW1hdGlvbjogTk8gMXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5mb3JtX19pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIE5PIHtcXG4gIGZyb20sXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG4gIDEwJSxcXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgNDAlLFxcbiAgNjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFycml2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTBweCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG59XFxuXFxuLyogY2hlY2tsaXN0IHN0eWxlcyAqL1xcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIC0tdGV4dDogIzQxNDg1NjtcXG4gIC0tY2hlY2s6ICM0ZjI5ZjA7XFxuICAtLWRpc2FibGVkOiAjYzNjOGRlO1xcbiAgLS1oZWlnaHQ6IDUwcHg7XFxuICAvKiAtLXdpZHRoOiAxMDBweDsgKi9cXG4gIC0tYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpOyAqL1xcbiAgLyogd2lkdGg6IHZhcigtLXdpZHRoKTsgKi9cXG4gIC8qIGhlaWdodDogdmFyKC0taGVpZ2h0KTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgLyogYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg2NSwgNzIsIDg2LCAwLjA1KTsgKi9cXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzIxcHggNDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6OmJlZm9yZSxcXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogOHB4O1xcbiAgbGVmdDogLTI3cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAtMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDAgMTVweCAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUsXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIHdpZHRoOiAwcHg7XFxuICByaWdodDogNjAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxuICB3aWR0aDogMHB4O1xcbiAgbGVmdDogNDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDEgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDIgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQpO1xcbiAgYW5pbWF0aW9uOiBtb3ZlIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogc2xpY2UgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBmaXJld29yayAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDUwJSB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWNlIHtcXG4gIDYwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAyIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmlyZXdvcmsge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjA7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTE1cHggMCAwcHggIzRmMjlmMCwgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMTRweCA4cHggMCAwcHggIzRmMjlmMCwgMCAxNXB4IDAgMHB4ICM0ZjI5ZjAsIC0xNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIC0xNHB4IC04cHggMCAwcHggIzRmMjlmMDtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9DaGFuZ2VzIGFjdGl2ZSBwcm9qZWN0IHRvIGNsaWNrZWQgcHJvamVjdCwgcmVtb3ZlcyBhbGwgcHJldmlvdXMgdGFza3MgZnJvbSB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgbmV3bHkgYWN0aXZlIHByb2plY3QgdGFza3MuXG5cbmxldCBhZGRUYXNrcyA9ICh4KSA9PiB7XG4gIGxldCBib3JkZXIgPSBcImJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcbiAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgeC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAvL3JlbW92ZSBhbGwgY3VycmVudCB0YXNrcyBmcm9tIGRpc3BsYXlcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgeC5zdHlsZS5jc3NUZXh0ID0gYm9yZGVyO1xuICAvLyAvL2lmIHNlbGVjdGluZyBhbGwgdGFza3MsIHN0eWxlIGFsbHRhc2tzIGJ1dHRvbiBhcyBzZWxlY3RlZCBidXQga2VlcCBkZWZhdWx0IHRvIHVuc29ydGVkLlxuICAvLyB5ID09IFwieWVzXCIgPyAoeC5zdHlsZS5jc3NUZXh0ID0gYm9yZGVyKSA6IChhbGxUYXNrcy5zdHlsZS5jc3NUZXh0ID0gYm9yZGVyKTtcbn07XG5cbmV4cG9ydCB7IGFkZFRhc2tzIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5VXBkYXRlIH0gZnJvbSBcIi4vZGlzcGxheVVwZGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwiLi9zdHlsZUhlbHBlclwiO1xuaW1wb3J0IHsgYWRkVGFza3MgfSBmcm9tIFwiLi9hZGRUYXNrc1wiO1xuXG5sZXQgY3JlYXRlUHJvamVjdCA9IChzaWRlYmFyQ29udGFpbmVyLCBuYW1lLCBsaXN0LCB0YXNrQ29udGFpbmVyKSA9PiB7XG4gIC8vY3JlYXRlIHRoZSBwcm9qZWN0IGVsZW1lbnRcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIik7XG4gIGJ1dHRvbi5pZCA9IG5hbWU7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBuYW1lO1xuXG4gIC8vaWYgcHJvamVjdCBpcyBjbGlja2VkLCBoaWdobGlnaHQgYW5kIHVwZGF0ZSB0aGUgbGlzdCBvZiB0YXNrc1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHNlbGVjdG9yKCk7XG4gICAgYWRkVGFza3MoZXZlbnQudGFyZ2V0LCBcInllc1wiKTtcbiAgICBkaXNwbGF5VXBkYXRlKGxpc3QsIG5hbWUsIHRhc2tDb250YWluZXIpO1xuICB9KTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdC5zdmdcIjtcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxubGV0IGNyZWF0ZVRhc2sgPSAoY29udGFpbmVyLCBvYmplY3QsIGlkKSA9PiB7XG4gIGxldCBpbmRleCA9IGlkOyAvL3N0b3JlcyB0aGUgaW5kZXggYXQgd2hpY2ggdGhpcyBzcGVjaWZpYyBcInRvRG9cIiBleGlzdHMgaW4gdGhlIHByb2plY3RcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgbGV0IGxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGFiZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxhYmVsLWNvbnRhaW5lclwiKTtcblxuICB0YXNrLmFwcGVuZENoaWxkKGxhYmVsQ29udGFpbmVyKTtcblxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LmlkID0gb2JqZWN0LnByb2plY3QgKyBpZDtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvYmplY3QucHJvamVjdCArIGlkKTtcblxuICAvL3JlbW92ZSBvbiBjaGVja1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Nbb2JqZWN0LnByb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSwgNzAwKTtcbiAgfSk7XG4gIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBvYmplY3QucHJvamVjdCArIGlkKTtcblxuICBsZXQgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoXCJsYWJlbC10ZXh0XCIpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gb2JqZWN0LnRpdGxlO1xuICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuXG4gIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvXCIpO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICBsZXQgZGVzY3JpcHRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0b3IuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0b3JcIik7XG4gIGRlc2NyaXB0b3IuaW5uZXJUZXh0ID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdG9yKTtcblxuICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICBsZXQgZWRpdFNWRyA9IG5ldyBJbWFnZSgpO1xuICBlZGl0U1ZHLnNyYyA9IGVkaXQ7XG4gIGVkaXRTVkcuY2xhc3NMaXN0LmFkZChcImVkaXQtc3ZnXCIpO1xuICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRTVkcpO1xuXG4gIC8vIGxldCBlZGl0b3IgPSAoKSA9PiB7XG4gIC8vICAgbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0LWZvcm1cIik7XG4gIC8vICAgdmlzaWJpbGl0eSh0YXNrRm9ybSwgdHJ1ZSk7XG4gIC8vICAgdGFza0Zvcm0udGl0bGUudmFsdWUgPSBvYmplY3QudGl0bGU7XG4gIC8vICAgdGFza0Zvcm0uZGVzY3JpcHRpb24udmFsdWUgPSBvYmplY3QuZGVzY3JpcHRpb247XG4gIC8vICAgdGFza0Zvcm0ubm90ZXMudmFsdWUgPSBvYmplY3Qubm90ZXM7XG4gIC8vICAgdGFza0Zvcm0ucHJpb3JpdHkudmFsdWUgPSBvYmplY3QucHJpb3JpdHk7XG4gIC8vICAgdGFza0Zvcm0uZGF0ZS52YWx1ZSA9IG9iamVjdC5kYXRlO1xuICAvLyAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc29tZXRoaW5nKTtcbiAgLy8gfTtcblxuICAvLyBsZXQgc29tZXRoaW5nID0gKGUpID0+IHtcbiAgLy8gICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInQtZm9ybVwiKTtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgb2JqZWN0LmNoYW5nZVRpdGxlID0gdGFza0Zvcm0udGl0bGUudmFsdWU7XG4gIC8vICAgb2JqZWN0LmNoYW5nZURlc2NyaXB0aW9uID0gdGFza0Zvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gIC8vICAgb2JqZWN0LmNoYW5nZU5vdGVzID0gdGFza0Zvcm0ubm90ZXMudmFsdWU7XG4gIC8vICAgb2JqZWN0LmNoYW5nZVByaW9yaXR5ID0gdGFza0Zvcm0ucHJpb3JpdHkudmFsdWU7XG4gIC8vICAgb2JqZWN0LmNoYW5nZURhdGUgPSB0YXNrRm9ybS5kYXRlLnZhbHVlO1xuICAvLyAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc29tZXRoaW5nKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcImVkaXRvclwiKTtcbiAgLy8gfTtcblxuICAvLyBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0b3IpO1xuXG4gIGxldCB0YXNrVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpbWVcIik7XG4gIHRhc2tUaW1lLmlubmVyVGV4dCA9IFwiMiBkYXlzXCI7XG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaW1lKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmxldCByZXNldERpc3BsYXkgPSAoKSA9PiB7XG4gIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2sucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxuLy9VcGRhdGVzIHRhc2sgY29udGFpbmVyIHRvIHNob3cgcmVzcGVjdGl2ZSBwcm9qZWN0L3Rhc2tzIGZyb20gbGlzdCBvZiB0YXNrcy5cbmxldCBkaXNwbGF5VXBkYXRlID0gKGxpc3QsIHByb2plY3QsIGNvbnRhaW5lcikgPT4ge1xuICByZXNldERpc3BsYXkoKTtcbiAgbGlzdFtwcm9qZWN0XS5mb3JFYWNoKChyZXN1bHQsIGlkKSA9PiB7XG4gICAgY3JlYXRlVGFzayhjb250YWluZXIsIHJlc3VsdCwgaWQpO1xuICB9KTtcbn07XG5cbi8vdXNlZCB0byB1cGRhdGUgdGFza0Rpc3BsYXkgd2l0aCBBTEwgdGFza3NcbmxldCBkaXNwbGF5VXBkYXRlQWxsID0gKGxpc3QsIGNvbnRhaW5lcikgPT4ge1xuICByZXNldERpc3BsYXkoKTtcbiAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgbGlzdFtrZXldLmZvckVhY2goKHJlc3VsdCwgaWQpID0+IHtcbiAgICAgIGNyZWF0ZVRhc2soY29udGFpbmVyLCByZXN1bHQsIGlkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5VXBkYXRlLCBkaXNwbGF5VXBkYXRlQWxsIH07XG4iLCIvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7fVxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCB7IHRvRG8gfSBmcm9tIFwiLi90b0RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5VXBkYXRlLCBkaXNwbGF5VXBkYXRlQWxsIH0gZnJvbSBcIi4vZGlzcGxheVVwZGF0ZVwiO1xuaW1wb3J0IHsgdmlzaWJpbGl0eSwgYmx1clRhc2tzLCBzZWxlY3RvciB9IGZyb20gXCIuL3N0eWxlSGVscGVyXCI7XG5pbXBvcnQgeyBhZGRUYXNrcyB9IGZyb20gXCIuL2FkZFRhc2tzXCI7XG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSBcIi4vbmV3VGFza1wiO1xuaW1wb3J0IHsgbmV3UHJvamVjdCB9IGZyb20gXCIuL25ld1Byb2plY3RcIjtcblxuaW5pdGlhbGl6ZShkb2N1bWVudC5ib2R5KTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3QtYnRuXCIpO1xuY29uc3QgcHJvamVjdEZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1mb3JtLW1vZGFsXCIpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAtZm9ybVwiKTtcbmNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWJ0blwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0LWZvcm1cIik7XG5jb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuXG5jb25zdCB1bnNvcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5zb3J0ZWRcIik7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsXCIpO1xuXG5sZXQgdGFza3MgPSB7IHVuc29ydGVkOiBbXSB9O1xuXG4vL2xvYWQgZGVmYXVsdCBwcm9qZWN0IHRhc2tzXG51bnNvcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHNlbGVjdG9yKCk7IC8vcmVtb3ZlIGN1cnJlbnRseSBhY3RpdmUgbGluayBib3JkZXJcbiAgYWRkVGFza3MoZXZlbnQudGFyZ2V0KTsgLy9yZW1vdmVzIHRhc2tzIGFuZCBzdHlsZXMgY2xpY2tlZCBwcm9qZWN0XG4gIGRpc3BsYXlVcGRhdGUodGFza3MsIGV2ZW50LnRhcmdldC5pZCwgdGFza0Rpc3BsYXkpO1xufSk7XG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHNlbGVjdG9yKCk7XG4gIGFkZFRhc2tzKGV2ZW50LnRhcmdldCk7XG4gIGRpc3BsYXlVcGRhdGVBbGwodGFza3MsIHRhc2tEaXNwbGF5KTtcbn0pO1xuXG4vL21ha2UgdGFzayBmb3JtIHZpc2libGVcbmNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmlzaWJpbGl0eSh0YXNrRm9ybSwgdHJ1ZSk7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgbmV3VGFzayk7XG59KTtcbi8vbWFrZSBwcm9qZWN0IGZvcm0gdmlzaWJsZVxuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIG5ld1Byb2plY3QpO1xuICB2aXNpYmlsaXR5KHByb2plY3RGb3JtTW9kYWwsIGZhbHNlKTtcbiAgYmx1clRhc2tzKHRhc2tEaXNwbGF5KTtcbiAgY29uc29sZS5sb2codGFza3MpO1xufSk7XG5cbmV4cG9ydCB7IHRhc2tzIH07XG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyB2aXNpYmlsaXR5LCBibHVyVGFza3MgfSBmcm9tIFwiLi9zdHlsZUhlbHBlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxubGV0IG5ld1Byb2plY3QgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtZm9ybS1tb2RhbFwiKTtcblxuICBsZXQgbmFtZSA9IGUudGFyZ2V0LnByb2plY3RuYW1lLnZhbHVlO1xuICBibHVyVGFza3ModGFza0Rpc3BsYXkpO1xuICBpZiAobmFtZSkge1xuICAgIHRhc2tzW25hbWVdID0gW107IC8vY3JlYXRlIGEgcHJvamVjdCBrZXlcbiAgICBjcmVhdGVQcm9qZWN0KHNpZGViYXJDb250YWluZXIsIG5hbWUsIHRhc2tzLCB0YXNrRGlzcGxheSk7XG4gIH1cbiAgZS50YXJnZXQucmVzZXQoKTtcbiAgdmlzaWJpbGl0eShwcm9qZWN0Rm9ybU1vZGFsLCBmYWxzZSk7XG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgbmV3UHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyBuZXdQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgZGlzcGxheVVwZGF0ZSwgZGlzcGxheVVwZGF0ZUFsbCB9IGZyb20gXCIuL2Rpc3BsYXlVcGRhdGVcIjtcbmltcG9ydCB7IHZpc2liaWxpdHkgfSBmcm9tIFwiLi9zdHlsZUhlbHBlclwiO1xuXG5sZXQgbmV3VGFzayA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgbGV0IHRhc2sgPSBuZXcgdG9EbyhlLnRhcmdldCk7IC8vY3JlYXRlIGEgbmV3IHRhc2sgZnJvbSBmb3JtXG4gIHRhc2sucHJvamVjdCA9IGFjdGl2ZS5pZDtcbiAgdGFza3NbYWN0aXZlLmlkXS5wdXNoKHRhc2spOyAvLyBnZXQgY3VycmVudCBwcm9qZWN0IGtleSBmcm9tIGlkLCBhZGQgdGFzayB0byBsaXN0XG4gIGlmIChhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxsXCIpKSB7XG4gICAgZGlzcGxheVVwZGF0ZUFsbCh0YXNrcywgdGFza0Rpc3BsYXkpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlVcGRhdGUodGFza3MsIGFjdGl2ZS5pZCwgdGFza0Rpc3BsYXkpO1xuICB9XG4gIHZpc2liaWxpdHkoZS50YXJnZXQsIHRydWUpOyAvL3RhcmdldCB0aGUgdGFza0Zvcm0sIHNpbmNlIGl0cyBhIGZvcm0gcmVzZXRcbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBuZXdUYXNrKTtcbn07XG5cbmV4cG9ydCB7IG5ld1Rhc2sgfTtcbiIsImxldCBpbml0aWFsaXplID0gKGNvbnRhaW5lcikgPT4ge1xuICBoZWFkZXJzKGNvbnRhaW5lcik7XG4gIHNpZGViYXJzKGNvbnRhaW5lcik7XG4gIHRhc2tzKGNvbnRhaW5lcik7XG4gIHRhc2tGb3JtKGNvbnRhaW5lcik7XG4gIHByb2plY3RGb3JtKGNvbnRhaW5lcik7XG59O1xuXG4vL0NyZWF0ZSBoZWFkZXIuXG5sZXQgaGVhZGVycyA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGluZ1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGhlYWRpbmdTdGF0dXMuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJoZWFkaW5nLXN0YXR1c1wiKTtcbiAgaGVhZGluZ1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIsIFwiaGVhZGluZy10aXRsZVwiKTtcblxuICBoZWFkaW5nU3RhdHVzLmlubmVyVGV4dCA9IFwiLS0tLS0tLSBcIjtcbiAgaGVhZGluZ1RpdGxlLmlubmVyVGV4dCA9IFwidG8gZG9cIjtcbiAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudCwgYW5kIGFwcGVuZCBwYXJlbnQgdG8gY29udGFpbmVyXG4gIGhlYWRpbmcuYXBwZW5kKGhlYWRpbmdTdGF0dXMsIGhlYWRpbmdUaXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG59O1xuXG4vL0NyZWF0ZSBzaWRlYmFyLlxubGV0IHNpZGViYXJzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBzaWRlYmFyQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHNpZGViYXJVbnNvcnRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgc2lkZWJhckFsbC5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIiwgXCJhbGxcIik7XG4gIHNpZGViYXJVbnNvcnRlZC5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIiwgXCJ1bnNvcnRlZFwiLCBcImFjdGl2ZVwiKTtcblxuICBzaWRlYmFyQWxsLmlkID0gXCJ1bnNvcnRlZFwiO1xuICBzaWRlYmFyVW5zb3J0ZWQuaWQgPSBcInVuc29ydGVkXCI7XG5cbiAgc2lkZWJhckFsbC5pbm5lclRleHQgPSBcImFsbCB0YXNrc1wiO1xuICBzaWRlYmFyVW5zb3J0ZWQuaW5uZXJUZXh0ID0gXCJ1bnNvcnRlZFwiO1xuICBzaWRlYmFyVW5zb3J0ZWQuc3R5bGUuY3NzVGV4dCA9XG4gICAgXCJib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmF5O2ZvbnQtd2VpZ2h0OmJvbGQ7XCI7XG5cbiAgc2lkZWJhci5hcHBlbmQoc2lkZWJhckFsbCwgc2lkZWJhclVuc29ydGVkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIGxldCBicmVha0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gIGJyZWFrTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOjUwJTt0ZXh0LWFsaWduOmxlZnQ7bWFyZ2luLWxlZnQ6MFwiKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChicmVha0xpbmUpO1xuXG4gIGxldCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtYnRuXCIpO1xuICBjcmVhdGVQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiIGNyZWF0ZSBwcm9qZWN0XCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ0bik7XG59O1xuXG4vL0NyZWF0ZSB0YXNrIGNvbnRhaW5lci5cbmxldCB0YXNrcyA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IHRhc2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tsaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpc3BsYXlcIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10YXNrLWJ0blwiKTtcblxuICBhZGRCdG4uaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gIHRhc2tsaXN0LmFwcGVuZENoaWxkKGJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrbGlzdCk7XG59O1xuXG4vL0NyZWF0ZSBmb3JtIHRvIGFkZCB0by1kbyBpdGVtc1xubGV0IHRhc2tGb3JtID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uaWQgPSBcInQtZm9ybVwiO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xuXG4gIGxldCBmb3JtX19ncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1fX2dyb3VwLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19ncm91cFwiKTtcblxuICAvLyB0aXRsZSBpbnB1dFxuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRcIik7XG4gIHtcbiAgICBPYmplY3QuYXNzaWduKHRpdGxlSW5wdXQsIHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwidGl0bGVcIixcbiAgICAgIGlkOiBcInRpdGxlXCIsXG4gICAgICByZXF1aXJlZDogXCIgXCIsXG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiBpbnB1dFxuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXRcIik7XG4gIE9iamVjdC5hc3NpZ24oZGVzY3JpcHRpb25JbnB1dCwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgaWQ6IFwiZGVzY3JpcHRpb25cIixcbiAgfSk7XG5cbiAgLy8gbm90ZXMgdGV4dGJveFxuXG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBPYmplY3QuYXNzaWduKG5vdGVzSW5wdXQsIHtcbiAgICBpZDogXCJub3Rlc1wiLFxuICAgIG5hbWU6IFwibm90ZXNcIixcbiAgICBjb2xzOiBcIjQwXCIsXG4gICAgcm93czogXCIzXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwibm90ZXNcIixcbiAgfSk7XG5cbiAgLy8gcHJpb3JpdHkgZHJvcGRvd25cbiAgbGV0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0SW5wdXQuaWQgPSBcInByaW9yaXR5XCI7XG4gIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgc2VsZWN0SW5wdXQub3B0aW9uc1tzZWxlY3RJbnB1dC5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgIFwibGlmZSBvciBkZWF0aFwiLFxuICAgIFwibGlmZSBvciBkZWF0aFwiXG4gICk7XG4gIHNlbGVjdElucHV0Lm9wdGlvbnNbc2VsZWN0SW5wdXQub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICBcIml0IGNhbiB3YWl0XCIsXG4gICAgXCJpdCBjYW4gd2FpdFwiXG4gICk7XG4gIHNlbGVjdElucHV0Lm9wdGlvbnNbc2VsZWN0SW5wdXQub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICBcImFsbCBuaWdodGVyXCIsXG4gICAgXCJhbGwgbmlnaHRlclwiXG4gICk7XG5cbiAgLy8gZGF0ZSBpbnB1dFxuICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBPYmplY3QuYXNzaWduKGRhdGVJbnB1dCwge1xuICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgIG5hbWU6IFwiZGF0ZVwiLFxuICAgIGlkOiBcImRhdGVcIixcbiAgfSk7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lclRleHQgPSBcImNyZWF0ZSB0YXNrXCI7XG5cbiAgZm9ybV9fZ3JvdXAuYXBwZW5kKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBub3Rlc0lucHV0LFxuICAgIHNlbGVjdElucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBidG5cbiAgKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtX19ncm91cCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn07XG5cbi8vQ3JlYXRlIGZvcm0gdG8gY3JlYXRlIHByb2plY3RzXG5sZXQgcHJvamVjdEZvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBwcm9qZWN0Rm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwicC1mb3JtLW1vZGFsXCIpO1xuICBwcm9qZWN0Rm9ybU1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwicC1mb3JtXCI7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0bmFtZVwiKTtcbiAgLy8gbGFiZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMTAwJVwiKTtcbiAgbGFiZWwuaW5uZXJUZXh0ID0gXCJwcm9qZWN0IG5hbWVcIjtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0bmFtZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0bmFtZVwiKTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwLWZvcm0tYnRuXCIpO1xuICBidG4uaW5uZXJUZXh0ID0gXCJhZGRcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1Nb2RhbCk7XG4gIHByb2plY3RGb3JtTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kKGxhYmVsLCBpbnB1dCwgYnRuKTtcbn07XG5leHBvcnQgeyBpbml0aWFsaXplIH07XG4iLCIvL01ha2VzIGlucHV0IHZpc2libGUvaW52aXNpYmxlXG5sZXQgdmlzaWJpbGl0eSA9IChtb2RhbCwgZm9ybSkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiXG4gICAgPyAobW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIilcbiAgICA6IChtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuXG4gIGZvcm0gPT0gdHJ1ZSA/IG1vZGFsLnJlc2V0KCkgOiBudWxsO1xufTtcbi8vQmx1cidzIHRhc2sgY29udGFpbmVyXG5sZXQgYmx1clRhc2tzID0gKHRhc2tMaXN0KSA9PiB7XG4gIHRhc2tMaXN0LnN0eWxlLmZpbHRlciA9PSBcIlwiXG4gICAgPyAodGFza0xpc3Quc3R5bGUuZmlsdGVyID0gXCJibHVyKDFweClcIilcbiAgICA6ICh0YXNrTGlzdC5zdHlsZS5maWx0ZXIgPSBcIlwiKTtcbn07XG4vL1JlbW92ZXMgY3VycmVudGx5IGFjdGl2ZSBwcm9qZWN0IHN0eWxpbmdcbmxldCBzZWxlY3RvciA9ICgpID0+IHtcbiAgbGV0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIik7XG4gIHIuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgcmVzdWx0LnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHZpc2liaWxpdHksIGJsdXJUYXNrcywgc2VsZWN0b3IgfTtcbiIsImNsYXNzIHRvRG8ge1xuICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgdGhpcy50aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgdGhpcy5ub3RlcyA9IGZvcm0ubm90ZXMudmFsdWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IGZvcm0ucHJpb3JpdHkudmFsdWU7XG4gICAgdGhpcy5kYXRlID0gZm9ybS5kYXRlLnZhbHVlO1xuICAgIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIHNldCBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlRGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgc2V0IGNoYW5nZU5vdGVzKHZhbHVlKSB7XG4gICAgdGhpcy5ub3RlcyA9IHZhbHVlO1xuICB9XG4gIHNldCBjaGFuZ2VQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvRG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/5/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-display {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.task-edit {\n  margin-top: 4px;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.p-form-modal {\n  grid-area: 2/2/4/3;\n  display: block;\n  align-self: center;\n  position: relative;\n  z-index: 9999;\n}\n\n#p-form {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.projectname {\n  width: 400px;\n}\n\n/* submit project btn styling */\n\n/* From uiverse.io by @kiru2741 */\n.p-form-btn {\n  padding: 10px;\n  font-size: 15px;\n  outline: none;\n  border: 2px solid black;\n  background-color: white;\n  color: white;\n  position: relative;\n  letter-spacing: 1px;\n  width: 100px;\n  cursor: pointer;\n}\n\n.p-form-btn::before {\n  content: \"add\";\n  /*Button's value/text-content */\n  position: absolute;\n  top: -14%;\n  left: 7%;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease-in-out;\n  font-weight: bold;\n}\n\n.p-form-btn:hover::before {\n  top: 0;\n  left: 0;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.create-task-btn {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.create-task-btn:hover,\n.create-task-btn:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.create-task-btn:hover {\n  transform: translateY(-1px);\n}\n\n.create-task-btn:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  outline: 0;\n  border: 0;\n  color: white;\n  background: #000rgb(11, 0, 0);\n  transition: 0.3s;\n}\n.btn:hover {\n  background: #000000;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 10px 45px;\n  display: grid;\n  grid-template-columns: 30px 75% 20%;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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6B;EAC7B,aAAa;EACb,mBAAmB;AACrB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;AACA;EACE,2BAA2B;EAC3B,mCAAmC;AACrC;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,WAAW;IACX,SAAS;EACX;EACA;IACE,WAAW;IACX,UAAU;IACV,eAAe;EACjB;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,QAAQ;IACR,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,SAAS;IACT,oBAAoB;EACtB;EACA;IACE,UAAU;IACV,QAAQ;IACR,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,QAAQ;IACR,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,UAAU;IACV;gEAC4D;EAC9D;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV;6EACyE;EAC3E;AACF;;AAEA,qCAAqC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* border: 1px solid lightcoral; */\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 900px 1fr;\n  grid-template-rows: 150px 1fr 1fr 1fr;\n}\n.heading {\n  font-weight: regular;\n  font-size: 40px;\n  display: flex;\n  align-items: flex-end;\n  grid-area: 1/2/2/3;\n}\n.heading-status {\n  padding-right: 10px;\n}\n.sidebar {\n  grid-area: 2/1/5/2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.heading-status {\n  font-size: 80px;\n}\n\n.task-display {\n  grid-area: 2/2/5/3;\n  border: 10px;\n}\n.task-info {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.task-edit {\n  margin-top: 4px;\n}\n\ntextarea {\n  padding: 10px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.p-form-modal {\n  grid-area: 2/2/4/3;\n  display: block;\n  align-self: center;\n  position: relative;\n  z-index: 9999;\n}\n\n#p-form {\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.projectname {\n  width: 400px;\n}\n\n/* submit project btn styling */\n\n/* From uiverse.io by @kiru2741 */\n.p-form-btn {\n  padding: 10px;\n  font-size: 15px;\n  outline: none;\n  border: 2px solid black;\n  background-color: white;\n  color: white;\n  position: relative;\n  letter-spacing: 1px;\n  width: 100px;\n  cursor: pointer;\n}\n\n.p-form-btn::before {\n  content: \"add\";\n  /*Button's value/text-content */\n  position: absolute;\n  top: -14%;\n  left: 7%;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease-in-out;\n  font-weight: bold;\n}\n\n.p-form-btn:hover::before {\n  top: 0;\n  left: 0;\n}\n\n/* create-project-btn styling */\n\n/* From uiverse.io by @cuatrofender */\n.create-project-btn {\n  cursor: pointer;\n  margin: 10px;\n  border: none;\n  font-family: sans-serif;\n  font-size: 17px;\n  background: transparent;\n  color: #767b80;\n  border: solid 1px rgba(0, 107, 179, 0.2);\n  padding: 10px;\n  border-radius: 4px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:before {\n  content: \"+\";\n  opacity: 0;\n  margin-left: -15px;\n  transition-duration: 0.2s;\n}\n\n.create-project-btn:hover:before {\n  margin-left: 0px;\n  opacity: 1;\n}\n\n.create-project-btn:hover {\n  color: black;\n  background: rgba(0, 0, 0, 0.02);\n  border: solid 1px gainsboro;\n}\n\n/* sidebar link styling */\n\n.link {\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  white-space: nowrap;\n  color: var(--color-text);\n  margin: 10px;\n}\n\n.link::before,\n.link::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: currentColor;\n  top: 100%;\n  left: 0;\n  pointer-events: none;\n}\n\n.link::before {\n  content: \"\";\n  /* show by default */\n}\n\n.link--ersa {\n  padding: 0 10px;\n  letter-spacing: 1px;\n  text-indent: 1px;\n  text-transform: uppercase;\n}\n\n.link--ersa::before {\n  top: 50%;\n  height: 2px;\n  transform-origin: 100% 50%;\n  transform: scale3d(0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover::before {\n  transform-origin: 0% 50%;\n  transform: scale3d(1, 1, 1);\n}\n\n.link--ersa span {\n  display: inline-block;\n  transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);\n}\n\n.link--ersa:hover span {\n  transform: scale3d(1.1, 1.1, 1.1);\n}\n\n/* add button styling */\n\n.create-task-btn {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  font-family: system-ui, -apple-system, system-ui, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: calc(0.575rem - 1px) calc(1rem - 1px);\n  transition: all 250ms;\n}\n\n.create-task-btn:hover,\n.create-task-btn:focus {\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.create-task-btn:hover {\n  transform: translateY(-1px);\n}\n\n.create-task-btn:active {\n  background-color: #f0f0f1;\n  border-color: rgba(0, 0, 0, 0.15);\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\n  color: rgba(0, 0, 0, 0.65);\n  transform: translateY(0);\n}\n\n/* form styles */\n\n.form-container {\n  grid-area: 2/3/4/4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form {\n  width: 100%;\n  height: 100%;\n  /* margin-top: 40px; */\n  border-radius: 6px;\n  overflow: hidden;\n  opacity: 0;\n  transform: translate3d(0, 500px, 0);\n  animation: arrive 500ms ease-in-out 0.9s forwards;\n}\n\n.form__group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n#title {\n  grid-column: 1/3;\n}\n\n#description {\n  grid-area: 2/1/3/3;\n}\n\n#notes {\n  grid-area: 3/1/4/3;\n}\n\n#date {\n  grid-area: 4/1/5/3;\n}\n\n.form--no {\n  animation: NO 1s ease-in-out;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n.form__input {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  transition: 0.3s;\n  font-size: 22px;\n}\n.form__input:focus {\n  background: #f7f7f7;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  -webkit-appearance: none;\n  outline: 0;\n  border: 0;\n  color: white;\n  background: #000rgb(11, 0, 0);\n  transition: 0.3s;\n}\n.btn:hover {\n  background: #000000;\n}\n\n@keyframes NO {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes arrive {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n/* checklist styles */\n\n.task {\n  border: 1px solid lightgray;\n  --text: #414856;\n  --check: #4f29f0;\n  --disabled: #c3c8de;\n  --height: 50px;\n  /* --width: 100px; */\n  --border-radius: 0.25rem;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 10px 45px;\n  display: grid;\n  grid-template-columns: 30px 75% 20%;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.task label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  width: fit-content;\n  transition: color 0.3s ease;\n}\n.task label::before,\n.task label::after {\n  content: \"\";\n  position: absolute;\n}\n.task label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.task label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n.task input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  align-items: center;\n}\n.task input[type=\"checkbox\"]::before,\n.task input[type=\"checkbox\"]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n.task input[type=\"checkbox\"]::before {\n  width: 0px;\n  right: 60%;\n  transform-origin: right bottom;\n}\n.task input[type=\"checkbox\"]::after {\n  width: 0px;\n  left: 40%;\n  transform-origin: left bottom;\n}\n.task input[type=\"checkbox\"]:checked::before {\n  animation: check-01 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked::after {\n  animation: check-02 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label {\n  color: var(--disabled);\n  animation: move 0.3s ease 0.1s forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::before {\n  background: var(--disabled);\n  animation: slice 0.4s ease forwards;\n}\n.task input[type=\"checkbox\"]:checked + label::after {\n  animation: firework 0.5s ease forwards 0.1s;\n}\n\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    transform: rotate(45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    transform: rotate(-45deg);\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,\n      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0,\n      0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n"],"sourceRoot":""}]);
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

let addTasks = (x, y) => {
  let border = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  let allTasks = document.getElementById("all");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  x.classList.add("active");
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });

  //if selecting all tasks, style alltasks button as selected but keep default to unsorted.
  y == "yes" ? (x.style.cssText = border) : (allTasks.style.cssText = border);
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



let createTask = (container, object, id, project) => {
  let task = document.createElement("div");
  task.classList.add("task");
  container.appendChild(task);

  let checkbox = document.createElement("input");
  checkbox.id = id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", id);

  //remove on check
  checkbox.addEventListener("change", function () {
    setTimeout(() => {
      if (this.checked) {
        this.parentElement.remove();
        _index__WEBPACK_IMPORTED_MODULE_1__["default"][project].splice(this.id, 1);
      }
    }, 700);
  });
  task.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = object.title;
  task.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let editSVG = new Image();
  editSVG.src = _edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editSVG.setAttribute("style", "width: 15%;");
  editSVG.classList.add("task-edit");
  taskInfo.appendChild(editSVG);

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


//Updates task container to show respective project/tasks from list of tasks.
let displayUpdate = (list, project, container) => {
  list[project].forEach((result, id) => {
    var myEle = document.getElementById(id); //if the task already exists, ignore (prevents duplication)
    if (!myEle) {
      (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(container, result, id, project);
    }
  });
};

let displayUpdateAll = (list, container) => {
  let all = [];
  Object.keys(list).forEach((key) => {
    all = all.concat(list[key]);
  });
  all.forEach((task, id) => {
    (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(container, task, id);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _displayUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayUpdate */ "./src/displayUpdate.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");
/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTasks */ "./src/addTasks.js");
// document.addEventListener("DOMContentLoaded", function () {}







(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.initialize)(document.body);

let createProjectBtn = document.querySelector(".create-project-btn");
let projectFormModal = document.querySelector(".p-form-modal");
let projectForm = document.getElementById("p-form");
let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
let taskDisplay = document.querySelector(".task-display");

let sidebarContainer = document.querySelector(".sidebar");
let unsorted = document.getElementById("unsorted");
let allTasks = document.getElementById("all");

let tasks = { unsorted: [] };

//form handlers
projectForm.addEventListener("submit", function (e) {
  let name = this.projectname.value;
  e.preventDefault();
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.blurTasks)(taskDisplay);
  if (name) {
    tasks[name] = []; //create a project key
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.createProject)(sidebarContainer, name, tasks, taskDisplay);
  }
  this.reset();
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.visibility)(projectFormModal);
});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let active = document.querySelector(".active"); //get currently active project
  let task = new _toDo__WEBPACK_IMPORTED_MODULE_2__.toDo(taskForm); //create a new task from form
  tasks[active.id].push(task); // get current project key from id, add task to list
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdate)(tasks, active.id, taskDisplay);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.visibility)(e.target);
  this.reset();
});

//load default project tasks
unsorted.addEventListener("click", function (event) {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.selector)();
  (0,_addTasks__WEBPACK_IMPORTED_MODULE_6__.addTasks)(event.target, "yes");
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdate)(tasks, "unsorted", taskDisplay);
});
allTasks.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.selector)();
  (0,_addTasks__WEBPACK_IMPORTED_MODULE_6__.addTasks)(unsorted, "no");
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdateAll)(tasks, taskDisplay);
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.visibility)(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.visibility)(projectFormModal);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_5__.blurTasks)(taskDisplay);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


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
  sidebarUnsorted.classList.add("link", "link--ersa", "active");

  sidebarAll.id = "all";
  sidebarUnsorted.id = "unsorted";

  sidebarAll.innerText = "all tasks";
  sidebarUnsorted.innerText = "unsorted";
  sidebarUnsorted.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";

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
let visibility = (modal) => {
  modal.style.display == "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
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
    this.date = form.date.value;
    this.priority = form.priority.value;
    this.notes = form.notes.value;
    this.status = false;
  }

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
// class toDo {
//   constructor(title, description, date, priority, notes) {
//     this.title = title;
//     this.description = description;
//     this.date = date;
//     this.priority = priority;
//     this.notes = notes;
//     this.status = false;
//   }
//
//   set changeTitle(value) {
//     this.title = value;
//   }
//   set changeDescription(value) {
//     this.description = value;
//   }
//   set changeDate(value) {
//     this.date = value;
//   }
//   set changePriority(value) {
//     this.priority = value;
//   }
//   set changeNotes(value) {
//     this.notes = value;
//   }
// }




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLFNBQVMsWUFBWSxhQUFhLE1BQU0sUUFBUSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0x0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRGhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZUhlbHBlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7ICovXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA5MDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IDFmciAxZnIgMWZyO1xcbn1cXG4uaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS81LzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5oZWFkaW5nLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNS8zO1xcbiAgYm9yZGVyOiAxMHB4O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XFxufVxcblxcbi5wLWZvcm0tbW9kYWwge1xcbiAgZ3JpZC1hcmVhOiAyLzIvNC8zO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jcC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4ucHJvamVjdG5hbWUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBzdWJtaXQgcHJvamVjdCBidG4gc3R5bGluZyAqL1xcblxcbi8qIEZyb20gdWl2ZXJzZS5pbyBieSBAa2lydTI3NDEgKi9cXG4ucC1mb3JtLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucC1mb3JtLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJhZGRcXFwiO1xcbiAgLypCdXR0b24ncyB2YWx1ZS90ZXh0LWNvbnRlbnQgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE0JTtcXG4gIGxlZnQ6IDclO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucC1mb3JtLWJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi8qIGNyZWF0ZS1wcm9qZWN0LWJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBjdWF0cm9mZW5kZXIgKi9cXG4uY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzc2N2I4MDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMTA3LCAxNzksIDAuMik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXI6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XFxuICBib3JkZXI6IHNvbGlkIDFweCBnYWluc2Jvcm87XFxufVxcblxcbi8qIHNpZGViYXIgbGluayBzdHlsaW5nICovXFxuXFxuLmxpbmsge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ubGluazo6YmVmb3JlLFxcbi5saW5rOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgLyogc2hvdyBieSBkZWZhdWx0ICovXFxufVxcblxcbi5saW5rLS1lcnNhIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWluZGVudDogMXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmxpbmstLWVyc2E6OmJlZm9yZSB7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAxLCAwLjgsIDEpO1xcbn1cXG5cXG4ubGluay0tZXJzYTpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2Egc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAxLCAwLjgsIDEpO1xcbn1cXG5cXG4ubGluay0tZXJzYTpob3ZlciBzcGFuIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG59XFxuXFxuLyogYWRkIGJ1dHRvbiBzdHlsaW5nICovXFxuXFxuLmNyZWF0ZS10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIlKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiBjYWxjKDAuNTc1cmVtIC0gMXB4KSBjYWxjKDFyZW0gLSAxcHgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmhvdmVyLFxcbi5jcmVhdGUtdGFzay1idG46Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDAgMnB4IDRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4vKiBmb3JtIHN0eWxlcyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIvMy80LzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIG1hcmdpbi10b3A6IDQwcHg7ICovXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAwcHgsIDApO1xcbiAgYW5pbWF0aW9uOiBhcnJpdmUgNTAwbXMgZWFzZS1pbi1vdXQgMC45cyBmb3J3YXJkcztcXG59XFxuXFxuLmZvcm1fX2dyb3VwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiN0aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbn1cXG5cXG4jbm90ZXMge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICBncmlkLWFyZWE6IDQvMS81LzM7XFxufVxcblxcbi5mb3JtLS1ubyB7XFxuICBhbmltYXRpb246IE5PIDFzIGVhc2UtaW4tb3V0O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5mb3JtX19pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4uZm9ybV9faW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuXFxuLmJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwcmdiKDExLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBOTyB7XFxuICBmcm9tLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuICAxMCUsXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcnJpdmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwcHgsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxufVxcblxcbi8qIGNoZWNrbGlzdCBzdHlsZXMgKi9cXG5cXG4udGFzayB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAtLXRleHQ6ICM0MTQ4NTY7XFxuICAtLWNoZWNrOiAjNGYyOWYwO1xcbiAgLS1kaXNhYmxlZDogI2MzYzhkZTtcXG4gIC0taGVpZ2h0OiA1MHB4O1xcbiAgLyogLS13aWR0aDogMTAwcHg7ICovXFxuICAtLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoNjUsIDcyLCA4NiwgMC4wNSk7XFxuICBwYWRkaW5nOiAxMHB4IDQ1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDc1JSAyMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6OmJlZm9yZSxcXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogOHB4O1xcbiAgbGVmdDogLTI3cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcXG59XFxuLnRhc2sgbGFiZWw6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAtMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDAgMTVweCAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUsXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIHdpZHRoOiAwcHg7XFxuICByaWdodDogNjAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxuICB3aWR0aDogMHB4O1xcbiAgbGVmdDogNDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDEgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogY2hlY2stMDIgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQpO1xcbiAgYW5pbWF0aW9uOiBtb3ZlIDAuM3MgZWFzZSAwLjFzIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogc2xpY2UgMC40cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBmaXJld29yayAwLjVzIGVhc2UgZm9yd2FyZHMgMC4xcztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDUwJSB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWNlIHtcXG4gIDYwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiA0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IC0ycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAyIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmlyZXdvcmsge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLFxcbiAgICAgIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjA7XFxuICB9XFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTE1cHggMCAwcHggIzRmMjlmMCwgMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjAsIDE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsXFxuICAgICAgMCAxNXB4IDAgMHB4ICM0ZjI5ZjAsIC0xNHB4IDhweCAwIDBweCAjNGYyOWYwLCAtMTRweCAtOHB4IDAgMHB4ICM0ZjI5ZjA7XFxuICB9XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFDQUFxQztBQUN2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RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1Isd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWO2dFQUM0RDtFQUM5RDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1Y7NkVBQ3lFO0VBQzNFO0FBQ0Y7O0FBRUEscUNBQXFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggOTAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMWZyIDFmcjtcXG59XFxuLmhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvNS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMi8yLzUvMztcXG4gIGJvcmRlcjogMTBweDtcXG59XFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWVkaXQge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjOTk5O1xcbn1cXG5cXG4ucC1mb3JtLW1vZGFsIHtcXG4gIGdyaWQtYXJlYTogMi8yLzQvMztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuI3AtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnByb2plY3RuYW1lIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLyogc3VibWl0IHByb2plY3QgYnRuIHN0eWxpbmcgKi9cXG5cXG4vKiBGcm9tIHVpdmVyc2UuaW8gYnkgQGtpcnUyNzQxICovXFxuLnAtZm9ybS1idG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnAtZm9ybS1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiYWRkXFxcIjtcXG4gIC8qQnV0dG9uJ3MgdmFsdWUvdGV4dC1jb250ZW50ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNCU7XFxuICBsZWZ0OiA3JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnAtZm9ybS1idG46aG92ZXI6OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4vKiBjcmVhdGUtcHJvamVjdC1idG4gc3R5bGluZyAqL1xcblxcbi8qIEZyb20gdWl2ZXJzZS5pbyBieSBAY3VhdHJvZmVuZGVyICovXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM3NjdiODA7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDEwNywgMTc5LCAwLjIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyOmJlZm9yZSB7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xcbn1cXG5cXG4vKiBzaWRlYmFyIGxpbmsgc3R5bGluZyAqL1xcblxcbi5saW5rIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmxpbms6OmJlZm9yZSxcXG4ubGluazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmxpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC8qIHNob3cgYnkgZGVmYXVsdCAqL1xcbn1cXG5cXG4ubGluay0tZXJzYSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1pbmRlbnQ6IDFweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saW5rLS1lcnNhOjpiZWZvcmUge1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxufVxcblxcbi8qIGFkZCBidXR0b24gc3R5bGluZyAqL1xcblxcbi5jcmVhdGUtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyJSkgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxcmVtIC0gMXB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjpob3ZlcixcXG4uY3JlYXRlLXRhc2stYnRuOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLyogZm9ybSBzdHlsZXMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLzMvNC80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwMHB4LCAwKTtcXG4gIGFuaW1hdGlvbjogYXJyaXZlIDUwMG1zIGVhc2UtaW4tb3V0IDAuOXMgZm9yd2FyZHM7XFxufVxcblxcbi5mb3JtX19ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuI25vdGVzIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuI2RhdGUge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8zO1xcbn1cXG5cXG4uZm9ybS0tbm8ge1xcbiAgYW5pbWF0aW9uOiBOTyAxcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLmZvcm1fX2lucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzAwMHJnYigxMSwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgTk8ge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyaXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MHB4LCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIG1vdmUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4vKiBjaGVja2xpc3Qgc3R5bGVzICovXFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgLS10ZXh0OiAjNDE0ODU2O1xcbiAgLS1jaGVjazogIzRmMjlmMDtcXG4gIC0tZGlzYWJsZWQ6ICNjM2M4ZGU7XFxuICAtLWhlaWdodDogNTBweDtcXG4gIC8qIC0td2lkdGg6IDEwMHB4OyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDY1LCA3MiwgODYsIDAuMDUpO1xcbiAgcGFkZGluZzogMTBweCA0NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCA3NSUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUsXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGxlZnQ6IC0yN3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOmFmdGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDRweDtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogLTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlLFxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcmlnaHQ6IDYwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDBweDtcXG4gIGxlZnQ6IDQwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IGNoZWNrLTAxIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxuICBhbmltYXRpb246IGNoZWNrLTAyIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogbW92ZSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XFxuICBhbmltYXRpb246IHNsaWNlIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogZmlyZXdvcmsgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGljZSB7XFxuICA2MCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogNHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAtMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMiB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsIDE0cHggLThweCAwIDBweCAjNGYyOWYwLCAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLCAtMTRweCA4cHggMCAwcHggIzRmMjlmMCwgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0NoYW5nZXMgYWN0aXZlIHByb2plY3QgdG8gY2xpY2tlZCBwcm9qZWN0LCByZW1vdmVzIGFsbCBwcmV2aW91cyB0YXNrcyBmcm9tIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSBuZXdseSBhY3RpdmUgcHJvamVjdCB0YXNrcy5cblxubGV0IGFkZFRhc2tzID0gKHgsIHkpID0+IHtcbiAgbGV0IGJvcmRlciA9IFwiYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JheTtmb250LXdlaWdodDpib2xkO1wiO1xuICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFwiKTtcbiAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgeC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLnJlbW92ZSgpO1xuICB9KTtcblxuICAvL2lmIHNlbGVjdGluZyBhbGwgdGFza3MsIHN0eWxlIGFsbHRhc2tzIGJ1dHRvbiBhcyBzZWxlY3RlZCBidXQga2VlcCBkZWZhdWx0IHRvIHVuc29ydGVkLlxuICB5ID09IFwieWVzXCIgPyAoeC5zdHlsZS5jc3NUZXh0ID0gYm9yZGVyKSA6IChhbGxUYXNrcy5zdHlsZS5jc3NUZXh0ID0gYm9yZGVyKTtcbn07XG5cbmV4cG9ydCB7IGFkZFRhc2tzIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5VXBkYXRlIH0gZnJvbSBcIi4vZGlzcGxheVVwZGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwiLi9zdHlsZUhlbHBlclwiO1xuaW1wb3J0IHsgYWRkVGFza3MgfSBmcm9tIFwiLi9hZGRUYXNrc1wiO1xuXG5sZXQgY3JlYXRlUHJvamVjdCA9IChzaWRlYmFyQ29udGFpbmVyLCBuYW1lLCBsaXN0LCB0YXNrQ29udGFpbmVyKSA9PiB7XG4gIC8vY3JlYXRlIHRoZSBwcm9qZWN0IGVsZW1lbnRcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlua1wiLCBcImxpbmstLWVyc2FcIik7XG4gIGJ1dHRvbi5pZCA9IG5hbWU7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBuYW1lO1xuXG4gIC8vaWYgcHJvamVjdCBpcyBjbGlja2VkLCBoaWdobGlnaHQgYW5kIHVwZGF0ZSB0aGUgbGlzdCBvZiB0YXNrc1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHNlbGVjdG9yKCk7XG4gICAgYWRkVGFza3MoZXZlbnQudGFyZ2V0LCBcInllc1wiKTtcbiAgICBkaXNwbGF5VXBkYXRlKGxpc3QsIG5hbWUsIHRhc2tDb250YWluZXIpO1xuICB9KTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdC5zdmdcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi9pbmRleFwiO1xuXG5sZXQgY3JlYXRlVGFzayA9IChjb250YWluZXIsIG9iamVjdCwgaWQsIHByb2plY3QpID0+IHtcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC5pZCA9IGlkO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGlkKTtcblxuICAvL3JlbW92ZSBvbiBjaGVja1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0YXNrc1twcm9qZWN0XS5zcGxpY2UodGhpcy5pZCwgMSk7XG4gICAgICB9XG4gICAgfSwgNzAwKTtcbiAgfSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcbiAgbGFiZWwuaW5uZXJUZXh0ID0gb2JqZWN0LnRpdGxlO1xuICB0YXNrLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvXCIpO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICBsZXQgZWRpdFNWRyA9IG5ldyBJbWFnZSgpO1xuICBlZGl0U1ZHLnNyYyA9IGVkaXQ7XG4gIGVkaXRTVkcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMTUlO1wiKTtcbiAgZWRpdFNWRy5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0XCIpO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZChlZGl0U1ZHKTtcblxuICBsZXQgdGFza1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrVGltZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aW1lXCIpO1xuICB0YXNrVGltZS5pbm5lclRleHQgPSBcIjIgZGF5c1wiO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrVGltZSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG4vL1VwZGF0ZXMgdGFzayBjb250YWluZXIgdG8gc2hvdyByZXNwZWN0aXZlIHByb2plY3QvdGFza3MgZnJvbSBsaXN0IG9mIHRhc2tzLlxubGV0IGRpc3BsYXlVcGRhdGUgPSAobGlzdCwgcHJvamVjdCwgY29udGFpbmVyKSA9PiB7XG4gIGxpc3RbcHJvamVjdF0uZm9yRWFjaCgocmVzdWx0LCBpZCkgPT4ge1xuICAgIHZhciBteUVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgLy9pZiB0aGUgdGFzayBhbHJlYWR5IGV4aXN0cywgaWdub3JlIChwcmV2ZW50cyBkdXBsaWNhdGlvbilcbiAgICBpZiAoIW15RWxlKSB7XG4gICAgICBjcmVhdGVUYXNrKGNvbnRhaW5lciwgcmVzdWx0LCBpZCwgcHJvamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmxldCBkaXNwbGF5VXBkYXRlQWxsID0gKGxpc3QsIGNvbnRhaW5lcikgPT4ge1xuICBsZXQgYWxsID0gW107XG4gIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGFsbCA9IGFsbC5jb25jYXQobGlzdFtrZXldKTtcbiAgfSk7XG4gIGFsbC5mb3JFYWNoKCh0YXNrLCBpZCkgPT4ge1xuICAgIGNyZWF0ZVRhc2soY29udGFpbmVyLCB0YXNrLCBpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVVwZGF0ZSwgZGlzcGxheVVwZGF0ZUFsbCB9O1xuIiwiLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge31cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gXCIuL3BhZ2VMb2FkXCI7XG5pbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlVcGRhdGUsIGRpc3BsYXlVcGRhdGVBbGwgfSBmcm9tIFwiLi9kaXNwbGF5VXBkYXRlXCI7XG5pbXBvcnQgeyB2aXNpYmlsaXR5LCBibHVyVGFza3MsIHNlbGVjdG9yIH0gZnJvbSBcIi4vc3R5bGVIZWxwZXJcIjtcbmltcG9ydCB7IGFkZFRhc2tzIH0gZnJvbSBcIi4vYWRkVGFza3NcIjtcbmluaXRpYWxpemUoZG9jdW1lbnQuYm9keSk7XG5cbmxldCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1idG5cIik7XG5sZXQgcHJvamVjdEZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1mb3JtLW1vZGFsXCIpO1xubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwLWZvcm1cIik7XG5sZXQgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stYnRuXCIpO1xubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0LWZvcm1cIik7XG5sZXQgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcblxubGV0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5sZXQgdW5zb3J0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuc29ydGVkXCIpO1xubGV0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxcIik7XG5cbmxldCB0YXNrcyA9IHsgdW5zb3J0ZWQ6IFtdIH07XG5cbi8vZm9ybSBoYW5kbGVyc1xucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgbmFtZSA9IHRoaXMucHJvamVjdG5hbWUudmFsdWU7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYmx1clRhc2tzKHRhc2tEaXNwbGF5KTtcbiAgaWYgKG5hbWUpIHtcbiAgICB0YXNrc1tuYW1lXSA9IFtdOyAvL2NyZWF0ZSBhIHByb2plY3Qga2V5XG4gICAgY3JlYXRlUHJvamVjdChzaWRlYmFyQ29udGFpbmVyLCBuYW1lLCB0YXNrcywgdGFza0Rpc3BsYXkpO1xuICB9XG4gIHRoaXMucmVzZXQoKTtcbiAgdmlzaWJpbGl0eShwcm9qZWN0Rm9ybU1vZGFsKTtcbn0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpOyAvL2dldCBjdXJyZW50bHkgYWN0aXZlIHByb2plY3RcbiAgbGV0IHRhc2sgPSBuZXcgdG9Ebyh0YXNrRm9ybSk7IC8vY3JlYXRlIGEgbmV3IHRhc2sgZnJvbSBmb3JtXG4gIHRhc2tzW2FjdGl2ZS5pZF0ucHVzaCh0YXNrKTsgLy8gZ2V0IGN1cnJlbnQgcHJvamVjdCBrZXkgZnJvbSBpZCwgYWRkIHRhc2sgdG8gbGlzdFxuICBkaXNwbGF5VXBkYXRlKHRhc2tzLCBhY3RpdmUuaWQsIHRhc2tEaXNwbGF5KTtcbiAgdmlzaWJpbGl0eShlLnRhcmdldCk7XG4gIHRoaXMucmVzZXQoKTtcbn0pO1xuXG4vL2xvYWQgZGVmYXVsdCBwcm9qZWN0IHRhc2tzXG51bnNvcnRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHNlbGVjdG9yKCk7XG4gIGFkZFRhc2tzKGV2ZW50LnRhcmdldCwgXCJ5ZXNcIik7XG4gIGRpc3BsYXlVcGRhdGUodGFza3MsIFwidW5zb3J0ZWRcIiwgdGFza0Rpc3BsYXkpO1xufSk7XG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RvcigpO1xuICBhZGRUYXNrcyh1bnNvcnRlZCwgXCJub1wiKTtcbiAgZGlzcGxheVVwZGF0ZUFsbCh0YXNrcywgdGFza0Rpc3BsYXkpO1xufSk7XG5cbi8vbWFrZSB0YXNrIGZvcm0gdmlzaWJsZVxuY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICB2aXNpYmlsaXR5KHRhc2tGb3JtKTtcbn0pO1xuLy9tYWtlIHByb2plY3QgZm9ybSB2aXNpYmxlXG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHZpc2liaWxpdHkocHJvamVjdEZvcm1Nb2RhbCk7XG4gIGJsdXJUYXNrcyh0YXNrRGlzcGxheSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza3M7XG4iLCJpbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0LnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxubGV0IGluaXRpYWxpemUgPSAoY29udGFpbmVyKSA9PiB7XG4gIGhlYWRlcnMoY29udGFpbmVyKTtcbiAgc2lkZWJhcnMoY29udGFpbmVyKTtcbiAgdGFza3MoY29udGFpbmVyKTtcbiAgdGFza0Zvcm0oY29udGFpbmVyKTtcbiAgcHJvamVjdEZvcm0oY29udGFpbmVyKTtcbn07XG5cbi8vQ3JlYXRlIGhlYWRlci5cbmxldCBoZWFkZXJzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFkaW5nU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgaGVhZGluZ1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiLCBcImhlYWRpbmctc3RhdHVzXCIpO1xuICBoZWFkaW5nVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJoZWFkaW5nLXRpdGxlXCIpO1xuXG4gIGhlYWRpbmdTdGF0dXMuaW5uZXJUZXh0ID0gXCJub3RoaW5nIFwiO1xuICBoZWFkaW5nVGl0bGUuaW5uZXJUZXh0ID0gXCJ0byBkb1wiO1xuICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50LCBhbmQgYXBwZW5kIHBhcmVudCB0byBjb250YWluZXJcbiAgaGVhZGluZy5hcHBlbmQoaGVhZGluZ1N0YXR1cywgaGVhZGluZ1RpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkaW5nKTtcbn07XG5cbi8vQ3JlYXRlIHNpZGViYXIuXG5sZXQgc2lkZWJhcnMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHNpZGViYXJBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgc2lkZWJhclVuc29ydGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICBzaWRlYmFyQWxsLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwibGluay0tZXJzYVwiKTtcbiAgc2lkZWJhclVuc29ydGVkLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwibGluay0tZXJzYVwiLCBcImFjdGl2ZVwiKTtcblxuICBzaWRlYmFyQWxsLmlkID0gXCJhbGxcIjtcbiAgc2lkZWJhclVuc29ydGVkLmlkID0gXCJ1bnNvcnRlZFwiO1xuXG4gIHNpZGViYXJBbGwuaW5uZXJUZXh0ID0gXCJhbGwgdGFza3NcIjtcbiAgc2lkZWJhclVuc29ydGVkLmlubmVyVGV4dCA9IFwidW5zb3J0ZWRcIjtcbiAgc2lkZWJhclVuc29ydGVkLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcblxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyQWxsLCBzaWRlYmFyVW5zb3J0ZWQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgbGV0IGJyZWFrTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgYnJlYWtMaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6NTAlO3RleHQtYWxpZ246bGVmdDttYXJnaW4tbGVmdDowXCIpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGJyZWFrTGluZSk7XG5cbiAgbGV0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdC1idG5cIik7XG4gIGNyZWF0ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCIgY3JlYXRlIHByb2plY3RcIjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnRuKTtcbn07XG5cbi8vQ3JlYXRlIHRhc2sgY29udGFpbmVyLlxubGV0IHRhc2tzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgdGFza2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza2xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXRhc2stYnRuXCIpO1xuXG4gIGFkZEJ0bi5pbm5lclRleHQgPSBcIitcIjtcblxuICBidG4uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgdGFza2xpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tsaXN0KTtcbn07XG5cbi8vQ3JlYXRlIGZvcm0gdG8gYWRkIHRvLWRvIGl0ZW1zXG5sZXQgdGFza0Zvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwidC1mb3JtXCI7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmVcIik7XG5cbiAgbGV0IGZvcm1fX2dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybV9fZ3JvdXAuY2xhc3NMaXN0LmFkZChcImZvcm1fX2dyb3VwXCIpO1xuXG4gIC8vIHRpdGxlIGlucHV0XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dFwiKTtcbiAge1xuICAgIE9iamVjdC5hc3NpZ24odGl0bGVJbnB1dCwge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJ0aXRsZVwiLFxuICAgICAgaWQ6IFwidGl0bGVcIixcbiAgICAgIHJlcXVpcmVkOiBcIiBcIixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIGlucHV0XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dFwiKTtcbiAgT2JqZWN0LmFzc2lnbihkZXNjcmlwdGlvbklucHV0LCB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiZGVzY3JpcHRpb25cIixcbiAgICBpZDogXCJkZXNjcmlwdGlvblwiLFxuICB9KTtcblxuICAvLyBub3RlcyB0ZXh0Ym94XG5cbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIE9iamVjdC5hc3NpZ24obm90ZXNJbnB1dCwge1xuICAgIGlkOiBcIm5vdGVzXCIsXG4gICAgbmFtZTogXCJub3Rlc1wiLFxuICAgIGNvbHM6IFwiNDBcIixcbiAgICByb3dzOiBcIjNcIixcbiAgICBwbGFjZWhvbGRlcjogXCJub3Rlc1wiLFxuICB9KTtcblxuICAvLyBwcmlvcml0eSBkcm9wZG93blxuICBsZXQgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3RJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBzZWxlY3RJbnB1dC5vcHRpb25zW3NlbGVjdElucHV0Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgXCJsaWZlIG9yIGRlYXRoXCIsXG4gICAgXCJsaWZlIG9yIGRlYXRoXCJcbiAgKTtcbiAgc2VsZWN0SW5wdXQub3B0aW9uc1tzZWxlY3RJbnB1dC5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgIFwiaXQgY2FuIHdhaXRcIixcbiAgICBcIml0IGNhbiB3YWl0XCJcbiAgKTtcbiAgc2VsZWN0SW5wdXQub3B0aW9uc1tzZWxlY3RJbnB1dC5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgIFwiYWxsIG5pZ2h0ZXJcIixcbiAgICBcImFsbCBuaWdodGVyXCJcbiAgKTtcblxuICAvLyBkYXRlIGlucHV0XG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIE9iamVjdC5hc3NpZ24oZGF0ZUlucHV0LCB7XG4gICAgdHlwZTogXCJkYXRlXCIsXG4gICAgbmFtZTogXCJkYXRlXCIsXG4gICAgaWQ6IFwiZGF0ZVwiLFxuICB9KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiY3JlYXRlIHRhc2tcIjtcblxuICBmb3JtX19ncm91cC5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIG5vdGVzSW5wdXQsXG4gICAgc2VsZWN0SW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGJ0blxuICApO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1fX2dyb3VwKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufTtcblxuLy9DcmVhdGUgZm9ybSB0byBjcmVhdGUgcHJvamVjdHNcbmxldCBwcm9qZWN0Rm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJwLWZvcm0tbW9kYWxcIik7XG4gIHByb2plY3RGb3JtTW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmlkID0gXCJwLWZvcm1cIjtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RuYW1lXCIpO1xuICAvLyBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMDAlXCIpO1xuICBsYWJlbC5pbm5lclRleHQgPSBcInByb2plY3QgbmFtZVwiO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RuYW1lXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RuYW1lXCIpO1xuXG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInAtZm9ybS1idG5cIik7XG4gIGJ0bi5pbm5lclRleHQgPSBcImFkZFwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybU1vZGFsKTtcbiAgcHJvamVjdEZvcm1Nb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0LCBidG4pO1xufTtcbmV4cG9ydCB7IGluaXRpYWxpemUgfTtcbiIsIi8vTWFrZXMgaW5wdXQgdmlzaWJsZS9pbnZpc2libGVcbmxldCB2aXNpYmlsaXR5ID0gKG1vZGFsKSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCJcbiAgICA/IChtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKVxuICAgIDogKG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIik7XG59O1xuLy9CbHVyJ3MgdGFzayBjb250YWluZXJcbmxldCBibHVyVGFza3MgPSAodGFza0xpc3QpID0+IHtcbiAgdGFza0xpc3Quc3R5bGUuZmlsdGVyID09IFwiXCJcbiAgICA/ICh0YXNrTGlzdC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMXB4KVwiKVxuICAgIDogKHRhc2tMaXN0LnN0eWxlLmZpbHRlciA9IFwiXCIpO1xufTtcbi8vUmVtb3ZlcyBjdXJyZW50bHkgYWN0aXZlIHByb2plY3Qgc3R5bGluZ1xubGV0IHNlbGVjdG9yID0gKCkgPT4ge1xuICBsZXQgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua1wiKTtcbiAgci5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICByZXN1bHQuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdmlzaWJpbGl0eSwgYmx1clRhc2tzLCBzZWxlY3RvciB9O1xuIiwiY2xhc3MgdG9EbyB7XG4gIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICB0aGlzLnRpdGxlID0gZm9ybS50aXRsZS52YWx1ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB0aGlzLmRhdGUgPSBmb3JtLmRhdGUudmFsdWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IGZvcm0ucHJpb3JpdHkudmFsdWU7XG4gICAgdGhpcy5ub3RlcyA9IGZvcm0ubm90ZXMudmFsdWU7XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuXG4gIHNldCBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlRGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgc2V0IGNoYW5nZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlUHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgc2V0IGNoYW5nZU5vdGVzKHZhbHVlKSB7XG4gICAgdGhpcy5ub3RlcyA9IHZhbHVlO1xuICB9XG59XG4vLyBjbGFzcyB0b0RvIHtcbi8vICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbi8vICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuLy8gICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4vLyAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgIHRoaXMubm90ZXMgPSBub3Rlcztcbi8vICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuLy8gICB9XG4vL1xuLy8gICBzZXQgY2hhbmdlVGl0bGUodmFsdWUpIHtcbi8vICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4vLyAgIH1cbi8vICAgc2V0IGNoYW5nZURlc2NyaXB0aW9uKHZhbHVlKSB7XG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuLy8gICB9XG4vLyAgIHNldCBjaGFuZ2VEYXRlKHZhbHVlKSB7XG4vLyAgICAgdGhpcy5kYXRlID0gdmFsdWU7XG4vLyAgIH1cbi8vICAgc2V0IGNoYW5nZVByaW9yaXR5KHZhbHVlKSB7XG4vLyAgICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuLy8gICB9XG4vLyAgIHNldCBjaGFuZ2VOb3Rlcyh2YWx1ZSkge1xuLy8gICAgIHRoaXMubm90ZXMgPSB2YWx1ZTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgeyB0b0RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
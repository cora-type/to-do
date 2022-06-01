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



let createProject = (sidebarContainer, name, list, taskContainer) => {
  //create the project element
  let button = document.createElement("button");
  button.classList.add("link", "link--ersa");
  button.id = name;
  button.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  button.addEventListener("click", function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");
    this.classList.add("active");
    let j = document.querySelectorAll(".task");
    j.forEach((task) => {
      task.remove();
    });
    (0,_styleHelper__WEBPACK_IMPORTED_MODULE_1__.selector)();
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
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


let createTask = (container, object, id) => {
  let task = document.createElement("div");
  task.classList.add("task");

  container.appendChild(task);

  let checkbox = document.createElement("input");
  checkbox.id = id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", id);

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
/* harmony export */   "displayUpdate": () => (/* binding */ displayUpdate)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


let displayUpdate = (list, project, container) => {
  list[project].forEach((result, id) => {
    var myEle = document.getElementById(id); //if the task already exists, ignore
    if (!myEle) {
      (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(container, result, id);
    }
  });
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
  form.style.visibility = "hidden";

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

  let form = document.createElement("form");
  form.id = "p-form";
  form.setAttribute("style", "visibility: hidden;");

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
//helper functions
let visibility = (modal) => {
  modal.style.visibility == "hidden"
    ? (modal.style.visibility = "visible")
    : (modal.style.visibility = "hidden");
};
let blurTasks = (taskList) => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
//changes current project selection
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
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _displayUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayUpdate */ "./src/displayUpdate.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _styleHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styleHelper */ "./src/styleHelper.js");
// document.addEventListener("DOMContentLoaded", function () {}







(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.initialize)(document.body);

let tasks = { unsorted: [] };

let createProjectBtn = document.querySelector(".create-project-btn");
let projectForm = document.getElementById("p-form");
let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
let taskDisplay = document.querySelector(".task-display");

let sidebarContainer = document.querySelector(".sidebar");
let unsorted = document.getElementById("unsorted");
let allTasks = document.getElementById("all");

//form handlers
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.blurTasks)(taskDisplay);
  if (projectForm.projectname.value) {
    tasks[projectForm.projectname.value] = []; //create a project key
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.createProject)(sidebarContainer, projectForm.projectname.value, tasks, taskDisplay);
  }
  projectForm.projectname.value = "";
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.visibility)(e.target);
});

taskForm.addEventListener("submit", function (e) {
  let active = document.querySelector(".active"); //get currently active project
  e.preventDefault();
  let task = new _toDo__WEBPACK_IMPORTED_MODULE_2__.toDo(taskForm); //create a new task from form
  tasks[active.id].push(task); // get current project key from id, add to list
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdate)(tasks, active.id, taskDisplay);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.visibility)(e.target);
  console.log(tasks);
});

//load default project tasks
unsorted.addEventListener("click", function () {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  this.classList.add("active");
  let j = document.querySelectorAll(".task");
  j.forEach((task) => {
    task.remove();
  });
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.selector)();
  this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdate)(tasks, "unsorted", taskDisplay);
});
allTasks.addEventListener("click", function () {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  unsorted.classList.add("active");
  let j = document.querySelectorAll(".task");
  j.forEach((task) => {
    task.remove();
  });
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.selector)();
  this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  Object.keys(tasks).forEach((key) => {
    (0,_displayUpdate__WEBPACK_IMPORTED_MODULE_4__.displayUpdate)(tasks, key, taskDisplay);
  });
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.visibility)(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.visibility)(projectForm);
  (0,_styleHelper__WEBPACK_IMPORTED_MODULE_6__.blurTasks)(taskDisplay);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLFNBQVMsWUFBWSxhQUFhLE1BQU0sUUFBUSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRGhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQjtBQUNrQjtBQUNWO0FBQ2tCO0FBQ0E7QUFDTjtBQUNzQjtBQUNoRSxxREFBVTs7QUFFVixjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVM7QUFDWDtBQUNBLCtDQUErQztBQUMvQyxJQUFJLDZEQUFhO0FBQ2pCO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLGlCQUFpQix1Q0FBSSxZQUFZO0FBQ2pDLCtCQUErQjtBQUMvQixFQUFFLDZEQUFhO0FBQ2YsRUFBRSx3REFBVTtBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsc0RBQVE7QUFDVix3REFBd0QsaUJBQWlCO0FBQ3pFLEVBQUUsNkRBQWE7QUFDZixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxzREFBUTtBQUNWLHdEQUF3RCxpQkFBaUI7QUFDekU7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1osRUFBRSx1REFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5VXBkYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlSGVscGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyAqL1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggOTAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMWZyIDFmcjtcXG59XFxuLmhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvNS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaGVhZGluZy1zdGF0dXMge1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogMi8yLzUvMztcXG4gIGJvcmRlcjogMTBweDtcXG59XFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWVkaXQge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjOTk5O1xcbn1cXG5cXG4ucC1mb3JtLW1vZGFsIHtcXG4gIGdyaWQtYXJlYTogMi8yLzQvMztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuI3AtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnByb2plY3RuYW1lIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLyogc3VibWl0IHByb2plY3QgYnRuIHN0eWxpbmcgKi9cXG5cXG4vKiBGcm9tIHVpdmVyc2UuaW8gYnkgQGtpcnUyNzQxICovXFxuLnAtZm9ybS1idG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnAtZm9ybS1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiYWRkXFxcIjtcXG4gIC8qQnV0dG9uJ3MgdmFsdWUvdGV4dC1jb250ZW50ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNCU7XFxuICBsZWZ0OiA3JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnAtZm9ybS1idG46aG92ZXI6OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4vKiBjcmVhdGUtcHJvamVjdC1idG4gc3R5bGluZyAqL1xcblxcbi8qIEZyb20gdWl2ZXJzZS5pbyBieSBAY3VhdHJvZmVuZGVyICovXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM3NjdiODA7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDEwNywgMTc5LCAwLjIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyOmJlZm9yZSB7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xcbn1cXG5cXG4vKiBzaWRlYmFyIGxpbmsgc3R5bGluZyAqL1xcblxcbi5saW5rIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmxpbms6OmJlZm9yZSxcXG4ubGluazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmxpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC8qIHNob3cgYnkgZGVmYXVsdCAqL1xcbn1cXG5cXG4ubGluay0tZXJzYSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1pbmRlbnQ6IDFweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saW5rLS1lcnNhOjpiZWZvcmUge1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMSwgMC44LCAxKTtcXG59XFxuXFxuLmxpbmstLWVyc2E6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxufVxcblxcbi8qIGFkZCBidXR0b24gc3R5bGluZyAqL1xcblxcbi5jcmVhdGUtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyJSkgMCAxcHggM3B4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogY2FsYygwLjU3NXJlbSAtIDFweCkgY2FsYygxcmVtIC0gMXB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjpob3ZlcixcXG4uY3JlYXRlLXRhc2stYnRuOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwIDJweCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLyogZm9ybSBzdHlsZXMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLzMvNC80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwMHB4LCAwKTtcXG4gIGFuaW1hdGlvbjogYXJyaXZlIDUwMG1zIGVhc2UtaW4tb3V0IDAuOXMgZm9yd2FyZHM7XFxufVxcblxcbi5mb3JtX19ncm91cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuI25vdGVzIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG59XFxuXFxuI2RhdGUge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS8zO1xcbn1cXG5cXG4uZm9ybS0tbm8ge1xcbiAgYW5pbWF0aW9uOiBOTyAxcyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLmZvcm1fX2lucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxufVxcblxcbi5idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogIzAwMHJnYigxMSwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgTk8ge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyaXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MHB4LCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIG1vdmUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4vKiBjaGVja2xpc3Qgc3R5bGVzICovXFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgLS10ZXh0OiAjNDE0ODU2O1xcbiAgLS1jaGVjazogIzRmMjlmMDtcXG4gIC0tZGlzYWJsZWQ6ICNjM2M4ZGU7XFxuICAtLWhlaWdodDogNTBweDtcXG4gIC8qIC0td2lkdGg6IDEwMHB4OyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDY1LCA3MiwgODYsIDAuMDUpO1xcbiAgcGFkZGluZzogMTBweCA0NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCA3NSUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOjpiZWZvcmUsXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4udGFzayBsYWJlbDo6YmVmb3JlIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGxlZnQ6IC0yN3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi50YXNrIGxhYmVsOmFmdGVyIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDRweDtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogLTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlLFxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcmlnaHQ6IDYwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgd2lkdGg6IDBweDtcXG4gIGxlZnQ6IDQwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IGNoZWNrLTAxIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxuICBhbmltYXRpb246IGNoZWNrLTAyIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWRpc2FibGVkKTtcXG4gIGFuaW1hdGlvbjogbW92ZSAwLjNzIGVhc2UgMC4xcyBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZCk7XFxuICBhbmltYXRpb246IHNsaWNlIDAuNHMgZWFzZSBmb3J3YXJkcztcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogZmlyZXdvcmsgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICA1MCUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGljZSB7XFxuICA2MCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogNHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAtMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDEge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGVjay0wMiB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZpcmV3b3JrIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCxcXG4gICAgICAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xNXB4IDAgMHB4ICM0ZjI5ZjAsIDE0cHggLThweCAwIDBweCAjNGYyOWYwLCAxNHB4IDhweCAwIDBweCAjNGYyOWYwLFxcbiAgICAgIDAgMTVweCAwIDBweCAjNGYyOWYwLCAtMTRweCA4cHggMCAwcHggIzRmMjlmMCwgLTE0cHggLThweCAwIDBweCAjNGYyOWYwO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQywwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNC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QUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUix3QkFBd0I7RUFDMUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVjtnRUFDNEQ7RUFDOUQ7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWOzZFQUN5RTtFQUMzRTtBQUNGOztBQUVBLHFDQUFxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDkwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDFmciAxZnI7XFxufVxcbi5oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuLmhlYWRpbmctc3RhdHVzIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogMi8xLzUvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmhlYWRpbmctc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IDIvMi81LzM7XFxuICBib3JkZXI6IDEwcHg7XFxufVxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1lZGl0IHtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzk5OTtcXG59XFxuXFxuLnAtZm9ybS1tb2RhbCB7XFxuICBncmlkLWFyZWE6IDIvMi80LzM7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbiNwLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxufVxcblxcbi5wcm9qZWN0bmFtZSB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi8qIHN1Ym1pdCBwcm9qZWN0IGJ0biBzdHlsaW5nICovXFxuXFxuLyogRnJvbSB1aXZlcnNlLmlvIGJ5IEBraXJ1Mjc0MSAqL1xcbi5wLWZvcm0tYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wLWZvcm0tYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcImFkZFxcXCI7XFxuICAvKkJ1dHRvbidzIHZhbHVlL3RleHQtY29udGVudCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTQlO1xcbiAgbGVmdDogNyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wLWZvcm0tYnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLyogY3JlYXRlLXByb2plY3QtYnRuIHN0eWxpbmcgKi9cXG5cXG4vKiBGcm9tIHVpdmVyc2UuaW8gYnkgQGN1YXRyb2ZlbmRlciAqL1xcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNzY3YjgwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAxMDcsIDE3OSwgMC4yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlcjpiZWZvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcXG59XFxuXFxuLyogc2lkZWJhciBsaW5rIHN0eWxpbmcgKi9cXG5cXG4ubGluayB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5saW5rOjpiZWZvcmUsXFxuLmxpbms6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5saW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAvKiBzaG93IGJ5IGRlZmF1bHQgKi9cXG59XFxuXFxuLmxpbmstLWVyc2Ege1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtaW5kZW50OiAxcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubGluay0tZXJzYTo6YmVmb3JlIHtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbn1cXG5cXG4ubGluay0tZXJzYSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDEsIDAuOCwgMSk7XFxufVxcblxcbi5saW5rLS1lcnNhOmhvdmVyIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbn1cXG5cXG4vKiBhZGQgYnV0dG9uIHN0eWxpbmcgKi9cXG5cXG4uY3JlYXRlLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMiUpIDAgMXB4IDNweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IGNhbGMoMC41NzVyZW0gLSAxcHgpIGNhbGMoMXJlbSAtIDFweCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIsXFxuLmNyZWF0ZS10YXNrLWJ0bjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMCA0cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMCAycHggNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi8qIGZvcm0gc3R5bGVzICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8zLzQvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MDBweCwgMCk7XFxuICBhbmltYXRpb246IGFycml2ZSA1MDBtcyBlYXNlLWluLW91dCAwLjlzIGZvcndhcmRzO1xcbn1cXG5cXG4uZm9ybV9fZ3JvdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxufVxcblxcbiNub3RlcyB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxufVxcblxcbiNkYXRlIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvMztcXG59XFxuXFxuLmZvcm0tLW5vIHtcXG4gIGFuaW1hdGlvbjogTk8gMXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5mb3JtX19pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICMwMDByZ2IoMTEsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIE5PIHtcXG4gIGZyb20sXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG4gIDEwJSxcXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSxcXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLFxcbiAgNDAlLFxcbiAgNjAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFycml2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTBweCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG59XFxuXFxuLyogY2hlY2tsaXN0IHN0eWxlcyAqL1xcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIC0tdGV4dDogIzQxNDg1NjtcXG4gIC0tY2hlY2s6ICM0ZjI5ZjA7XFxuICAtLWRpc2FibGVkOiAjYzNjOGRlO1xcbiAgLS1oZWlnaHQ6IDUwcHg7XFxuICAvKiAtLXdpZHRoOiAxMDBweDsgKi9cXG4gIC0tYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg2NSwgNzIsIDg2LCAwLjA1KTtcXG4gIHBhZGRpbmc6IDEwcHggNDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggNzUlIDIwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG4udGFzayBsYWJlbDo6YmVmb3JlLFxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnRhc2sgbGFiZWw6OmJlZm9yZSB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBsZWZ0OiAtMjdweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbn1cXG4udGFzayBsYWJlbDphZnRlciB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHdpZHRoOiA0cHg7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IC0yNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSxcXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMnB4O1xcbiAgdG9wOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgd2lkdGg6IDBweDtcXG4gIHJpZ2h0OiA2MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXG4gIHdpZHRoOiAwcHg7XFxuICBsZWZ0OiA0MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG59XFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBjaGVjay0wMSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBjaGVjay0wMiAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1kaXNhYmxlZCk7XFxuICBhbmltYXRpb246IG1vdmUgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xcbiAgYW5pbWF0aW9uOiBzbGljZSAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBhbmltYXRpb246IGZpcmV3b3JrIDAuNXMgZWFzZSBmb3J3YXJkcyAwLjFzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmUge1xcbiAgNTAlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpY2Uge1xcbiAgNjAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDRweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogLTJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoZWNrLTAxIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MSUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMDIge1xcbiAgMCUge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICB0b3A6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHRvcDogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICB0b3A6IDhweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmaXJld29yayB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIC0ycHggIzRmMjlmMCwgMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsXFxuICAgICAgMCAwIDAgLTJweCAjNGYyOWYwLCAwIDAgMCAtMnB4ICM0ZjI5ZjAsIDAgMCAwIC0ycHggIzRmMjlmMDtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMTVweCAwIDBweCAjNGYyOWYwLCAxNHB4IC04cHggMCAwcHggIzRmMjlmMCwgMTRweCA4cHggMCAwcHggIzRmMjlmMCxcXG4gICAgICAwIDE1cHggMCAwcHggIzRmMjlmMCwgLTE0cHggOHB4IDAgMHB4ICM0ZjI5ZjAsIC0xNHB4IC04cHggMCAwcHggIzRmMjlmMDtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheVVwZGF0ZSB9IGZyb20gXCIuL2Rpc3BsYXlVcGRhdGVcIjtcbmltcG9ydCB7IHNlbGVjdG9yIH0gZnJvbSBcIi4vc3R5bGVIZWxwZXJcIjtcblxubGV0IGNyZWF0ZVByb2plY3QgPSAoc2lkZWJhckNvbnRhaW5lciwgbmFtZSwgbGlzdCwgdGFza0NvbnRhaW5lcikgPT4ge1xuICAvL2NyZWF0ZSB0aGUgcHJvamVjdCBlbGVtZW50XG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImxpbmtcIiwgXCJsaW5rLS1lcnNhXCIpO1xuICBidXR0b24uaWQgPSBuYW1lO1xuICBidXR0b24uaW5uZXJUZXh0ID0gbmFtZTtcblxuICAvL2lmIHByb2plY3QgaXMgY2xpY2tlZCwgaGlnaGxpZ2h0IGFuZCB1cGRhdGUgdGhlIGxpc3Qgb2YgdGFza3NcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBsZXQgaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgICBqLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgc2VsZWN0b3IoKTtcbiAgICB0aGlzLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcbiAgICBkaXNwbGF5VXBkYXRlKGxpc3QsIG5hbWUsIHRhc2tDb250YWluZXIpO1xuICB9KTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdC5zdmdcIjtcblxubGV0IGNyZWF0ZVRhc2sgPSAoY29udGFpbmVyLCBvYmplY3QsIGlkKSA9PiB7XG4gIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC5pZCA9IGlkO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGlkKTtcblxuICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XG4gIGxhYmVsLmlubmVyVGV4dCA9IG9iamVjdC50aXRsZTtcbiAgdGFzay5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2staW5mb1wiKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgbGV0IGVkaXRTVkcgPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdFNWRy5zcmMgPSBlZGl0O1xuICBlZGl0U1ZHLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDE1JTtcIik7XG4gIGVkaXRTVkcuY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdFwiKTtcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQoZWRpdFNWRyk7XG5cbiAgbGV0IHRhc2tUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1RpbWUuY2xhc3NMaXN0LmFkZChcInRhc2stdGltZVwiKTtcbiAgdGFza1RpbWUuaW5uZXJUZXh0ID0gXCIyIGRheXNcIjtcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RpbWUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxubGV0IGRpc3BsYXlVcGRhdGUgPSAobGlzdCwgcHJvamVjdCwgY29udGFpbmVyKSA9PiB7XG4gIGxpc3RbcHJvamVjdF0uZm9yRWFjaCgocmVzdWx0LCBpZCkgPT4ge1xuICAgIHZhciBteUVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgLy9pZiB0aGUgdGFzayBhbHJlYWR5IGV4aXN0cywgaWdub3JlXG4gICAgaWYgKCFteUVsZSkge1xuICAgICAgY3JlYXRlVGFzayhjb250YWluZXIsIHJlc3VsdCwgaWQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5VXBkYXRlIH07XG4iLCJpbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0LnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxubGV0IGluaXRpYWxpemUgPSAoY29udGFpbmVyKSA9PiB7XG4gIGhlYWRlcnMoY29udGFpbmVyKTtcbiAgc2lkZWJhcnMoY29udGFpbmVyKTtcbiAgdGFza3MoY29udGFpbmVyKTtcbiAgdGFza0Zvcm0oY29udGFpbmVyKTtcbiAgcHJvamVjdEZvcm0oY29udGFpbmVyKTtcbn07XG5cbi8vQ3JlYXRlIGhlYWRlci5cbmxldCBoZWFkZXJzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFkaW5nU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgaGVhZGluZ1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiLCBcImhlYWRpbmctc3RhdHVzXCIpO1xuICBoZWFkaW5nVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIiwgXCJoZWFkaW5nLXRpdGxlXCIpO1xuXG4gIGhlYWRpbmdTdGF0dXMuaW5uZXJUZXh0ID0gXCJub3RoaW5nIFwiO1xuICBoZWFkaW5nVGl0bGUuaW5uZXJUZXh0ID0gXCJ0byBkb1wiO1xuICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50LCBhbmQgYXBwZW5kIHBhcmVudCB0byBjb250YWluZXJcbiAgaGVhZGluZy5hcHBlbmQoaGVhZGluZ1N0YXR1cywgaGVhZGluZ1RpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkaW5nKTtcbn07XG5cbi8vQ3JlYXRlIHNpZGViYXIuXG5sZXQgc2lkZWJhcnMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHNpZGViYXJBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgc2lkZWJhclVuc29ydGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICBzaWRlYmFyQWxsLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwibGluay0tZXJzYVwiKTtcbiAgc2lkZWJhclVuc29ydGVkLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIFwibGluay0tZXJzYVwiLCBcImFjdGl2ZVwiKTtcblxuICBzaWRlYmFyQWxsLmlkID0gXCJhbGxcIjtcbiAgc2lkZWJhclVuc29ydGVkLmlkID0gXCJ1bnNvcnRlZFwiO1xuXG4gIHNpZGViYXJBbGwuaW5uZXJUZXh0ID0gXCJhbGwgdGFza3NcIjtcbiAgc2lkZWJhclVuc29ydGVkLmlubmVyVGV4dCA9IFwidW5zb3J0ZWRcIjtcbiAgc2lkZWJhclVuc29ydGVkLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcblxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyQWxsLCBzaWRlYmFyVW5zb3J0ZWQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgbGV0IGJyZWFrTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgYnJlYWtMaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6NTAlO3RleHQtYWxpZ246bGVmdDttYXJnaW4tbGVmdDowXCIpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGJyZWFrTGluZSk7XG5cbiAgbGV0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtcHJvamVjdC1idG5cIik7XG4gIGNyZWF0ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCIgY3JlYXRlIHByb2plY3RcIjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnRuKTtcbn07XG5cbi8vQ3JlYXRlIHRhc2sgY29udGFpbmVyLlxubGV0IHRhc2tzID0gKGNvbnRhaW5lcikgPT4ge1xuICBsZXQgdGFza2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza2xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXRhc2stYnRuXCIpO1xuXG4gIGFkZEJ0bi5pbm5lclRleHQgPSBcIitcIjtcblxuICBidG4uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgdGFza2xpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tsaXN0KTtcbn07XG5cbi8vQ3JlYXRlIGZvcm0gdG8gYWRkIHRvLWRvIGl0ZW1zXG5sZXQgdGFza0Zvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwidC1mb3JtXCI7XG4gIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgbGV0IGZvcm1fX2dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybV9fZ3JvdXAuY2xhc3NMaXN0LmFkZChcImZvcm1fX2dyb3VwXCIpO1xuXG4gIC8vIHRpdGxlIGlucHV0XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dFwiKTtcbiAge1xuICAgIE9iamVjdC5hc3NpZ24odGl0bGVJbnB1dCwge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJ0aXRsZVwiLFxuICAgICAgaWQ6IFwidGl0bGVcIixcbiAgICAgIHJlcXVpcmVkOiBcIiBcIixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIGlucHV0XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dFwiKTtcbiAgT2JqZWN0LmFzc2lnbihkZXNjcmlwdGlvbklucHV0LCB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiZGVzY3JpcHRpb25cIixcbiAgICBpZDogXCJkZXNjcmlwdGlvblwiLFxuICB9KTtcblxuICAvLyBub3RlcyB0ZXh0Ym94XG5cbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIE9iamVjdC5hc3NpZ24obm90ZXNJbnB1dCwge1xuICAgIGlkOiBcIm5vdGVzXCIsXG4gICAgbmFtZTogXCJub3Rlc1wiLFxuICAgIGNvbHM6IFwiNDBcIixcbiAgICByb3dzOiBcIjNcIixcbiAgICBwbGFjZWhvbGRlcjogXCJub3Rlc1wiLFxuICB9KTtcblxuICAvLyBwcmlvcml0eSBkcm9wZG93blxuICBsZXQgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3RJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBzZWxlY3RJbnB1dC5vcHRpb25zW3NlbGVjdElucHV0Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgXCJsaWZlIG9yIGRlYXRoXCIsXG4gICAgXCJsaWZlIG9yIGRlYXRoXCJcbiAgKTtcbiAgc2VsZWN0SW5wdXQub3B0aW9uc1tzZWxlY3RJbnB1dC5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgIFwiaXQgY2FuIHdhaXRcIixcbiAgICBcIml0IGNhbiB3YWl0XCJcbiAgKTtcbiAgc2VsZWN0SW5wdXQub3B0aW9uc1tzZWxlY3RJbnB1dC5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgIFwiYWxsIG5pZ2h0ZXJcIixcbiAgICBcImFsbCBuaWdodGVyXCJcbiAgKTtcblxuICAvLyBkYXRlIGlucHV0XG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIE9iamVjdC5hc3NpZ24oZGF0ZUlucHV0LCB7XG4gICAgdHlwZTogXCJkYXRlXCIsXG4gICAgbmFtZTogXCJkYXRlXCIsXG4gICAgaWQ6IFwiZGF0ZVwiLFxuICB9KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiY3JlYXRlIHRhc2tcIjtcblxuICBmb3JtX19ncm91cC5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIG5vdGVzSW5wdXQsXG4gICAgc2VsZWN0SW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGJ0blxuICApO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1fX2dyb3VwKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xufTtcblxuLy9DcmVhdGUgZm9ybSB0byBjcmVhdGUgcHJvamVjdHNcbmxldCBwcm9qZWN0Rm9ybSA9IChjb250YWluZXIpID0+IHtcbiAgbGV0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJwLWZvcm0tbW9kYWxcIik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwicC1mb3JtXCI7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiBoaWRkZW47XCIpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdG5hbWVcIik7XG4gIC8vIGxhYmVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDEwMCVcIik7XG4gIGxhYmVsLmlubmVyVGV4dCA9IFwicHJvamVjdCBuYW1lXCI7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdG5hbWVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdG5hbWVcIik7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicC1mb3JtLWJ0blwiKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiYWRkXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtTW9kYWwpO1xuICBwcm9qZWN0Rm9ybU1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQsIGJ0bik7XG59O1xuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIiwiLy9oZWxwZXIgZnVuY3Rpb25zXG5sZXQgdmlzaWJpbGl0eSA9IChtb2RhbCkgPT4ge1xuICBtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCJcbiAgICA/IChtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpXG4gICAgOiAobW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIpO1xufTtcbmxldCBibHVyVGFza3MgPSAodGFza0xpc3QpID0+IHtcbiAgdGFza0xpc3Quc3R5bGUuZmlsdGVyID09IFwiXCJcbiAgICA/ICh0YXNrTGlzdC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMXB4KVwiKVxuICAgIDogKHRhc2tMaXN0LnN0eWxlLmZpbHRlciA9IFwiXCIpO1xufTtcbi8vY2hhbmdlcyBjdXJyZW50IHByb2plY3Qgc2VsZWN0aW9uXG5sZXQgc2VsZWN0b3IgPSAoKSA9PiB7XG4gIGxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rXCIpO1xuICByLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIHJlc3VsdC5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB2aXNpYmlsaXR5LCBibHVyVGFza3MsIHNlbGVjdG9yIH07XG4iLCJjbGFzcyB0b0RvIHtcbiAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgIHRoaXMudGl0bGUgPSBmb3JtLnRpdGxlLnZhbHVlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgIHRoaXMuZGF0ZSA9IGZvcm0uZGF0ZS52YWx1ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gZm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgICB0aGlzLm5vdGVzID0gZm9ybS5ub3Rlcy52YWx1ZTtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG5cbiAgc2V0IGNoYW5nZVRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICB9XG4gIHNldCBjaGFuZ2VEZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHNldCBjaGFuZ2VQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBzZXQgY2hhbmdlTm90ZXModmFsdWUpIHtcbiAgICB0aGlzLm5vdGVzID0gdmFsdWU7XG4gIH1cbn1cbi8vIGNsYXNzIHRvRG8ge1xuLy8gICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuLy8gICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbi8vICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4vLyAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbi8vICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4vLyAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuLy8gICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4vLyAgIH1cbi8vXG4vLyAgIHNldCBjaGFuZ2VUaXRsZSh2YWx1ZSkge1xuLy8gICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbi8vICAgfVxuLy8gICBzZXQgY2hhbmdlRGVzY3JpcHRpb24odmFsdWUpIHtcbi8vICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4vLyAgIH1cbi8vICAgc2V0IGNoYW5nZURhdGUodmFsdWUpIHtcbi8vICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbi8vICAgfVxuLy8gICBzZXQgY2hhbmdlUHJpb3JpdHkodmFsdWUpIHtcbi8vICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4vLyAgIH1cbi8vICAgc2V0IGNoYW5nZU5vdGVzKHZhbHVlKSB7XG4vLyAgICAgdGhpcy5ub3RlcyA9IHZhbHVlO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCB7IHRvRG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7fVxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCB7IHRvRG8gfSBmcm9tIFwiLi90b0RvXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVVwZGF0ZSB9IGZyb20gXCIuL2Rpc3BsYXlVcGRhdGVcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyB2aXNpYmlsaXR5LCBibHVyVGFza3MsIHNlbGVjdG9yIH0gZnJvbSBcIi4vc3R5bGVIZWxwZXJcIjtcbmluaXRpYWxpemUoZG9jdW1lbnQuYm9keSk7XG5cbmxldCB0YXNrcyA9IHsgdW5zb3J0ZWQ6IFtdIH07XG5cbmxldCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1idG5cIik7XG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAtZm9ybVwiKTtcbmxldCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1idG5cIik7XG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInQtZm9ybVwiKTtcbmxldCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuXG5sZXQgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbmxldCB1bnNvcnRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5zb3J0ZWRcIik7XG5sZXQgYWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFwiKTtcblxuLy9mb3JtIGhhbmRsZXJzXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYmx1clRhc2tzKHRhc2tEaXNwbGF5KTtcbiAgaWYgKHByb2plY3RGb3JtLnByb2plY3RuYW1lLnZhbHVlKSB7XG4gICAgdGFza3NbcHJvamVjdEZvcm0ucHJvamVjdG5hbWUudmFsdWVdID0gW107IC8vY3JlYXRlIGEgcHJvamVjdCBrZXlcbiAgICBjcmVhdGVQcm9qZWN0KHNpZGViYXJDb250YWluZXIsIHByb2plY3RGb3JtLnByb2plY3RuYW1lLnZhbHVlLCB0YXNrcywgdGFza0Rpc3BsYXkpO1xuICB9XG4gIHByb2plY3RGb3JtLnByb2plY3RuYW1lLnZhbHVlID0gXCJcIjtcbiAgdmlzaWJpbGl0eShlLnRhcmdldCk7XG59KTtcblxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7IC8vZ2V0IGN1cnJlbnRseSBhY3RpdmUgcHJvamVjdFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0YXNrID0gbmV3IHRvRG8odGFza0Zvcm0pOyAvL2NyZWF0ZSBhIG5ldyB0YXNrIGZyb20gZm9ybVxuICB0YXNrc1thY3RpdmUuaWRdLnB1c2godGFzayk7IC8vIGdldCBjdXJyZW50IHByb2plY3Qga2V5IGZyb20gaWQsIGFkZCB0byBsaXN0XG4gIGRpc3BsYXlVcGRhdGUodGFza3MsIGFjdGl2ZS5pZCwgdGFza0Rpc3BsYXkpO1xuICB2aXNpYmlsaXR5KGUudGFyZ2V0KTtcbiAgY29uc29sZS5sb2codGFza3MpO1xufSk7XG5cbi8vbG9hZCBkZWZhdWx0IHByb2plY3QgdGFza3NcbnVuc29ydGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbGV0IGogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIGouZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2sucmVtb3ZlKCk7XG4gIH0pO1xuICBzZWxlY3RvcigpO1xuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtcIjtcbiAgZGlzcGxheVVwZGF0ZSh0YXNrcywgXCJ1bnNvcnRlZFwiLCB0YXNrRGlzcGxheSk7XG59KTtcbmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHVuc29ydGVkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGxldCBqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICBqLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLnJlbW92ZSgpO1xuICB9KTtcbiAgc2VsZWN0b3IoKTtcbiAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gXCJib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmF5O2ZvbnQtd2VpZ2h0OmJvbGQ7XCI7XG4gIE9iamVjdC5rZXlzKHRhc2tzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkaXNwbGF5VXBkYXRlKHRhc2tzLCBrZXksIHRhc2tEaXNwbGF5KTtcbiAgfSk7XG59KTtcblxuLy9tYWtlIHRhc2sgZm9ybSB2aXNpYmxlXG5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHZpc2liaWxpdHkodGFza0Zvcm0pO1xufSk7XG4vL21ha2UgcHJvamVjdCBmb3JtIHZpc2libGVcbmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmlzaWJpbGl0eShwcm9qZWN0Rm9ybSk7XG4gIGJsdXJUYXNrcyh0YXNrRGlzcGxheSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
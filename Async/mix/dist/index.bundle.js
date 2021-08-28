/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _promisesFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promisesFetch.js */ \"./src/promisesFetch.js\");\n/* harmony import */ var _promisesFetch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_promisesFetch_js__WEBPACK_IMPORTED_MODULE_0__);\n// choose one/more of the imports below\r\n\r\n// import * as basic from './basic.js';\r\n// import * as callbacks from './callback.js';\r\n// import * as promises from './promises.js';\r\n// import * as promises from './promisesAll.js';\r\n\r\n// import * as async from './async.js';\r\n// import * as async from './asyncFetch.js';\r\n\n\n//# sourceURL=webpack://traversy/./src/index.js?");

/***/ }),

/***/ "./src/promisesFetch.js":
/*!******************************!*\
  !*** ./src/promisesFetch.js ***!
  \******************************/
/***/ (() => {

eval("const posts = [\r\n  {title: 'Post One', body: 'This is post one'},\r\n  {title: 'Post Two', body: 'This is post two'},\r\n];\r\n\r\n\r\nfunction getPosts() {\r\n  setTimeout(() => {\r\n    let output = '';\r\n    posts.forEach((post, index) => {\r\n      output += `<li>${post.title}</li>`;\r\n    });\r\n    document.body.innerHTML = output;\r\n  }, 1000);\r\n}\r\n\r\nfunction createPost(post) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      posts.push(post);\r\n      const error = false; // try change to true\r\n      if(!error) {\r\n        resolve();\r\n      } else {\r\n        reject('Error man, Something went wrong');\r\n      }\r\n    }, 2000);\r\n  });\r\n}\r\n\r\n// Promise.all\r\nconst promise1 = Promise.resolve('Hello World');\r\nconst promise2 = 10;\r\nconst promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));\r\n\r\nconst promise4 = fetch('https://jsonplaceholder.typicode.com/users')\r\n  .then(res => res.json());\r\n\r\nPromise.all(\r\n  [promise1, promise2, promise3, promise4])\r\n  .then((values) => console.log(values));\r\n\n\n//# sourceURL=webpack://traversy/./src/promisesFetch.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
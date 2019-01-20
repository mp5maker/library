/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./importTypes/importStyleOne.js":
/*!***************************************!*\
  !*** ./importTypes/importStyleOne.js ***!
  \***************************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\nconst hello = () => {\r\n    console.log('hello')\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbXBvcnRUeXBlcy9pbXBvcnRTdHlsZU9uZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ltcG9ydFR5cGVzL2ltcG9ydFN0eWxlT25lLmpzPzZmYTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhlbGxvID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./importTypes/importStyleOne.js\n");

/***/ }),

/***/ "./importTypes/importStyleThree.js":
/*!*****************************************!*\
  !*** ./importTypes/importStyleThree.js ***!
  \*****************************************/
/*! exports provided: helloWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helloWorld\", function() { return helloWorld; });\nconst helloWorld = () => {\r\n    console.log('hello world')\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbXBvcnRUeXBlcy9pbXBvcnRTdHlsZVRocmVlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW1wb3J0VHlwZXMvaW1wb3J0U3R5bGVUaHJlZS5qcz82MTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlbGxvV29ybGQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxyXG59XHJcblxyXG5leHBvcnQgeyBoZWxsb1dvcmxkIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./importTypes/importStyleThree.js\n");

/***/ }),

/***/ "./importTypes/importStyleTwo.js":
/*!***************************************!*\
  !*** ./importTypes/importStyleTwo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst world = () => {\r\n    console.log('world');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (world);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbXBvcnRUeXBlcy9pbXBvcnRTdHlsZVR3by5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ltcG9ydFR5cGVzL2ltcG9ydFN0eWxlVHdvLmpzP2M5YjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd29ybGQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnd29ybGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd29ybGQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./importTypes/importStyleTwo.js\n");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _importTypes_importStyleThree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importTypes/importStyleThree */ \"./importTypes/importStyleThree.js\");\n/* harmony import */ var _importTypes_importStyleTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importTypes/importStyleTwo */ \"./importTypes/importStyleTwo.js\");\n/* harmony import */ var _importTypes_importStyleOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importTypes/importStyleOne */ \"./importTypes/importStyleOne.js\");\n// Const [Once declared cannot be changed]\r\nconst fruits = ['apple', 'banana', 'oranges']\r\nconsole.log(fruits)\r\n\r\n// Let [Can be found only in the lexical scope]\r\nlet num = 5\r\nif (num < 10) {\r\n    let num = 10;\r\n    console.log(`Inside the if statement: ${num}`)\r\n} \r\nconsole.log(`Outside the if statement: ${num}`)\r\n\r\n// Compared to Var [Globally available can be changed in lexical scope]\r\nvar numtwo = 7;\r\nif (num < 10) {\r\n    let numtwo = 11;\r\n    console.log(`Inside the if statement: ${numtwo}`)\r\n}\r\nconsole.log(`Outside the if statement: ${numtwo}`)\r\n\r\n// Scope of [i] is protected within loop\r\nlet i = 10;\r\nfor (let i = 0; i < 5; i++) {\r\n    console.log(i);\r\n}\r\nconsole.log(i);\r\n\r\n// Taking default values for javascript\r\nlet defaultPerson = {\r\n    name: {\r\n        first: \"Shane\",\r\n        last: \"McConkey\",\r\n    },\r\n    favActivity: \"skiing\"\r\n}\r\n\r\nfunction logActivity(p=defaultPerson) {\r\n    console.log(`${p.name.first} loves ${p.favActivity}`);\r\n}\r\n\r\nlogActivity();\r\n\r\n// Arrow Function\r\naddition = (numOne, numTwo) => console.log(numOne + numTwo);\r\naddition(3,5)\r\n\r\n// Arrow Function and [this] // It works differently in arrow function\r\nvar tahoes = {\r\n    resorts: [\"Kirkwood\", \"Squaw\", \"Alpine\", \"Heavenly\", \"Northstar\"],\r\n    print: function(delay=1000) {\r\n        setTimeout(() => {\r\n            console.log(this.resorts.join(\",\"))\r\n        }, delay)\r\n    }\r\n}\r\n\r\ntahoes.print()\r\n\r\n// Destructuring Assignment [Objects]\r\nvar sandwich = {\r\n    bread: \"dutch crunch\",\r\n    meat: \"tuna\",\r\n    cheese: \"swiss\",\r\n    toppings: [\"lettuce\", \"tomato\", \"mustard\"]\r\n}\r\n\r\nvar { bread, meat } = sandwich;\r\nconsole.log(bread)\r\nconsole.log(meat)\r\n\r\nvar tastesBetter = ({bread, meat}) => {\r\n    console.log(`I like to have ${meat} with ${bread}`)\r\n}\r\ntastesBetter(sandwich)\r\n\r\n// Destructuring Assignment [Arrays]\r\nvar [firstResort] = [\"Kirwood\", \"Squaw\", \"Alpine\"];\r\nconsole.log(firstResort);\r\n\r\n// Destructuring\r\nvar [,,thirdResort] = [\"Kirword\", \"Squaw\", \"Alpine\"];\r\nconsole.log(thirdResort);\r\n\r\n// Object Literal Enhancement\r\nvar name = \"Tallac\";\r\nvar elevation = 9738;\r\nvar print = function() {\r\n    return `${this.name} is ${this.elevation} feet tall.`;\r\n}\r\nvar funHike = { name, elevation, print };\r\nconsole.log(funHike)\r\nconsole.log(funHike.print())\r\n\r\n// Object Literal Enhancement [New way to write functions]\r\n\r\nvar employeeTwo = {\r\n    name: \"Photon Khan\",\r\n    age: 27,\r\n    print(){\r\n        return `${this.name} is ${this.age}-years-old`\r\n    }\r\n}\r\nconsole.log(employeeTwo.print())\r\n\r\n// The Spread Operator [With Arrays]\r\nvar peaks = ['Tallac', 'Ralston', 'Rose'];\r\nvar canyons = ['Wards', \"Blackword\"]\r\nvar tahoe = [...peaks, ...canyons];\r\nvar [first, ...rest] = [...peaks, ...canyons];\r\n\r\nconsole.log(tahoe)\r\nconsole.log(first)\r\nconsole.log(rest)\r\n\r\nfunction checkTahoe(...args) {\r\n    console.log(args)\r\n}\r\ncheckTahoe(...peaks, ...canyons)\r\n\r\n// The Spread Operator with [With Objects]\r\nvar person = {\r\n    age: \"27\",\r\n    salary: \"25000\"\r\n}\r\n\r\n\r\nvar salesman = {\r\n    ...person,\r\n    name: \"Shabuktagin Photon Khan\"\r\n}\r\n\r\nconsole.log(salesman)\r\n\r\n\r\n// Promises\r\nconst readText = () => new Promise((resolve, reject) => {\r\n    const url = 'some.txt';\r\n    const request = new XMLHttpRequest()\r\n    request.open('GET', url, true)\r\n    request.send()\r\n    request.onload = () => {\r\n        if (request.status == 200) {\r\n            resolve(request.response)\r\n        } else {\r\n            reject(\"Something seems to be wrong\")\r\n        }\r\n    }\r\n}) \r\n\r\nreadText().then(response => console.log(response)).catch(error => error)\r\n\r\n// Classes [Text Capitalize Convention]\r\nclass Vacation {\r\n\r\n    constructor(destination, length) {\r\n        this.destination = destination;\r\n        this.length = length;\r\n    }\r\n\r\n    print() {\r\n        console.log(`${this.destination} will take ${this.length} days.`);\r\n    }\r\n}\r\n\r\nvacation = new Vacation('Mayu', 7)\r\nvacation.print()\r\n\r\n// Expendition [ Vacaction ]\r\nclass Expendition extends Vacation {\r\n    \r\n    constructor(destination, length, gear) {\r\n        super(destination, length);\r\n        this.gear = gear;\r\n    }\r\n\r\n    print() {\r\n        super.print()\r\n        console.log(`Bring your ${this.gear}`)\r\n    }\r\n}\r\n\r\n// React Js Style\r\n\r\n\r\n\r\n\r\n// Common JS\r\n// const { testOne, testTwo } = require('./importTypes/importStyleFour') //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWFpbi5qcz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnN0IFtPbmNlIGRlY2xhcmVkIGNhbm5vdCBiZSBjaGFuZ2VkXVxyXG5jb25zdCBmcnVpdHMgPSBbJ2FwcGxlJywgJ2JhbmFuYScsICdvcmFuZ2VzJ11cclxuY29uc29sZS5sb2coZnJ1aXRzKVxyXG5cclxuLy8gTGV0IFtDYW4gYmUgZm91bmQgb25seSBpbiB0aGUgbGV4aWNhbCBzY29wZV1cclxubGV0IG51bSA9IDVcclxuaWYgKG51bSA8IDEwKSB7XHJcbiAgICBsZXQgbnVtID0gMTA7XHJcbiAgICBjb25zb2xlLmxvZyhgSW5zaWRlIHRoZSBpZiBzdGF0ZW1lbnQ6ICR7bnVtfWApXHJcbn0gXHJcbmNvbnNvbGUubG9nKGBPdXRzaWRlIHRoZSBpZiBzdGF0ZW1lbnQ6ICR7bnVtfWApXHJcblxyXG4vLyBDb21wYXJlZCB0byBWYXIgW0dsb2JhbGx5IGF2YWlsYWJsZSBjYW4gYmUgY2hhbmdlZCBpbiBsZXhpY2FsIHNjb3BlXVxyXG52YXIgbnVtdHdvID0gNztcclxuaWYgKG51bSA8IDEwKSB7XHJcbiAgICBsZXQgbnVtdHdvID0gMTE7XHJcbiAgICBjb25zb2xlLmxvZyhgSW5zaWRlIHRoZSBpZiBzdGF0ZW1lbnQ6ICR7bnVtdHdvfWApXHJcbn1cclxuY29uc29sZS5sb2coYE91dHNpZGUgdGhlIGlmIHN0YXRlbWVudDogJHtudW10d299YClcclxuXHJcbi8vIFNjb3BlIG9mIFtpXSBpcyBwcm90ZWN0ZWQgd2l0aGluIGxvb3BcclxubGV0IGkgPSAxMDtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGNvbnNvbGUubG9nKGkpO1xyXG59XHJcbmNvbnNvbGUubG9nKGkpO1xyXG5cclxuLy8gVGFraW5nIGRlZmF1bHQgdmFsdWVzIGZvciBqYXZhc2NyaXB0XHJcbmxldCBkZWZhdWx0UGVyc29uID0ge1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIGZpcnN0OiBcIlNoYW5lXCIsXHJcbiAgICAgICAgbGFzdDogXCJNY0NvbmtleVwiLFxyXG4gICAgfSxcclxuICAgIGZhdkFjdGl2aXR5OiBcInNraWluZ1wiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0FjdGl2aXR5KHA9ZGVmYXVsdFBlcnNvbikge1xyXG4gICAgY29uc29sZS5sb2coYCR7cC5uYW1lLmZpcnN0fSBsb3ZlcyAke3AuZmF2QWN0aXZpdHl9YCk7XHJcbn1cclxuXHJcbmxvZ0FjdGl2aXR5KCk7XHJcblxyXG4vLyBBcnJvdyBGdW5jdGlvblxyXG5hZGRpdGlvbiA9IChudW1PbmUsIG51bVR3bykgPT4gY29uc29sZS5sb2cobnVtT25lICsgbnVtVHdvKTtcclxuYWRkaXRpb24oMyw1KVxyXG5cclxuLy8gQXJyb3cgRnVuY3Rpb24gYW5kIFt0aGlzXSAvLyBJdCB3b3JrcyBkaWZmZXJlbnRseSBpbiBhcnJvdyBmdW5jdGlvblxyXG52YXIgdGFob2VzID0ge1xyXG4gICAgcmVzb3J0czogW1wiS2lya3dvb2RcIiwgXCJTcXVhd1wiLCBcIkFscGluZVwiLCBcIkhlYXZlbmx5XCIsIFwiTm9ydGhzdGFyXCJdLFxyXG4gICAgcHJpbnQ6IGZ1bmN0aW9uKGRlbGF5PTEwMDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNvcnRzLmpvaW4oXCIsXCIpKVxyXG4gICAgICAgIH0sIGRlbGF5KVxyXG4gICAgfVxyXG59XHJcblxyXG50YWhvZXMucHJpbnQoKVxyXG5cclxuLy8gRGVzdHJ1Y3R1cmluZyBBc3NpZ25tZW50IFtPYmplY3RzXVxyXG52YXIgc2FuZHdpY2ggPSB7XHJcbiAgICBicmVhZDogXCJkdXRjaCBjcnVuY2hcIixcclxuICAgIG1lYXQ6IFwidHVuYVwiLFxyXG4gICAgY2hlZXNlOiBcInN3aXNzXCIsXHJcbiAgICB0b3BwaW5nczogW1wibGV0dHVjZVwiLCBcInRvbWF0b1wiLCBcIm11c3RhcmRcIl1cclxufVxyXG5cclxudmFyIHsgYnJlYWQsIG1lYXQgfSA9IHNhbmR3aWNoO1xyXG5jb25zb2xlLmxvZyhicmVhZClcclxuY29uc29sZS5sb2cobWVhdClcclxuXHJcbnZhciB0YXN0ZXNCZXR0ZXIgPSAoe2JyZWFkLCBtZWF0fSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYEkgbGlrZSB0byBoYXZlICR7bWVhdH0gd2l0aCAke2JyZWFkfWApXHJcbn1cclxudGFzdGVzQmV0dGVyKHNhbmR3aWNoKVxyXG5cclxuLy8gRGVzdHJ1Y3R1cmluZyBBc3NpZ25tZW50IFtBcnJheXNdXHJcbnZhciBbZmlyc3RSZXNvcnRdID0gW1wiS2lyd29vZFwiLCBcIlNxdWF3XCIsIFwiQWxwaW5lXCJdO1xyXG5jb25zb2xlLmxvZyhmaXJzdFJlc29ydCk7XHJcblxyXG4vLyBEZXN0cnVjdHVyaW5nXHJcbnZhciBbLCx0aGlyZFJlc29ydF0gPSBbXCJLaXJ3b3JkXCIsIFwiU3F1YXdcIiwgXCJBbHBpbmVcIl07XHJcbmNvbnNvbGUubG9nKHRoaXJkUmVzb3J0KTtcclxuXHJcbi8vIE9iamVjdCBMaXRlcmFsIEVuaGFuY2VtZW50XHJcbnZhciBuYW1lID0gXCJUYWxsYWNcIjtcclxudmFyIGVsZXZhdGlvbiA9IDk3Mzg7XHJcbnZhciBwcmludCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubmFtZX0gaXMgJHt0aGlzLmVsZXZhdGlvbn0gZmVldCB0YWxsLmA7XHJcbn1cclxudmFyIGZ1bkhpa2UgPSB7IG5hbWUsIGVsZXZhdGlvbiwgcHJpbnQgfTtcclxuY29uc29sZS5sb2coZnVuSGlrZSlcclxuY29uc29sZS5sb2coZnVuSGlrZS5wcmludCgpKVxyXG5cclxuLy8gT2JqZWN0IExpdGVyYWwgRW5oYW5jZW1lbnQgW05ldyB3YXkgdG8gd3JpdGUgZnVuY3Rpb25zXVxyXG5cclxudmFyIGVtcGxveWVlVHdvID0ge1xyXG4gICAgbmFtZTogXCJQaG90b24gS2hhblwiLFxyXG4gICAgYWdlOiAyNyxcclxuICAgIHByaW50KCl7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gaXMgJHt0aGlzLmFnZX0teWVhcnMtb2xkYFxyXG4gICAgfVxyXG59XHJcbmNvbnNvbGUubG9nKGVtcGxveWVlVHdvLnByaW50KCkpXHJcblxyXG4vLyBUaGUgU3ByZWFkIE9wZXJhdG9yIFtXaXRoIEFycmF5c11cclxudmFyIHBlYWtzID0gWydUYWxsYWMnLCAnUmFsc3RvbicsICdSb3NlJ107XHJcbnZhciBjYW55b25zID0gWydXYXJkcycsIFwiQmxhY2t3b3JkXCJdXHJcbnZhciB0YWhvZSA9IFsuLi5wZWFrcywgLi4uY2FueW9uc107XHJcbnZhciBbZmlyc3QsIC4uLnJlc3RdID0gWy4uLnBlYWtzLCAuLi5jYW55b25zXTtcclxuXHJcbmNvbnNvbGUubG9nKHRhaG9lKVxyXG5jb25zb2xlLmxvZyhmaXJzdClcclxuY29uc29sZS5sb2cocmVzdClcclxuXHJcbmZ1bmN0aW9uIGNoZWNrVGFob2UoLi4uYXJncykge1xyXG4gICAgY29uc29sZS5sb2coYXJncylcclxufVxyXG5jaGVja1RhaG9lKC4uLnBlYWtzLCAuLi5jYW55b25zKVxyXG5cclxuLy8gVGhlIFNwcmVhZCBPcGVyYXRvciB3aXRoIFtXaXRoIE9iamVjdHNdXHJcbnZhciBwZXJzb24gPSB7XHJcbiAgICBhZ2U6IFwiMjdcIixcclxuICAgIHNhbGFyeTogXCIyNTAwMFwiXHJcbn1cclxuXHJcblxyXG52YXIgc2FsZXNtYW4gPSB7XHJcbiAgICAuLi5wZXJzb24sXHJcbiAgICBuYW1lOiBcIlNoYWJ1a3RhZ2luIFBob3RvbiBLaGFuXCJcclxufVxyXG5cclxuY29uc29sZS5sb2coc2FsZXNtYW4pXHJcblxyXG5cclxuLy8gUHJvbWlzZXNcclxuY29uc3QgcmVhZFRleHQgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnc29tZS50eHQnO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSlcclxuICAgIHJlcXVlc3Quc2VuZCgpXHJcbiAgICByZXF1ZXN0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoXCJTb21ldGhpbmcgc2VlbXMgdG8gYmUgd3JvbmdcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIFxyXG5cclxucmVhZFRleHQoKS50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSkuY2F0Y2goZXJyb3IgPT4gZXJyb3IpXHJcblxyXG4vLyBDbGFzc2VzIFtUZXh0IENhcGl0YWxpemUgQ29udmVudGlvbl1cclxuY2xhc3MgVmFjYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uLCBsZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5kZXN0aW5hdGlvbn0gd2lsbCB0YWtlICR7dGhpcy5sZW5ndGh9IGRheXMuYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhY2F0aW9uID0gbmV3IFZhY2F0aW9uKCdNYXl1JywgNylcclxudmFjYXRpb24ucHJpbnQoKVxyXG5cclxuLy8gRXhwZW5kaXRpb24gWyBWYWNhY3Rpb24gXVxyXG5jbGFzcyBFeHBlbmRpdGlvbiBleHRlbmRzIFZhY2F0aW9uIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIGxlbmd0aCwgZ2Vhcikge1xyXG4gICAgICAgIHN1cGVyKGRlc3RpbmF0aW9uLCBsZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZ2VhciA9IGdlYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgICAgc3VwZXIucHJpbnQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBCcmluZyB5b3VyICR7dGhpcy5nZWFyfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlYWN0IEpzIFN0eWxlXHJcbmltcG9ydCB7IEhlbGxvV29ybGQgfSBmcm9tICcuL2ltcG9ydFR5cGVzL2ltcG9ydFN0eWxlVGhyZWUnXHJcbmltcG9ydCBXb3JsZCBmcm9tICcuL2ltcG9ydFR5cGVzL2ltcG9ydFN0eWxlVHdvJ1xyXG5pbXBvcnQgSGVsbG8gZnJvbSAnLi9pbXBvcnRUeXBlcy9pbXBvcnRTdHlsZU9uZSdcclxuXHJcbi8vIENvbW1vbiBKU1xyXG4vLyBjb25zdCB7IHRlc3RPbmUsIHRlc3RUd28gfSA9IHJlcXVpcmUoJy4vaW1wb3J0VHlwZXMvaW1wb3J0U3R5bGVGb3VyJykgIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ })

/******/ });
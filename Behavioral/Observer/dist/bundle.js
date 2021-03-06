/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Behavioral/Observer/src/Displays.ts":
/*!*********************************************!*\
  !*** ./Behavioral/Observer/src/Displays.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsDisplay": () => (/* binding */ CurrentConditionsDisplay)
/* harmony export */ });
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`);
    }
}


/***/ }),

/***/ "./Behavioral/Observer/src/WeatherData.ts":
/*!************************************************!*\
  !*** ./Behavioral/Observer/src/WeatherData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherData": () => (/* binding */ WeatherData),
/* harmony export */   "WetherStation": () => (/* binding */ WetherStation)
/* harmony export */ });
/* harmony import */ var _Displays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Displays */ "./Behavioral/Observer/src/Displays.ts");

class WeatherData {
    constructor() {
        this.observers = [];
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver() { }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }
    measurementsChange() {
        this.notifyObservers();
    }
    setMeasurements(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChange();
    }
}
class WetherStation {
    static main() {
        let weatherData = new WeatherData();
        let display = new _Displays__WEBPACK_IMPORTED_MODULE_0__.CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 80, 80);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./Behavioral/Observer/src/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherData */ "./Behavioral/Observer/src/WeatherData.ts");

const weatherData = _WeatherData__WEBPACK_IMPORTED_MODULE_0__.WetherStation.main();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
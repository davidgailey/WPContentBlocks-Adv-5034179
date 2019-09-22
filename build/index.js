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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/01-static/index.js":
/*!********************************!*\
  !*** ./src/01-static/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("wpsu-podkit/static", {
  title: __("Like & Subscribe", "wpsu-podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "wpsu-podkit",
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Like & Subscribe!", "podkit")))));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "podkit")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "podkit")))));
  }
});

/***/ }),

/***/ "./src/bv-logo-white.svg":
/*!*******************************!*\
  !*** ./src/bv-logo-white.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogoWhite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z",
  fill: "#fff"
});

var SvgBvLogoWhite = function SvgBvLogoWhite(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 72 72"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyLjksMzguM1YzOGMyLjktMC42LDQuMy0yLjIsNC4zLTQuOFYyMS42YzAtNS40LTIuNy04LjItOC04LjJIMjMuM2MtMC4yLTAuNi0wLjctMS0xLjQtMQoJYy0wLjgsMC0xLjQsMC42LTEuNCwxLjRzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIyLjFoLTUuN2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40CglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNAoJYzAuNywwLDEuMi0wLjQsMS40LTFoNS43djBINDFjNC42LDAsNi44LTIuMiw2LjgtNi43di04LjRDNDcuOSw0MC45LDQ2LjIsMzkuMiw0Mi45LDM4LjN6IE0zNC45LDE4LjloMy42YzEuOCwwLDIuNywxLjEsMi43LDMuMwoJdjkuOWMwLDIuMi0xLjIsMy4zLTMuNCwzLjNoLTIuOFYxOC45eiBNNDEuOCw1MS4xYzAsMS4zLTAuOCwxLjktMi40LDEuOWgtNC41VjQwLjhoMy4zYzIuNCwwLDMuNiwxLjEsMy42LDMuMlY1MS4xeiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/bv-logo.svg":
/*!*************************!*\
  !*** ./src/bv-logo.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBvLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z"
});

var SvgBvLogo = function SvgBvLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 72 72"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTQyLjksMzguM1YzOGMyLjktMC42LDQuMy0yLjIsNC4zLTQuOFYyMS42YzAtNS40LTIuNy04LjItOC04LjJIMjMuM2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40CglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIyLjFoLTUuN2MtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40czAuNiwxLjQsMS40LDEuNAoJYzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNGMwLjcsMCwxLjItMC40LDEuNC0xaDUuN3YwCglINDFjNC42LDAsNi44LTIuMiw2LjgtNi43di04LjRDNDcuOSw0MC45LDQ2LjIsMzkuMiw0Mi45LDM4LjN6IE0zNC45LDE4LjloMy42YzEuOCwwLDIuNywxLjEsMi43LDMuM3Y5LjljMCwyLjItMS4yLDMuMy0zLjQsMy4zCgloLTIuOFYxOC45eiBNNDEuOCw1MS4xYzAsMS4zLTAuOCwxLjktMi40LDEuOWgtNC41VjQwLjhoMy4zYzIuNCwwLDMuNiwxLjEsMy42LDMuMlY1MS4xeiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/get-started/index.js":
/*!**********************************!*\
  !*** ./src/get-started/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bv-logo.svg */ "./src/bv-logo.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("wpsu-podkit/get-started", {
  title: __("Like & Subscribe", "wpsu-podkit"),
  icon: {
    src: _bv_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "wpsu-podkit",
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    console.info(props);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "get-started-block container-fluid"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "display-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", null, "Take the next step"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "Get Started"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Find a campus, discover an academic program, and learn how you can successfully", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "transition from service member to student at Penn State."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      className: "btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
    }, "Get Started ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "\u232A"))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "get-started-block container-fluid"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "display-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", null, "Take the next step"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "Get Started"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Find a campus, discover an academic program, and learn how you can successfully", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "transition from service member to student at Penn State."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      className: "btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
    }, "Get Started ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "\u232A"))));
  }
}); // <div className="podkit-block podkit-static">
//         <figure className="podkit-logo">
//           <img src={logoWhiteURL} alt="logo" />
//         </figure>
//         <div className="podkit-info">
//           <h3 className="podkit-title">
//             {__("The Binaryville Podcast", "podkit")}
//           </h3>
//           <div className="podkit-cta">
//             <a href="/subscribe">{__("Like & Subscribe!", "podkit")}</a>
//           </div>
//         </div>
//       </div>

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01-static */ "./src/01-static/index.js");
/* harmony import */ var _get_started__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-started */ "./src/get-started/index.js");
/**
 * Import blocks as components.
 */



/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
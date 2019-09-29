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
/* harmony import */ var _wpsu_penn_state_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wpsu-penn-state.svg */ "./src/wpsu-penn-state.svg");
/* harmony import */ var _bv_logo_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bv-logo-white.svg */ "./src/bv-logo-white.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("wpsu-podkit/get-started", {
  title: __("Get Started Block", "wpsu-podkit"),
  icon: {
    src: _wpsu_penn_state_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "wpsu-podkit",
  attributes: {
    largeTitle: {
      type: 'string',
      source: 'html',
      selector: '.large-title',
      default: 'Get Started'
    },
    smallTitle: {
      type: 'string',
      source: 'html',
      selector: '.small-title',
      default: 'Take the next step'
    },
    description: {
      type: 'string',
      source: 'html',
      selector: '.get-started-description',
      default: 'Find a campus, discover an academic program, and learn how you can successfully transition from service member to student at Penn State.'
    },
    watermarkImage: {
      type: 'string',
      source: 'attribute',
      selector: '.get-started-block',
      attribute: 'style',
      default: '/wp-content/themes/military-psu-edu/assets/images/src/lion-960.jpg'
    },
    buttonText: {
      type: 'string',
      source: 'html',
      selector: '.call-to-action',
      default: 'Get Started'
    },
    buttonURL: {
      type: 'string',
      source: 'attribute',
      selector: '.call-to-action',
      attribute: 'href',
      default: '#'
    },
    filterColor: {
      type: 'string',
      default: '#1E407C'
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    console.info(props); // Lift info from props and populate various constants
    // It's good to put these here if they are reused multiple times in the jsx of edit or save methods

    var setAttributes = props.setAttributes,
        className = props.className,
        largeTitle = props.attributes.largeTitle,
        smallTitle = props.attributes.smallTitle,
        watermarkImage = props.attributes.watermarkImage,
        description = props.attributes.description,
        buttonText = props.attributes.buttonText,
        buttonURL = props.attributes.buttonURL,
        filterColor = props.attributes.filterColor;

    var onChangeSmallTitle = function onChangeSmallTitle(newSmallTitle) {
      // set the smallTitle attribute in props to new value from rich test field
      setAttributes({
        smallTitle: newSmallTitle
      });
    };

    var onChangeLargeTitle = function onChangeLargeTitle(newLargeTitle) {
      // set the largeTitle attribute in props to new value from rich test field
      setAttributes({
        largeTitle: newLargeTitle
      });
    };

    var onImageSelect = function onImageSelect(imageObject) {
      console.info(imageObject);
      setAttributes({
        watermarkImage: imageObject.sizes.large.url
      });
    };

    var onChangeDescription = function onChangeDescription(newDescription) {
      // set the largeTitle attribute in props to new value from rich test field
      setAttributes({
        description: newDescription
      });
    };

    var onChangeButtonText = function onChangeButtonText(newButtonText) {
      // set the largeTitle attribute in props to new value from rich test field
      setAttributes({
        buttonText: newButtonText
      });
    };

    var onChangeButtonURL = function onChangeButtonURL(newButtonURL) {
      console.info(newButtonURL);
      setAttributes({
        buttonURL: newButtonURL
      });
    };

    var onChangeFilterColor = function onChangeFilterColor(newFilterColor) {
      console.info(newFilterColor);
      setAttributes({
        filterColor: newFilterColor
      });
    };

    var style1 = {
      backgroundImage: "url(".concat(watermarkImage, ")")
    };
    var style2 = {
      backgroundColor: "".concat(filterColor),
      background: "linear-gradient(-90deg, ".concat(filterColor, "cc 0%, ").concat(filterColor, "bb 100%)") // return an array
      // first is the inspector controls then the actual jsx

    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Filter Color"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "compontents-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "compontents-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "compontents-base-control__label"
    }, "PSU Brand Colors")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: filterColor,
      onChange: onChangeFilterColor
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Background Image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "compontents-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "compontents-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "compontents-base-control__label"
    }, "Choose a Background Image")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: watermarkImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open
        }, "Choose an image.");
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "{className} get-started-block container-fluid",
      style: style1
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "display-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", {
      class: "small-title d-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Take the next step",
      value: smallTitle,
      onChange: onChangeSmallTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "large-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Get Started",
      value: largeTitle,
      onChange: onChangeLargeTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "get-started-description w-50 mx-auto"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Find a campus, discover an academic program, and learn how you can successfully  transition from service member to student at Penn State.",
      value: description,
      onChange: onChangeDescription
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Get Started",
      value: buttonText,
      onChange: onChangeButtonText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "\u232A")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "",
      label: "",
      onChange: onChangeButtonURL,
      url: buttonURL
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "filter-color-custom",
      style: style2
    }))];
  },
  save: function save(props) {
    // Lift info from props and populate various constants
    // It's good to put these here if they are reused multiple times in the jsx of edit or save methods
    var setAttributes = props.setAttributes,
        className = props.className,
        largeTitle = props.attributes.largeTitle,
        smallTitle = props.attributes.smallTitle,
        watermarkImage = props.attributes.watermarkImage,
        description = props.attributes.description,
        buttonText = props.attributes.buttonText,
        buttonURL = props.attributes.buttonURL,
        filterColor = props.attributes.filterColor;
    var style1 = {
      backgroundImage: "url(".concat(watermarkImage, ")")
    };
    var style2 = {
      backgroundColor: "".concat(filterColor),
      background: "linear-gradient(-90deg, ".concat(filterColor, "cc 0%, ").concat(filterColor, "bb 100%)")
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "get-started-block container-fluid ",
      style: style1
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "display-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", {
      class: "small-title d-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: smallTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "large-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: largeTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "get-started-description w-50 mx-auto"
    }, description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "{buttonURL}",
      className: "btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
    }, buttonText, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "\u232A"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "filter-color-custom",
      style: style2
    }));
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

/***/ "./src/wpsu-penn-state.svg":
/*!*********************************!*\
  !*** ./src/wpsu-penn-state.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgWpsuPennState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 4.3h35l23.6 95.4h.6L85.5 4.3h30.6l26.3 95.4h.6l23.6-95.4h35L161 144.7h-33.3l-26.6-94.1h-.6l-26.6 94.1H40.6z",
  fill: "#009bde"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-name": "SVGID",
  d: "M462.2 48.7c-4.2-9.2-15.3-20-35.3-20-15.8-.3-25.8 5.3-25.8 13.6 0 24.4 88.5 3.6 88.5 56.6 0 33.9-30.2 49.1-62.4 49.1s-55.5-11.3-68-25.5l25.5-19.7c7.8 11.4 22.5 17.5 40.5 17.5 16.1 0 27.2-8.9 27.2-16.4 0-23.9-86.8-4.2-86.8-57.5C365.6 14.8 393 .9 427.7.9s51.4 17.2 58.1 25.6zM584.3 3.3v83.3c0 19.2-7.6 29.2-24.5 29.4s-24.6-10.2-24.6-29.4V3.3h-33.8v93c0 40.8 27.5 50.8 51.3 50.8h14.1c23.9 0 51.4-10 51.4-50.8v-93z",
  fill: "#002d87"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M281.1 161.1h12.1c7.1 0 10.6 4.4 10.6 10.3s-4.2 9.9-10.2 9.9h-6.8v10.2h-5.7zm5.7 15.4h5.7c3.6 0 5.4-2.2 5.4-5.1s-2.3-5.5-5.6-5.5h-5.5zM315.7 161.1h21.6v5.3h-15.8v6.9H336v5.1h-14.5v7.8h16.9v5.3h-22.7zM350.6 161.1h5.2l12.8 21.7h.1v-21.7h5.2v30.4h-5.3l-12.7-21.6h-.1v21.6h-5.2zM388.4 161.1h5.2l12.8 21.7h.1v-21.7h5.2v30.4h-5.3l-12.7-21.6h-.1v21.6h-5.2zM448.5 182.4a10.8 10.8 0 0 0 9.2 4.6c2.7 0 6.4-1 6.4-3.9s-2.2-3.1-6.3-4l-3.3-.8c-4.9-1.1-9.2-2.9-9.2-8.5s6.1-9.5 11.8-9.5a15.4 15.4 0 0 1 12.7 6.1l-4.7 3.6a8.7 8.7 0 0 0-8-4.4c-3.3 0-5.8 1.3-5.8 3.4s2.9 3.1 6.3 3.9l3.7.8c4.5 1 8.8 2.8 8.8 8.6 0 7.4-7 10-13.3 10s-10.3-2.2-13.2-6.4zM488.4 166.4h-8.3v-5.3h22.4v5.3h-8.3v25.1h-5.8zM519.1 161.1h6.7l10.1 30.4h-6l-1.7-5.9h-11.5l-1.8 5.9h-6zm3.4 5.6h-.1l-4.2 13.9h8.4zM550.7 166.4h-8.3v-5.3h22.3v5.3h-8.3v25.1h-5.7zM576.3 161.1h21.6v5.3h-15.8v6.9h14.5v5.1h-14.5v7.8H599v5.3h-22.7z",
  fill: "#002d87"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#009bde",
  d: "M269.6 97.8V48.4l42.1 24.1-42.1 25.3z"
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M287.7 0c-18.6 0-33.9 6.9-44.9 20.3V4.4h-30.2V192h32.9v-63.4c14 13.1 24.4 17.3 42.2 17.3 38.2 0 68.6-32.4 68.6-73.5S326.4 0 287.7 0zm-3.4 112.8a40.4 40.4 0 1 1 40.3-40.4 40.4 40.4 0 0 1-40.3 40.4z",
  fill: "#002d87"
});

var SvgWpsuPennState = function SvgWpsuPennState(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    "data-name": "Layer 1",
    viewBox: "0 0 618.2 192.3"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTguMiAxOTIuMyI+PHRpdGxlPndwc3UtcGVubi1zdGF0ZTwvdGl0bGU+PHBhdGggaWQ9IlNWR0lEIiBkPSJNMzAuMywzOS4zaDM1bDIzLjYsOTUuNGguNmwyNi4zLTk1LjRoMzAuNmwyNi4zLDk1LjRoLjZsMjMuNi05NS40aDM1TDE5MS4zLDE3OS43SDE1OEwxMzEuNCw4NS42aC0uNmwtMjYuNiw5NC4xSDcwLjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMyAtMzUpIiBmaWxsPSIjMDA5YmRlIi8+PHBhdGggaWQ9IlNWR0lELTIiIGRhdGEtbmFtZT0iU1ZHSUQiIGQ9Ik00OTIuNSw4My43Yy00LjItOS4yLTE1LjMtMjAtMzUuMy0yMC0xNS44LS4zLTI1LjgsNS4zLTI1LjgsMTMuNiwwLDI0LjQsODguNSwzLjYsODguNSw1Ni42LDAsMzMuOS0zMC4yLDQ5LjEtNjIuNCw0OS4xcy01NS41LTExLjMtNjgtMjUuNUw0MTUsMTM3LjhjNy44LDExLjQsMjIuNSwxNy41LDQwLjUsMTcuNSwxNi4xLDAsMjcuMi04LjksMjcuMi0xNi40LDAtMjMuOS04Ni44LTQuMi04Ni44LTU3LjUsMC0zMS42LDI3LjQtNDUuNSw2Mi4xLTQ1LjVzNTEuNCwxNy4yLDU4LjEsMjUuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMC4zIC0zNSkiIGZpbGw9IiMwMDJkODciLz48cGF0aCBpZD0iU1ZHSUQtMyIgZGF0YS1uYW1lPSJTVkdJRCIgZD0iTTYxNC42LDM4LjN2ODMuM2MwLDE5LjItNy42LDI5LjItMjQuNSwyOS40cy0yNC42LTEwLjItMjQuNi0yOS40VjM4LjNINTMxLjd2OTNjMCw0MC44LDI3LjUsNTAuOCw1MS4zLDUwLjhoMTQuMWMyMy45LDAsNTEuNC0xMCw1MS40LTUwLjh2LTkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjMgLTM1KSIgZmlsbD0iIzAwMmQ4NyIvPjxwYXRoIGQ9Ik0zMTEuNCwxOTYuMWgxMi4xYzcuMSwwLDEwLjYsNC40LDEwLjYsMTAuM3MtNC4yLDkuOS0xMC4yLDkuOWgtNi44djEwLjJoLTUuN1ptNS43LDE1LjRoNS43YzMuNiwwLDUuNC0yLjIsNS40LTUuMXMtMi4zLTUuNS01LjYtNS41aC01LjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMyAtMzUpIiBmaWxsPSIjMDAyZDg3Ii8+PHBhdGggZD0iTTM0NiwxOTYuMWgyMS42djUuM0gzNTEuOHY2LjloMTQuNXY1LjFIMzUxLjh2Ny44aDE2Ljl2NS4zSDM0NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMC4zIC0zNSkiIGZpbGw9IiMwMDJkODciLz48cGF0aCBkPSJNMzgwLjksMTk2LjFoNS4ybDEyLjgsMjEuN2guMVYxOTYuMWg1LjJ2MzAuNGgtNS4zbC0xMi43LTIxLjZoLS4xdjIxLjZoLTUuMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMC4zIC0zNSkiIGZpbGw9IiMwMDJkODciLz48cGF0aCBkPSJNNDE4LjcsMTk2LjFoNS4ybDEyLjgsMjEuN2guMVYxOTYuMUg0NDJ2MzAuNGgtNS4zTDQyNCwyMDQuOWgtLjF2MjEuNmgtNS4yWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjMgLTM1KSIgZmlsbD0iIzAwMmQ4NyIvPjxwYXRoIGQ9Ik00NzguOCwyMTcuNEExMC44LDEwLjgsMCwwLDAsNDg4LDIyMmMyLjcsMCw2LjQtMSw2LjQtMy45cy0yLjItMy4xLTYuMy00bC0zLjMtLjhjLTQuOS0xLjEtOS4yLTIuOS05LjItOC41czYuMS05LjUsMTEuOC05LjVhMTUuNCwxNS40LDAsMCwxLDEyLjcsNi4xbC00LjcsMy42YTguNyw4LjcsMCwwLDAtOC00LjRjLTMuMywwLTUuOCwxLjMtNS44LDMuNHMyLjksMy4xLDYuMywzLjlsMy43LjhjNC41LDEsOC44LDIuOCw4LjgsOC42LDAsNy40LTcsMTAtMTMuMywxMHMtMTAuMy0yLjItMTMuMi02LjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMyAtMzUpIiBmaWxsPSIjMDAyZDg3Ii8+PHBhdGggZD0iTTUxOC43LDIwMS40aC04LjN2LTUuM2gyMi40djUuM2gtOC4zdjI1LjFoLTUuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMC4zIC0zNSkiIGZpbGw9IiMwMDJkODciLz48cGF0aCBkPSJNNTQ5LjQsMTk2LjFoNi43bDEwLjEsMzAuNGgtNmwtMS43LTUuOUg1NDdsLTEuOCw1LjloLTZabTMuNCw1LjZoLS4xbC00LjIsMTMuOWg4LjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuMyAtMzUpIiBmaWxsPSIjMDAyZDg3Ii8+PHBhdGggZD0iTTU4MSwyMDEuNGgtOC4zdi01LjNINTk1djUuM2gtOC4zdjI1LjFINTgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjMgLTM1KSIgZmlsbD0iIzAwMmQ4NyIvPjxwYXRoIGQ9Ik02MDYuNiwxOTYuMWgyMS42djUuM0g2MTIuNHY2LjloMTQuNXY1LjFINjEyLjR2Ny44aDE2Ljl2NS4zSDYwNi42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjMgLTM1KSIgZmlsbD0iIzAwMmQ4NyIvPjxwb2x5Z29uIHBvaW50cz0iMjY5LjYgOTcuOCAyNjkuNiA0OC40IDMxMS43IDcyLjUgMjY5LjYgOTcuOCIgZmlsbD0iIzAwOWJkZSIvPjxwYXRoIGQ9Ik0zMTgsMzVjLTE4LjYsMC0zMy45LDYuOS00NC45LDIwLjNWMzkuNEgyNDIuOVYyMjdoMzIuOVYxNjMuNmMxNCwxMy4xLDI0LjQsMTcuMyw0Mi4yLDE3LjMsMzguMiwwLDY4LjYtMzIuNCw2OC42LTczLjVTMzU2LjcsMzUsMzE4LDM1Wm0tMy40LDExMi44YTQwLjQsNDAuNCwwLDEsMSw0MC4zLTQwLjRBNDAuNCw0MC40LDAsMCwxLDMxNC42LDE0Ny44WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLjMgLTM1KSIgZmlsbD0iIzAwMmQ4NyIvPjwvc3ZnPg==");


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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@tailwind base;
@tailwind components;
@tailwind utilities;
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA,cAAS;AACT,oBAAS;AACT,mBAAS","sourcesContent":["//* main scss style sheet\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/LinkedList.ts":
/*!***************************!*\
  !*** ./src/LinkedList.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Node = /** @class */ (function () {
    function Node(value, key) {
        this.value = value;
        this.key = key;
        this.next = null;
    }
    Node.prototype.getNext = function () {
        return this.next;
    };
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value, key) {
        this.head = { value: value, key: key, next: null };
        this.tail = this.head;
        this.size = 1;
    }
    LinkedList.prototype.append = function (value, key) {
        if (this.size === 0) {
            this.head = { value: value, key: key, next: null };
            this.tail = this.head;
            return;
        }
        var node = new Node(value, key);
        this.tail = node;
        var current = this.head;
        if (current.next !== null) {
            while (current.next !== null) {
                current = current.next;
            }
        }
        current.next = node;
        this.size++;
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new Node(value);
        var headCopy = this.head;
        this.head = node;
        this.head.next = headCopy;
        this.size++;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.getHead = function () {
        // returns the first node in the list
        return this.head;
    };
    LinkedList.prototype.getTail = function () {
        return this.tail;
        // returns the last node in the list
    };
    LinkedList.prototype.at = function (index) {
        if (index < 0 || index > this.size - 1) {
            console.log(index);
            console.log('ohhh nooonelll');
            return;
        }
        var copy = this.head;
        for (var i = 0; i < index; i++) {
            copy = copy.next;
        }
        return copy;
    };
    LinkedList.prototype.modifiesASpecificNode = function (index, value) {
        // return a copy
        // const index = this.find(value);
        var current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        current.value = value;
    };
    LinkedList.prototype.pop = function () {
        //how to remove the last element from the list???
        //first I do this.tail = last tail;  and this.tail.next = null;
        /* don't know how to do this.tail = previous tail
        assumptions:
        1. transverse head -> delete last element contains next:null
           don't know how to delete last element contains next:null
         -> 1.1 create a .....
                 try while(current.next !== null) to transverse the linked list
                -> 1.1.1 don't know how to ....
            1.2
         -> this.tail = this.at(size-2)
    
         2. another way except (1.)
         3. another way of another way...
         */
        if (this.size === 1) {
            this.head = null;
            this.size = 0;
            this.tail = null;
            return;
        }
        this.tail = this.at(this.size - 2);
        this.tail.next = null;
        this.size--;
    };
    LinkedList.prototype.contains = function (value, key) {
        //returns true if the passed in value is in the list
        // and otherwise returns false.
        /* my ways:
        transversing this.head -> check if(value === this.value).
        Repeat until this.head.next === null
        by using while loop
        */
        var current = this.head;
        //
        while (current.next !== null) {
            if (value === current.value) {
                // not skipping the first this.head.value
                return true;
            }
            current = current.next;
            if (value === current.value) {
                return true;
            }
        }
        return false;
    };
    LinkedList.prototype.findByKey = function (key) {
        var current = this.head;
        var maxIndex = this.size - 1;
        for (var i = 0; i <= maxIndex; i++) {
            if (key === current.key) {
                return i;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.find = function (value) {
        //returns the index of the node containing value,
        //or null if not found.
        /* assumptions:
        using for loop to transverse and using 'i' in the for..loop .
        to track  'current index' = 'current i'
        so if (value === current.value) {
          return true
        }
    
    
        return false
    
        */
        var current = this.head;
        var maxIndex = this.size - 1;
        for (var i = 0; i <= maxIndex; i++) {
            if (value === current.value) {
                return i;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.toString = function () {
        /*represents your LinkedList objects as strings,
         so you can print them out and preview them in the console.
        The format should be: ( value ) -> ( value ) -> ( value ) -> null
         */
        //using `` backtick to do so
        var totalStr = '';
        var current = this.head;
        while (current.next !== null) {
            totalStr += "(".concat(current.value, ") -> ");
            current = current.next;
        }
        totalStr += null;
        return totalStr;
    };
    /*Extra Credit Tip: When you insert or remove a node,
     consider how it will affect the existing nodes.
    Some of the nodes will need their nextNode link updated.
    */
    LinkedList.prototype.insertAt = function (value, index) {
        if (index < 0 || index > size - 1) {
            console.log('ohhh nooohell');
            return;
        }
        var newNode = new Node(value);
        if (index === 0) {
            this.prepend(value);
        }
        else {
            var current = this.head;
            for (var i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next; // copying current.next inside newNode.next
            current.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.removeAt = function (index) {
        if (index < 0) {
            console.log('ohhh noo');
            return;
        }
        if (this.size === 1) {
            this.pop();
            return;
        }
        var current = this.head;
        for (var i = 1; i < index; i++) {
            current = current.next;
        }
        var copy = current.next.next;
        current.next = copy;
        this.size--;
    };
    return LinkedList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);


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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkedList */ "./src/LinkedList.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import './style.css';


// always using the below restriction as a requirement:
/**
 * if (hashCode < 0 || hashCode >= this.length) {
      console.log(hashCode);
      return;
    }
 */
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.buckets = [];
        this.loadFactor = 0.75;
        this.length = 31;
    }
    HashMap.prototype.hash = function (key) {
        var hashCode = 0;
        var primeNumber = this.length;
        for (var i = 0; i < key.length; i++) {
            hashCode = (hashCode + key.charCodeAt(i)) % primeNumber;
        }
        return hashCode;
    };
    HashMap.prototype.set = function (key, value) {
        /*
    
    set(key, value) takes two arguments. the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.. From the logic stated above, Carlos should contain only the latter value).
    
    In the meantime, a collision is when TWO DIFFERENT keys sit inside the same bucket, because they generate the same hash code (e.g. Carlos and Carla are both hashed to 3, so 3 becomes a location for Carlos AND Carla. However, we know that it is the collision. It means we should find a way how to resolve it — how to deal with collisions, which was mentioned in the previous lesson).
    
        Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the load factor. Some of the methods in this assignment that are mentioned later could be reused to help you handle that growth logic more easily. So you may want to hold onto implementing your growing functionality just for now. However, the reason why we mention it with set() is because it’s important to grow buckets exactly when they are being expanded.
    
    
         */
        var hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.length) {
            console.log(hashCode);
            return;
        }
        if (this.buckets[hashCode] === undefined) {
            var linkedList = new _LinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](value, key);
            this.buckets[hashCode] = linkedList;
        }
        else if (this.buckets[hashCode].findByKey(key) !== null) {
            this.buckets[hashCode].modifiesASpecificNode(this.buckets[hashCode].findByKey(key), value);
        }
        else {
            this.buckets[hashCode].append(value, key);
        }
    };
    HashMap.prototype.get = function (key) {
        var hashCode = this.hash(key);
        if (this.buckets[hashCode] !== undefined &&
            this.buckets[hashCode].findByKey(key) !== null) {
            var index = this.buckets[hashCode].findByKey(key);
            var currentNode = this.buckets[hashCode].at(index);
            return currentNode.value;
        }
        return null;
        //returns the value that is assigned to this key.
        //If a key is not found, return null.
    };
    HashMap.prototype.has = function (key) {
        var hashCode = this.hash(key);
        if (this.buckets[hashCode] !== undefined &&
            this.buckets[hashCode].findByKey(key) !== null) {
            return true;
        }
        return false;
    };
    HashMap.prototype.remove = function (key) {
        //takes a key as an argument.
        //If the given key is in the hash map, it should remove the entry with that key and return 'okay babe, I removed it'.
        // If the key isn’t in the hash map, it should return 'I can't not find it ,babe'
        var hashCode = this.hash(key);
        if (hashCode < 0 ||
            hashCode >= this.length ||
            this.buckets[hashCode] === undefined) {
            console.log("i can't not find it, baby");
            console.log(hashCode);
            return;
        }
        console.log(this);
        console.log(hashCode);
        var indexOfLinkedList = this.buckets[hashCode].findByKey(key); // this is a linkedlist
        console.log(indexOfLinkedList);
        this.buckets[hashCode].removeAt(indexOfLinkedList);
        return;
    };
    HashMap.prototype.getLength = function () {
        //returns the number of stored keys in the hash map.
        // using for..loop to increase the count 
        // it is tricky because we need to access every bucket to count for keys too.
        var count = 0;
        for (var i = 0; i <= this.length; i++) {
            if (this.buckets[i])
                ;
        }
    };
    HashMap.prototype.clear = function () {
        //removes all entries in the hash map.
    };
    HashMap.prototype.keys = function () {
        //returns an array containing all the keys inside the hash map.
    };
    HashMap.prototype.values = function () {
        //returns an array containing all the values.
    };
    HashMap.prototype.entries = function () {
        //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    };
    return HashMap;
}());
var hashMap = new HashMap();
hashMap.set('hwx', 22);
hashMap.set('Idonthinkyouhaveme', 111);
hashMap.remove('hwx');
hashMap.set('hwx', 22);
console.log(hashMap);
console.log(hashMap.buckets[3]);
//Extra credits: Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.
var Hashset = /** @class */ (function (_super) {
    __extends(Hashset, _super);
    function Hashset() {
        var _this = _super.call(this) || this;
        _this.size = 0;
        _this.loadFactor = 0.75;
        return _this;
    }
    return Hashset;
}(HashMap));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FEdUI7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFDRCx1QkFBSyxHQUFMO1FBQ0Usc0NBQXNDO0lBQ3hDLENBQUM7SUFDRCxzQkFBSSxHQUFKO1FBQ0UsK0RBQStEO0lBQ2pFLENBQUM7SUFDRCx3QkFBTSxHQUFOO1FBQ0UsNkNBQTZDO0lBQy9DLENBQUM7SUFDRCx5QkFBTyxHQUFQO1FBQ0Usa0hBQWtIO0lBQ3BILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEMsaUhBQWlIO0FBRWpIO0lBQXNCLDJCQUFPO0lBRzNCO1FBQ0Usa0JBQUssV0FBRSxTQUFDO1FBQ1IsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7SUFDekIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLENBUnFCLE9BQU8sR0FRNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxjQUFTO0FBQ1Qsb0JBQVM7QUFDVCxtQkFBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyogbWFpbiBzY3NzIHN0eWxlIHNoZWV0XFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIE5vZGUge1xuICB2YWx1ZTogbnVtYmVyO1xuICBuZXh0OiBvYmplY3Q7XG4gIGtleTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0TmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGhlYWQ6IGFueTtcblxuICB0YWlsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5oZWFkID0geyB2YWx1ZTogdmFsdWUsIGtleToga2V5LCBuZXh0OiBudWxsIH07XG4gICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuc2l6ZSA9IDE7XG4gIH1cblxuICBhcHBlbmQodmFsdWU6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB7IHZhbHVlOiB2YWx1ZSwga2V5OiBrZXksIG5leHQ6IG51bGwgfTtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBrZXkpO1xuXG4gICAgdGhpcy50YWlsID0gbm9kZTtcblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50Lm5leHQgPSBub2RlO1xuICAgIHRoaXMuc2l6ZSsrO1xuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBjb25zdCBoZWFkQ29weSA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gaGVhZENvcHk7XG4gICAgdGhpcy5zaXplKys7XG4gIH1cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG4gIGdldEhlYWQoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cbiAgZ2V0VGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgIC8vIHJldHVybnMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICB9XG4gIGF0KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5zaXplIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBub29vbmVsbGwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvcHkgPSB0aGlzLmhlYWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICBjb3B5ID0gY29weS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfVxuICBtb2RpZmllc0FTcGVjaWZpY05vZGUoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICAgIC8vIHJldHVybiBhIGNvcHlcbiAgICAvLyBjb25zdCBpbmRleCA9IHRoaXMuZmluZCh2YWx1ZSk7XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIHBvcCgpIHtcbiAgICAvL2hvdyB0byByZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBsaXN0Pz8/XG4gICAgLy9maXJzdCBJIGRvIHRoaXMudGFpbCA9IGxhc3QgdGFpbDsgIGFuZCB0aGlzLnRhaWwubmV4dCA9IG51bGw7XG5cbiAgICAvKiBkb24ndCBrbm93IGhvdyB0byBkbyB0aGlzLnRhaWwgPSBwcmV2aW91cyB0YWlsXG4gICAgYXNzdW1wdGlvbnM6XG4gICAgMS4gdHJhbnN2ZXJzZSBoZWFkIC0+IGRlbGV0ZSBsYXN0IGVsZW1lbnQgY29udGFpbnMgbmV4dDpudWxsXG4gICAgICAgZG9uJ3Qga25vdyBob3cgdG8gZGVsZXRlIGxhc3QgZWxlbWVudCBjb250YWlucyBuZXh0Om51bGxcbiAgICAgLT4gMS4xIGNyZWF0ZSBhIC4uLi4uIFxuICAgICAgICAgICAgIHRyeSB3aGlsZShjdXJyZW50Lm5leHQgIT09IG51bGwpIHRvIHRyYW5zdmVyc2UgdGhlIGxpbmtlZCBsaXN0XG4gICAgICAgICAgICAtPiAxLjEuMSBkb24ndCBrbm93IGhvdyB0byAuLi4uXG4gICAgICAgIDEuMiBcbiAgICAgLT4gdGhpcy50YWlsID0gdGhpcy5hdChzaXplLTIpXG5cbiAgICAgMi4gYW5vdGhlciB3YXkgZXhjZXB0ICgxLilcbiAgICAgMy4gYW5vdGhlciB3YXkgb2YgYW5vdGhlciB3YXkuLi5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XG4gICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IHRoaXMuYXQodGhpcy5zaXplIC0gMik7XG5cbiAgICB0aGlzLnRhaWwubmV4dCA9IG51bGw7XG4gICAgdGhpcy5zaXplLS07XG4gIH1cblxuICBjb250YWlucyh2YWx1ZTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3RcbiAgICAvLyBhbmQgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAgLyogbXkgd2F5czogXG4gICAgdHJhbnN2ZXJzaW5nIHRoaXMuaGVhZCAtPiBjaGVjayBpZih2YWx1ZSA9PT0gdGhpcy52YWx1ZSkuIFxuICAgIFJlcGVhdCB1bnRpbCB0aGlzLmhlYWQubmV4dCA9PT0gbnVsbFxuICAgIGJ5IHVzaW5nIHdoaWxlIGxvb3BcbiAgICAqL1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgLy9cbiAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgLy8gbm90IHNraXBwaW5nIHRoZSBmaXJzdCB0aGlzLmhlYWQudmFsdWVcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmaW5kQnlLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4SW5kZXg7IGkrKykge1xuICAgICAgaWYgKGtleSA9PT0gY3VycmVudC5rZXkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAvL3JldHVybnMgdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmcgdmFsdWUsXG4gICAgLy9vciBudWxsIGlmIG5vdCBmb3VuZC5cblxuICAgIC8qIGFzc3VtcHRpb25zOlxuICAgIHVzaW5nIGZvciBsb29wIHRvIHRyYW5zdmVyc2UgYW5kIHVzaW5nICdpJyBpbiB0aGUgZm9yLi5sb29wIC5cbiAgICB0byB0cmFjayAgJ2N1cnJlbnQgaW5kZXgnID0gJ2N1cnJlbnQgaSdcbiAgICBzbyBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBcblxuXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgICAqL1xuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEluZGV4OyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIC8qcmVwcmVzZW50cyB5b3VyIExpbmtlZExpc3Qgb2JqZWN0cyBhcyBzdHJpbmdzLFxuICAgICBzbyB5b3UgY2FuIHByaW50IHRoZW0gb3V0IGFuZCBwcmV2aWV3IHRoZW0gaW4gdGhlIGNvbnNvbGUuIFxuICAgIFRoZSBmb3JtYXQgc2hvdWxkIGJlOiAoIHZhbHVlICkgLT4gKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiBudWxsXG4gICAgICovXG4gICAgLy91c2luZyBgYCBiYWNrdGljayB0byBkbyBzb1xuICAgIGxldCB0b3RhbFN0ciA9ICcnO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHRvdGFsU3RyICs9IGAoJHtjdXJyZW50LnZhbHVlfSkgLT4gYDtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHRvdGFsU3RyICs9IG51bGw7XG4gICAgcmV0dXJuIHRvdGFsU3RyO1xuICB9XG4gIC8qRXh0cmEgQ3JlZGl0IFRpcDogV2hlbiB5b3UgaW5zZXJ0IG9yIHJlbW92ZSBhIG5vZGUsXG4gICBjb25zaWRlciBob3cgaXQgd2lsbCBhZmZlY3QgdGhlIGV4aXN0aW5nIG5vZGVzLiBcbiAgU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cbiAgKi9cblxuICBpbnNlcnRBdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHNpemUgLSAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBub29vaGVsbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5wcmVwZW5kKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICB9XG4gICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7IC8vIGNvcHlpbmcgY3VycmVudC5uZXh0IGluc2lkZSBuZXdOb2RlLm5leHRcbiAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG4gICAgICB0aGlzLnNpemUrKztcbiAgICB9XG4gIH1cbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvaGhoIG5vbycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XG4gICAgICB0aGlzLnBvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gY3VycmVudC5uZXh0Lm5leHQ7XG5cbiAgICBjdXJyZW50Lm5leHQgPSBjb3B5O1xuXG4gICAgdGhpcy5zaXplLS07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9MaW5rZWRMaXN0JztcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vTGlua2VkTGlzdCc7XG4vLyBhbHdheXMgdXNpbmcgdGhlIGJlbG93IHJlc3RyaWN0aW9uIGFzIGEgcmVxdWlyZW1lbnQ6XG4vKipcbiAqIGlmIChoYXNoQ29kZSA8IDAgfHwgaGFzaENvZGUgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gKi9cblxuY2xhc3MgSGFzaE1hcCB7XG4gIGJ1Y2tldHM6IEFycmF5O1xuICBsZW5ndGg6IG51bWJlcjtcbiAgbG9hZEZhY3RvcjogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1Y2tldHMgPSBbXTtcbiAgICB0aGlzLmxvYWRGYWN0b3IgPSAwLjc1O1xuICAgIHRoaXMubGVuZ3RoID0gMzE7XG4gIH1cblxuICBoYXNoKGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgY29uc3QgcHJpbWVOdW1iZXIgPSB0aGlzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaENvZGUgPSAoaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKSkgJSBwcmltZU51bWJlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGU7XG4gIH1cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgLyogXG5cbnNldChrZXksIHZhbHVlKSB0YWtlcyB0d28gYXJndW1lbnRzLiB0aGUgZmlyc3QgaXMgYSBrZXkgYW5kIHRoZSBzZWNvbmQgaXMgYSB2YWx1ZSB0aGF0IGlzIGFzc2lnbmVkIHRvIHRoaXMga2V5LiBJZiBhIGtleSBhbHJlYWR5IGV4aXN0cywgdGhlbiB0aGUgb2xkIHZhbHVlIGlzIG92ZXJ3cml0dGVuIG9yIHdlIGNhbiBzYXkgdGhhdCB3ZSB1cGRhdGUgdGhlIGtleeKAmXMgdmFsdWUgKGUuZy4gQ2FybG9zIGlzIG91ciBrZXkgYnV0IGl0IGlzIGNhbGxlZCB0d2ljZTogb25jZSB3aXRoIHZhbHVlIEkgYW0gdGhlIG9sZCB2YWx1ZS4sIGFuZCBvbmNlIHdpdGggdmFsdWUgSSBhbSB0aGUgbmV3IHZhbHVlLi4gRnJvbSB0aGUgbG9naWMgc3RhdGVkIGFib3ZlLCBDYXJsb3Mgc2hvdWxkIGNvbnRhaW4gb25seSB0aGUgbGF0dGVyIHZhbHVlKS5cblxuSW4gdGhlIG1lYW50aW1lLCBhIGNvbGxpc2lvbiBpcyB3aGVuIFRXTyBESUZGRVJFTlQga2V5cyBzaXQgaW5zaWRlIHRoZSBzYW1lIGJ1Y2tldCwgYmVjYXVzZSB0aGV5IGdlbmVyYXRlIHRoZSBzYW1lIGhhc2ggY29kZSAoZS5nLiBDYXJsb3MgYW5kIENhcmxhIGFyZSBib3RoIGhhc2hlZCB0byAzLCBzbyAzIGJlY29tZXMgYSBsb2NhdGlvbiBmb3IgQ2FybG9zIEFORCBDYXJsYS4gSG93ZXZlciwgd2Uga25vdyB0aGF0IGl0IGlzIHRoZSBjb2xsaXNpb24uIEl0IG1lYW5zIHdlIHNob3VsZCBmaW5kIGEgd2F5IGhvdyB0byByZXNvbHZlIGl0IOKAlCBob3cgdG8gZGVhbCB3aXRoIGNvbGxpc2lvbnMsIHdoaWNoIHdhcyBtZW50aW9uZWQgaW4gdGhlIHByZXZpb3VzIGxlc3NvbikuXG5cbiAgICBSZW1lbWJlciB0byBncm93IHlvdXIgYnVja2V0cyBzaXplIHdoZW4gaXQgbmVlZHMgdG8sIGJ5IGNhbGN1bGF0aW5nIGlmIHlvdXIgYnVja2V0IGhhcyByZWFjaGVkIHRoZSBsb2FkIGZhY3Rvci4gU29tZSBvZiB0aGUgbWV0aG9kcyBpbiB0aGlzIGFzc2lnbm1lbnQgdGhhdCBhcmUgbWVudGlvbmVkIGxhdGVyIGNvdWxkIGJlIHJldXNlZCB0byBoZWxwIHlvdSBoYW5kbGUgdGhhdCBncm93dGggbG9naWMgbW9yZSBlYXNpbHkuIFNvIHlvdSBtYXkgd2FudCB0byBob2xkIG9udG8gaW1wbGVtZW50aW5nIHlvdXIgZ3Jvd2luZyBmdW5jdGlvbmFsaXR5IGp1c3QgZm9yIG5vdy4gSG93ZXZlciwgdGhlIHJlYXNvbiB3aHkgd2UgbWVudGlvbiBpdCB3aXRoIHNldCgpIGlzIGJlY2F1c2UgaXTigJlzIGltcG9ydGFudCB0byBncm93IGJ1Y2tldHMgZXhhY3RseSB3aGVuIHRoZXkgYXJlIGJlaW5nIGV4cGFuZGVkLlxuXG5cbiAgICAgKi9cblxuICAgIGNvbnN0IGhhc2hDb2RlID0gdGhpcy5oYXNoKGtleSk7XG4gICAgaWYgKGhhc2hDb2RlIDwgMCB8fCBoYXNoQ29kZSA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJ1Y2tldHNbaGFzaENvZGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxpbmtlZExpc3QgPSBuZXcgTGlua2VkTGlzdCh2YWx1ZSwga2V5KTtcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gPSBsaW5rZWRMaXN0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5tb2RpZmllc0FTcGVjaWZpY05vZGUoXG4gICAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0uZmluZEJ5S2V5KGtleSksXG4gICAgICAgIHZhbHVlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmFwcGVuZCh2YWx1ZSwga2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNoQ29kZSA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmZpbmRCeUtleShrZXkpO1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmF0KGluZGV4KTtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gICAgLy9yZXR1cm5zIHRoZSB2YWx1ZSB0aGF0IGlzIGFzc2lnbmVkIHRvIHRoaXMga2V5LlxuICAgIC8vSWYgYSBrZXkgaXMgbm90IGZvdW5kLCByZXR1cm4gbnVsbC5cbiAgfVxuICBoYXMoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNoQ29kZSA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICAvL3Rha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50LlxuICAgIC8vSWYgdGhlIGdpdmVuIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCByZW1vdmUgdGhlIGVudHJ5IHdpdGggdGhhdCBrZXkgYW5kIHJldHVybiAnb2theSBiYWJlLCBJIHJlbW92ZWQgaXQnLlxuICAgIC8vIElmIHRoZSBrZXkgaXNu4oCZdCBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCByZXR1cm4gJ0kgY2FuJ3Qgbm90IGZpbmQgaXQgLGJhYmUnXG4gICAgY29uc3QgaGFzaENvZGUgPSB0aGlzLmhhc2goa2V5KTtcbiAgICBpZiAoXG4gICAgICBoYXNoQ29kZSA8IDAgfHxcbiAgICAgIGhhc2hDb2RlID49IHRoaXMubGVuZ3RoIHx8XG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBjYW4ndCBub3QgZmluZCBpdCwgYmFieVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcblxuICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICBjb25zdCBpbmRleE9mTGlua2VkTGlzdCA9IHRoaXMuYnVja2V0c1toYXNoQ29kZV0uZmluZEJ5S2V5KGtleSk7IC8vIHRoaXMgaXMgYSBsaW5rZWRsaXN0XG4gICAgY29uc29sZS5sb2coaW5kZXhPZkxpbmtlZExpc3QpO1xuXG4gICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5yZW1vdmVBdChpbmRleE9mTGlua2VkTGlzdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdldExlbmd0aCgpIHtcbiAgICAvL3JldHVybnMgdGhlIG51bWJlciBvZiBzdG9yZWQga2V5cyBpbiB0aGUgaGFzaCBtYXAuXG4gICAgLy8gdXNpbmcgZm9yLi5sb29wIHRvIGluY3JlYXNlIHRoZSBjb3VudCBcbiAgICAvLyBpdCBpcyB0cmlja3kgYmVjYXVzZSB3ZSBuZWVkIHRvIGFjY2VzcyBldmVyeSBidWNrZXQgdG8gY291bnQgZm9yIGtleXMgdG9vLlxuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLmJ1Y2tldHNbaV0pXG4gICAgfVxuICB9XG4gIGNsZWFyKCkge1xuICAgIC8vcmVtb3ZlcyBhbGwgZW50cmllcyBpbiB0aGUgaGFzaCBtYXAuXG4gIH1cbiAga2V5cygpIHtcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGtleXMgaW5zaWRlIHRoZSBoYXNoIG1hcC5cbiAgfVxuICB2YWx1ZXMoKSB7XG4gICAgLy9yZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMuXG4gIH1cbiAgZW50cmllcygpIHtcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoIGtleSwgdmFsdWUgcGFpci4gRXhhbXBsZTogW1tmaXJzdEtleSwgZmlyc3RWYWx1ZV0sIFtzZWNvbmRLZXksIHNlY29uZFZhbHVlXV1cbiAgfVxufVxuXG5jb25zdCBoYXNoTWFwID0gbmV3IEhhc2hNYXAoKTtcbmhhc2hNYXAuc2V0KCdod3gnLCAyMik7XG5oYXNoTWFwLnNldCgnSWRvbnRoaW5reW91aGF2ZW1lJywgMTExKTtcbmhhc2hNYXAucmVtb3ZlKCdod3gnKTtcbmhhc2hNYXAuc2V0KCdod3gnLCAyMik7XG5cbmNvbnNvbGUubG9nKGhhc2hNYXApO1xuY29uc29sZS5sb2coaGFzaE1hcC5idWNrZXRzWzNdKTtcblxuLy9FeHRyYSBjcmVkaXRzOiBDcmVhdGUgYSBjbGFzcyBIYXNoU2V0IHRoYXQgYmVoYXZlcyB0aGUgc2FtZSBhcyBhIEhhc2hNYXAgYnV0IG9ubHkgY29udGFpbnMga2V5cyB3aXRoIG5vIHZhbHVlcy5cblxuY2xhc3MgSGFzaHNldCBleHRlbmRzIEhhc2hNYXAge1xuICBzaXplOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMubG9hZEZhY3RvciA9IDAuNzU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
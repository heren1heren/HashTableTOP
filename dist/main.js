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
/* harmony export */   HashMapLinkedList: () => (/* binding */ HashMapLinkedList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        var totalStr = '';
        var current = this.head;
        while (current.next !== null) {
            totalStr += "(".concat(current.value, ") -> ");
            current = current.next;
        }
        totalStr += null;
        return totalStr;
    };
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
// I should extend class instead of modifying the old one but since I copy the project linkedList and move it into HashtableProject(it doesssn't matter)
var HashMapLinkedList = /** @class */ (function (_super) {
    __extends(HashMapLinkedList, _super);
    function HashMapLinkedList(value, key) {
        return _super.call(this, value, key) || this;
    }
    return HashMapLinkedList;
}(LinkedList));



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
        this.loadFactor = 0.7;
        this.MaxLength = 31;
    }
    HashMap.prototype.isPrime = function (number) {
        var size = (size = Math.sqrt(number));
        for (var i = 2; i <= size; i++) {
            //
            if (number % i === 0)
                return false;
        }
        return true;
    };
    HashMap.prototype.getNextPrime = function (num) {
        var prime = num;
        var found = false;
        while (!found) {
            prime++;
            if (this.isPrime(prime)) {
                found = true;
            }
        }
        return prime;
    };
    HashMap.prototype.hash = function (key) {
        var hashCode = 0;
        var primeNumber = this.MaxLength;
        for (var i = 0; i < key.length; i++) {
            hashCode = (hashCode + key.charCodeAt(i)) % primeNumber;
        }
        return hashCode;
    };
    HashMap.prototype.set = function (key, value) {
        /* check to increase array length
         */
        if (this.getLength() >= this.MaxLength * this.loadFactor) {
            this.MaxLength = this.getNextPrime(this.MaxLength);
        }
        var hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.MaxLength) {
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
            hashCode >= this.MaxLength ||
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
        //! I am here
        //returns the number of stored keys in the hash map.
        // using for..loop to increase the count
        // it is tricky because we need to access every bucket to count for keys too.
        var count = 0;
        for (var i = 0; i <= this.MaxLength; i++) {
            if (this.buckets[i] !== undefined) {
                count++;
                var currentLinkedList = this.buckets[i].head;
                while (currentLinkedList.value !== null &&
                    currentLinkedList.key !== null &&
                    currentLinkedList.next !== null) {
                    count++;
                    currentLinkedList = currentLinkedList.next;
                }
            }
        }
        return count;
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
hashMap.set('key1', 1);
hashMap.set('key2', 2);
hashMap.set('key3', 3);
hashMap.set('key4', 4);
hashMap.set('key5', 5);
hashMap.set('key6', 6);
hashMap.set('key7', 7);
hashMap.set('key8', 8);
hashMap.set('key9', 9);
hashMap.set('key10', 10);
hashMap.set('key11', 11);
hashMap.set('key12', 12);
hashMap.set('key13', 13);
hashMap.set('key14', 14);
hashMap.set('key15', 15);
hashMap.set('key16', 16);
hashMap.set('key17', 17);
hashMap.set('key18', 18);
hashMap.set('key19', 19);
hashMap.set('key20', 20);
hashMap.set('key21', 21);
hashMap.set('key22', 22);
hashMap.set('key23', 23);
hashMap.set('key24', 24);
hashMap.set('key25', 25);
hashMap.set('key26', 26);
hashMap.set('key27', 27);
hashMap.set('key28', 28);
hashMap.set('key29', 29);
hashMap.set('key30', 30);
hashMap.set('key31', 31);
hashMap.set('key32', 32);
hashMap.set('key33', 33);
hashMap.set('key34', 34);
hashMap.set('key35', 35);
hashMap.set('key36', 36);
hashMap.set('key37', 37);
hashMap.set('key38', 38);
hashMap.set('key39', 39);
hashMap.set('key40', 40);
hashMap.set('key40', 45);
console.log(hashMap.MaxLength);
console.log(hashMap.getLength());
console.log(hashMap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsV0FBVyx5RUFBeUUsdUJBQXVCLHNCQUFzQixxQkFBcUI7QUFDblA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0lBSUUsY0FBWSxLQUFhLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUNEO0lBT0Usb0JBQVksS0FBYSxFQUFFLEdBQVc7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLEdBQVc7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCw0QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCw0QkFBTyxHQUFQO1FBQ0UscUNBQXFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQixvQ0FBb0M7SUFDdEMsQ0FBQztJQUNELHVCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDBDQUFxQixHQUFyQixVQUFzQixLQUFhLEVBQUUsS0FBYTtRQUNoRCxnQkFBZ0I7UUFDaEIsa0NBQWtDO1FBRWxDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsd0JBQUcsR0FBSDtRQUNFLGlEQUFpRDtRQUNqRCwrREFBK0Q7UUFFL0Q7Ozs7Ozs7Ozs7OztXQVlHO1FBQ0gsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFhLEVBQUUsR0FBVztRQUNqQyxvREFBb0Q7UUFDcEQsK0JBQStCO1FBQy9COzs7O1VBSUU7UUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEVBQUU7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1Qix5Q0FBeUM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELDhCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksR0FBRyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHlCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDN0IsUUFBUSxJQUFJLFdBQUksT0FBTyxDQUFDLEtBQUssVUFBTyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ2pCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsS0FBc0IsRUFBRSxLQUFhO1FBQzVDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTztRQUNULENBQUM7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsMkNBQTJDO1lBQ3hFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBQ0QsNkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUVELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7O0FBQ0Qsd0pBQXdKO0FBQ3hKO0lBQXVDLHFDQUFVO0lBQy9DLDJCQUFZLEtBQUssRUFBRSxHQUFHO1FBQ3BCLGFBQUssWUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFNBQUM7SUFDcEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxDQUpzQyxVQUFVLEdBSWhEOzs7Ozs7OztVQzdORDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHdCQUF3QjtBQUNGO0FBQ2dCO0FBRXRDLHVEQUF1RDtBQUN2RDs7Ozs7R0FLRztBQUVIO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QseUJBQU8sR0FBUCxVQUFRLE1BQWM7UUFDcEIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQixFQUFFO1lBQ0YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7UUFDckMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDhCQUFZLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLEdBQVc7UUFDZCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQzFELENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ0QscUJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxLQUFhO1FBQzVCO1dBQ0c7UUFFSCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDekMsSUFBTSxVQUFVLEdBQUcsSUFBSSxtREFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN0QyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDckMsS0FBSyxDQUNOLENBQUM7UUFDSixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQzlDLENBQUM7WUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO1FBQ1osaURBQWlEO1FBQ2pELHFDQUFxQztJQUN2QyxDQUFDO0lBQ0QscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFDOUMsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHdCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLDZCQUE2QjtRQUM3QixxSEFBcUg7UUFDckgsaUZBQWlGO1FBQ2pGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFDRSxRQUFRLEdBQUcsQ0FBQztZQUNaLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFDcEMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRCLE9BQU87UUFDVCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsT0FBTztJQUNULENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQ0UsYUFBYTtRQUNiLG9EQUFvRDtRQUNwRCx3Q0FBd0M7UUFDeEMsNkVBQTZFO1FBRTdFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM3QyxPQUNFLGlCQUFpQixDQUFDLEtBQUssS0FBSyxJQUFJO29CQUNoQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssSUFBSTtvQkFDOUIsaUJBQWlCLENBQUMsSUFBSSxLQUFLLElBQUksRUFDL0IsQ0FBQztvQkFDRCxLQUFLLEVBQUUsQ0FBQztvQkFDUixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHVCQUFLLEdBQUw7UUFDRSxzQ0FBc0M7SUFDeEMsQ0FBQztJQUNELHNCQUFJLEdBQUo7UUFDRSwrREFBK0Q7SUFDakUsQ0FBQztJQUNELHdCQUFNLEdBQU47UUFDRSw2Q0FBNkM7SUFDL0MsQ0FBQztJQUNELHlCQUFPLEdBQVA7UUFDRSxrSEFBa0g7SUFDcEgsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFckIsaUhBQWlIO0FBRWpIO0lBQXNCLDJCQUFPO0lBRzNCO1FBQ0Usa0JBQUssV0FBRSxTQUFDO1FBQ1IsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7SUFDekIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLENBUnFCLE9BQU8sR0FRNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL0xpbmtlZExpc3QudHMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxjQUFTO0FBQ1Qsb0JBQVM7QUFDVCxtQkFBU1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyogbWFpbiBzY3NzIHN0eWxlIHNoZWV0XFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIE5vZGUge1xuICB2YWx1ZTogbnVtYmVyO1xuICBuZXh0OiBvYmplY3Q7XG4gIGtleTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0TmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGhlYWQ6IGFueTtcblxuICB0YWlsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5oZWFkID0geyB2YWx1ZTogdmFsdWUsIGtleToga2V5LCBuZXh0OiBudWxsIH07XG4gICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuc2l6ZSA9IDE7XG4gIH1cblxuICBhcHBlbmQodmFsdWU6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB7IHZhbHVlOiB2YWx1ZSwga2V5OiBrZXksIG5leHQ6IG51bGwgfTtcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBrZXkpO1xuXG4gICAgdGhpcy50YWlsID0gbm9kZTtcblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50Lm5leHQgPSBub2RlO1xuICAgIHRoaXMuc2l6ZSsrO1xuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBjb25zdCBoZWFkQ29weSA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gaGVhZENvcHk7XG4gICAgdGhpcy5zaXplKys7XG4gIH1cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG4gIGdldEhlYWQoKSB7XG4gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cbiAgZ2V0VGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgIC8vIHJldHVybnMgdGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICB9XG4gIGF0KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5zaXplIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBub29vbmVsbGwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNvcHkgPSB0aGlzLmhlYWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICBjb3B5ID0gY29weS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfVxuICBtb2RpZmllc0FTcGVjaWZpY05vZGUoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICAgIC8vIHJldHVybiBhIGNvcHlcbiAgICAvLyBjb25zdCBpbmRleCA9IHRoaXMuZmluZCh2YWx1ZSk7XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIHBvcCgpIHtcbiAgICAvL2hvdyB0byByZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBsaXN0Pz8/XG4gICAgLy9maXJzdCBJIGRvIHRoaXMudGFpbCA9IGxhc3QgdGFpbDsgIGFuZCB0aGlzLnRhaWwubmV4dCA9IG51bGw7XG5cbiAgICAvKiBkb24ndCBrbm93IGhvdyB0byBkbyB0aGlzLnRhaWwgPSBwcmV2aW91cyB0YWlsXG4gICAgYXNzdW1wdGlvbnM6XG4gICAgMS4gdHJhbnN2ZXJzZSBoZWFkIC0+IGRlbGV0ZSBsYXN0IGVsZW1lbnQgY29udGFpbnMgbmV4dDpudWxsXG4gICAgICAgZG9uJ3Qga25vdyBob3cgdG8gZGVsZXRlIGxhc3QgZWxlbWVudCBjb250YWlucyBuZXh0Om51bGxcbiAgICAgLT4gMS4xIGNyZWF0ZSBhIC4uLi4uIFxuICAgICAgICAgICAgIHRyeSB3aGlsZShjdXJyZW50Lm5leHQgIT09IG51bGwpIHRvIHRyYW5zdmVyc2UgdGhlIGxpbmtlZCBsaXN0XG4gICAgICAgICAgICAtPiAxLjEuMSBkb24ndCBrbm93IGhvdyB0byAuLi4uXG4gICAgICAgIDEuMiBcbiAgICAgLT4gdGhpcy50YWlsID0gdGhpcy5hdChzaXplLTIpXG5cbiAgICAgMi4gYW5vdGhlciB3YXkgZXhjZXB0ICgxLilcbiAgICAgMy4gYW5vdGhlciB3YXkgb2YgYW5vdGhlciB3YXkuLi5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XG4gICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgIHRoaXMudGFpbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFpbCA9IHRoaXMuYXQodGhpcy5zaXplIC0gMik7XG5cbiAgICB0aGlzLnRhaWwubmV4dCA9IG51bGw7XG4gICAgdGhpcy5zaXplLS07XG4gIH1cblxuICBjb250YWlucyh2YWx1ZTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW4gdGhlIGxpc3RcbiAgICAvLyBhbmQgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAgLyogbXkgd2F5czogXG4gICAgdHJhbnN2ZXJzaW5nIHRoaXMuaGVhZCAtPiBjaGVjayBpZih2YWx1ZSA9PT0gdGhpcy52YWx1ZSkuIFxuICAgIFJlcGVhdCB1bnRpbCB0aGlzLmhlYWQubmV4dCA9PT0gbnVsbFxuICAgIGJ5IHVzaW5nIHdoaWxlIGxvb3BcbiAgICAqL1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgLy9cbiAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnQudmFsdWUpIHtcbiAgICAgICAgLy8gbm90IHNraXBwaW5nIHRoZSBmaXJzdCB0aGlzLmhlYWQudmFsdWVcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmaW5kQnlLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4SW5kZXg7IGkrKykge1xuICAgICAgaWYgKGtleSA9PT0gY3VycmVudC5rZXkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmaW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4SW5kZXg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IHRvdGFsU3RyID0gJyc7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgdG90YWxTdHIgKz0gYCgke2N1cnJlbnQudmFsdWV9KSAtPiBgO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgdG90YWxTdHIgKz0gbnVsbDtcbiAgICByZXR1cm4gdG90YWxTdHI7XG4gIH1cblxuICBpbnNlcnRBdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHNpemUgLSAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBub29vaGVsbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5wcmVwZW5kKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICB9XG4gICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7IC8vIGNvcHlpbmcgY3VycmVudC5uZXh0IGluc2lkZSBuZXdOb2RlLm5leHRcbiAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG4gICAgICB0aGlzLnNpemUrKztcbiAgICB9XG4gIH1cbiAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvaGhoIG5vbycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XG4gICAgICB0aGlzLnBvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gY3VycmVudC5uZXh0Lm5leHQ7XG5cbiAgICBjdXJyZW50Lm5leHQgPSBjb3B5O1xuXG4gICAgdGhpcy5zaXplLS07XG4gIH1cbn1cbi8vIEkgc2hvdWxkIGV4dGVuZCBjbGFzcyBpbnN0ZWFkIG9mIG1vZGlmeWluZyB0aGUgb2xkIG9uZSBidXQgc2luY2UgSSBjb3B5IHRoZSBwcm9qZWN0IGxpbmtlZExpc3QgYW5kIG1vdmUgaXQgaW50byBIYXNodGFibGVQcm9qZWN0KGl0IGRvZXNzc24ndCBtYXR0ZXIpXG5leHBvcnQgY2xhc3MgSGFzaE1hcExpbmtlZExpc3QgZXh0ZW5kcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IodmFsdWUsIGtleSkge1xuICAgIHN1cGVyKHZhbHVlLCBrZXkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vTGlua2VkTGlzdCc7XG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuL0xpbmtlZExpc3QnO1xuLy8gYWx3YXlzIHVzaW5nIHRoZSBiZWxvdyByZXN0cmljdGlvbiBhcyBhIHJlcXVpcmVtZW50OlxuLyoqXG4gKiBpZiAoaGFzaENvZGUgPCAwIHx8IGhhc2hDb2RlID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICovXG5cbmNsYXNzIEhhc2hNYXAge1xuICBidWNrZXRzOiBBcnJheTtcbiAgTWF4TGVuZ3RoOiBudW1iZXI7XG4gIGxvYWRGYWN0b3I6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idWNrZXRzID0gW107XG4gICAgdGhpcy5sb2FkRmFjdG9yID0gMC43O1xuICAgIHRoaXMuTWF4TGVuZ3RoID0gMzE7XG4gIH1cbiAgaXNQcmltZShudW1iZXI6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSAoc2l6ZSA9IE1hdGguc3FydChudW1iZXIpKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBzaXplOyBpKyspIHtcbiAgICAgIC8vXG4gICAgICBpZiAobnVtYmVyICUgaSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXROZXh0UHJpbWUobnVtOiBudW1iZXIpIHtcbiAgICBsZXQgcHJpbWUgPSBudW07XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgd2hpbGUgKCFmb3VuZCkge1xuICAgICAgcHJpbWUrKztcbiAgICAgIGlmICh0aGlzLmlzUHJpbWUocHJpbWUpKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByaW1lO1xuICB9XG4gIGhhc2goa2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBoYXNoQ29kZSA9IDA7XG5cbiAgICBjb25zdCBwcmltZU51bWJlciA9IHRoaXMuTWF4TGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYXNoQ29kZSA9IChoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpKSAlIHByaW1lTnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoQ29kZTtcbiAgfVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAvKiBjaGVjayB0byBpbmNyZWFzZSBhcnJheSBsZW5ndGhcbiAgICAgKi9cblxuICAgIGlmICh0aGlzLmdldExlbmd0aCgpID49IHRoaXMuTWF4TGVuZ3RoICogdGhpcy5sb2FkRmFjdG9yKSB7XG4gICAgICB0aGlzLk1heExlbmd0aCA9IHRoaXMuZ2V0TmV4dFByaW1lKHRoaXMuTWF4TGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgaGFzaENvZGUgPSB0aGlzLmhhc2goa2V5KTtcbiAgICBpZiAoaGFzaENvZGUgPCAwIHx8IGhhc2hDb2RlID49IHRoaXMuTWF4TGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnVja2V0c1toYXNoQ29kZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGlua2VkTGlzdCA9IG5ldyBMaW5rZWRMaXN0KHZhbHVlLCBrZXkpO1xuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXSA9IGxpbmtlZExpc3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmZpbmRCeUtleShrZXkpICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLm1vZGlmaWVzQVNwZWNpZmljTm9kZShcbiAgICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSxcbiAgICAgICAgdmFsdWVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0uYXBwZW5kKHZhbHVlLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGhhc2hDb2RlID0gdGhpcy5oYXNoKGtleSk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmZpbmRCeUtleShrZXkpICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuYnVja2V0c1toYXNoQ29kZV0uZmluZEJ5S2V5KGtleSk7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuYnVja2V0c1toYXNoQ29kZV0uYXQoaW5kZXgpO1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgICAvL3JldHVybnMgdGhlIHZhbHVlIHRoYXQgaXMgYXNzaWduZWQgdG8gdGhpcyBrZXkuXG4gICAgLy9JZiBhIGtleSBpcyBub3QgZm91bmQsIHJldHVybiBudWxsLlxuICB9XG4gIGhhcyhrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGhhc2hDb2RlID0gdGhpcy5oYXNoKGtleSk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmZpbmRCeUtleShrZXkpICE9PSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIC8vdGFrZXMgYSBrZXkgYXMgYW4gYXJndW1lbnQuXG4gICAgLy9JZiB0aGUgZ2l2ZW4ga2V5IGlzIGluIHRoZSBoYXNoIG1hcCwgaXQgc2hvdWxkIHJlbW92ZSB0aGUgZW50cnkgd2l0aCB0aGF0IGtleSBhbmQgcmV0dXJuICdva2F5IGJhYmUsIEkgcmVtb3ZlZCBpdCcuXG4gICAgLy8gSWYgdGhlIGtleSBpc27igJl0IGluIHRoZSBoYXNoIG1hcCwgaXQgc2hvdWxkIHJldHVybiAnSSBjYW4ndCBub3QgZmluZCBpdCAsYmFiZSdcbiAgICBjb25zdCBoYXNoQ29kZSA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGlmIChcbiAgICAgIGhhc2hDb2RlIDwgMCB8fFxuICAgICAgaGFzaENvZGUgPj0gdGhpcy5NYXhMZW5ndGggfHxcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJpIGNhbid0IG5vdCBmaW5kIGl0LCBiYWJ5XCIpO1xuICAgICAgY29uc29sZS5sb2coaGFzaENvZGUpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgIGNvbnN0IGluZGV4T2ZMaW5rZWRMaXN0ID0gdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KTsgLy8gdGhpcyBpcyBhIGxpbmtlZGxpc3RcbiAgICBjb25zb2xlLmxvZyhpbmRleE9mTGlua2VkTGlzdCk7XG5cbiAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLnJlbW92ZUF0KGluZGV4T2ZMaW5rZWRMaXN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIC8vISBJIGFtIGhlcmVcbiAgICAvL3JldHVybnMgdGhlIG51bWJlciBvZiBzdG9yZWQga2V5cyBpbiB0aGUgaGFzaCBtYXAuXG4gICAgLy8gdXNpbmcgZm9yLi5sb29wIHRvIGluY3JlYXNlIHRoZSBjb3VudFxuICAgIC8vIGl0IGlzIHRyaWNreSBiZWNhdXNlIHdlIG5lZWQgdG8gYWNjZXNzIGV2ZXJ5IGJ1Y2tldCB0byBjb3VudCBmb3Iga2V5cyB0b28uXG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5NYXhMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYnVja2V0c1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGxldCBjdXJyZW50TGlua2VkTGlzdCA9IHRoaXMuYnVja2V0c1tpXS5oZWFkO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QudmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5rZXkgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5uZXh0ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QgPSBjdXJyZW50TGlua2VkTGlzdC5uZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIGNsZWFyKCkge1xuICAgIC8vcmVtb3ZlcyBhbGwgZW50cmllcyBpbiB0aGUgaGFzaCBtYXAuXG4gIH1cbiAga2V5cygpIHtcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGtleXMgaW5zaWRlIHRoZSBoYXNoIG1hcC5cbiAgfVxuICB2YWx1ZXMoKSB7XG4gICAgLy9yZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSB2YWx1ZXMuXG4gIH1cbiAgZW50cmllcygpIHtcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoIGtleSwgdmFsdWUgcGFpci4gRXhhbXBsZTogW1tmaXJzdEtleSwgZmlyc3RWYWx1ZV0sIFtzZWNvbmRLZXksIHNlY29uZFZhbHVlXV1cbiAgfVxufVxuXG5jb25zdCBoYXNoTWFwID0gbmV3IEhhc2hNYXAoKTtcbmhhc2hNYXAuc2V0KCdrZXkxJywgMSk7XG5oYXNoTWFwLnNldCgna2V5MicsIDIpO1xuaGFzaE1hcC5zZXQoJ2tleTMnLCAzKTtcbmhhc2hNYXAuc2V0KCdrZXk0JywgNCk7XG5oYXNoTWFwLnNldCgna2V5NScsIDUpO1xuaGFzaE1hcC5zZXQoJ2tleTYnLCA2KTtcbmhhc2hNYXAuc2V0KCdrZXk3JywgNyk7XG5oYXNoTWFwLnNldCgna2V5OCcsIDgpO1xuaGFzaE1hcC5zZXQoJ2tleTknLCA5KTtcbmhhc2hNYXAuc2V0KCdrZXkxMCcsIDEwKTtcbmhhc2hNYXAuc2V0KCdrZXkxMScsIDExKTtcbmhhc2hNYXAuc2V0KCdrZXkxMicsIDEyKTtcbmhhc2hNYXAuc2V0KCdrZXkxMycsIDEzKTtcbmhhc2hNYXAuc2V0KCdrZXkxNCcsIDE0KTtcbmhhc2hNYXAuc2V0KCdrZXkxNScsIDE1KTtcbmhhc2hNYXAuc2V0KCdrZXkxNicsIDE2KTtcbmhhc2hNYXAuc2V0KCdrZXkxNycsIDE3KTtcbmhhc2hNYXAuc2V0KCdrZXkxOCcsIDE4KTtcbmhhc2hNYXAuc2V0KCdrZXkxOScsIDE5KTtcbmhhc2hNYXAuc2V0KCdrZXkyMCcsIDIwKTtcbmhhc2hNYXAuc2V0KCdrZXkyMScsIDIxKTtcbmhhc2hNYXAuc2V0KCdrZXkyMicsIDIyKTtcbmhhc2hNYXAuc2V0KCdrZXkyMycsIDIzKTtcbmhhc2hNYXAuc2V0KCdrZXkyNCcsIDI0KTtcbmhhc2hNYXAuc2V0KCdrZXkyNScsIDI1KTtcbmhhc2hNYXAuc2V0KCdrZXkyNicsIDI2KTtcbmhhc2hNYXAuc2V0KCdrZXkyNycsIDI3KTtcbmhhc2hNYXAuc2V0KCdrZXkyOCcsIDI4KTtcbmhhc2hNYXAuc2V0KCdrZXkyOScsIDI5KTtcbmhhc2hNYXAuc2V0KCdrZXkzMCcsIDMwKTtcbmhhc2hNYXAuc2V0KCdrZXkzMScsIDMxKTtcbmhhc2hNYXAuc2V0KCdrZXkzMicsIDMyKTtcbmhhc2hNYXAuc2V0KCdrZXkzMycsIDMzKTtcbmhhc2hNYXAuc2V0KCdrZXkzNCcsIDM0KTtcbmhhc2hNYXAuc2V0KCdrZXkzNScsIDM1KTtcbmhhc2hNYXAuc2V0KCdrZXkzNicsIDM2KTtcbmhhc2hNYXAuc2V0KCdrZXkzNycsIDM3KTtcbmhhc2hNYXAuc2V0KCdrZXkzOCcsIDM4KTtcbmhhc2hNYXAuc2V0KCdrZXkzOScsIDM5KTtcbmhhc2hNYXAuc2V0KCdrZXk0MCcsIDQwKTtcbmhhc2hNYXAuc2V0KCdrZXk0MCcsIDQ1KTtcbmNvbnNvbGUubG9nKGhhc2hNYXAuTWF4TGVuZ3RoKTtcblxuY29uc29sZS5sb2coaGFzaE1hcC5nZXRMZW5ndGgoKSk7XG5jb25zb2xlLmxvZyhoYXNoTWFwKTtcblxuLy9FeHRyYSBjcmVkaXRzOiBDcmVhdGUgYSBjbGFzcyBIYXNoU2V0IHRoYXQgYmVoYXZlcyB0aGUgc2FtZSBhcyBhIEhhc2hNYXAgYnV0IG9ubHkgY29udGFpbnMga2V5cyB3aXRoIG5vIHZhbHVlcy5cblxuY2xhc3MgSGFzaHNldCBleHRlbmRzIEhhc2hNYXAge1xuICBzaXplOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMubG9hZEZhY3RvciA9IDAuNzU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
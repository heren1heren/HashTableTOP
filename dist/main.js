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
        for (var i = 0; i < this.MaxLength; i++) {
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
        // clear all the buckets?
        this.buckets = {};
        return this.buckets;
    };
    HashMap.prototype.keys = function () {
        //loopping
        var arr = [];
        for (var i = 0; i <= this.MaxLength; i++) {
            if (this.buckets[i] !== undefined &&
                this.buckets[i].head.value !== null &&
                this.buckets[i].head.key !== null) {
                var currentLinkedList = this.buckets[i].head;
                arr.push(currentLinkedList.key);
                while (currentLinkedList.value !== null &&
                    currentLinkedList.key !== null &&
                    currentLinkedList.next !== null) {
                    currentLinkedList = currentLinkedList.next;
                    arr.push(currentLinkedList.key);
                }
            }
        }
        console.log(arr);
        return arr;
    };
    HashMap.prototype.values = function () {
        var arr = [];
        for (var i = 0; i < this.MaxLength; i++) {
            if (this.buckets[i] !== undefined &&
                this.buckets[i].head.value !== null &&
                this.buckets[i].head.key !== null) {
                var currentLinkedList = this.buckets[i].head;
                arr.push(currentLinkedList.value);
                while (currentLinkedList.value !== null &&
                    currentLinkedList.key !== null &&
                    currentLinkedList.next !== null) {
                    currentLinkedList = currentLinkedList.next;
                    arr.push(currentLinkedList.value);
                }
            }
        }
        console.log(arr);
        return arr;
    };
    HashMap.prototype.entries = function () {
        //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
        var arr = [];
        for (var i = 0; i < this.MaxLength; i++) {
            if (this.buckets[i] !== undefined &&
                this.buckets[i].head.value !== null &&
                this.buckets[i].head.key !== null) {
                var currentLinkedList = this.buckets[i].head;
                var subArr = [];
                subArr.push(currentLinkedList.key);
                subArr.push();
                arr.push([currentLinkedList.key, currentLinkedList.value]);
                while (currentLinkedList.value !== null &&
                    currentLinkedList.key !== null &&
                    currentLinkedList.next !== null) {
                    currentLinkedList = currentLinkedList.next;
                    var subArr_1 = [];
                    subArr_1.push(currentLinkedList.key);
                    subArr_1.push(currentLinkedList.value);
                    arr.push(subArr_1);
                }
            }
        }
        console.log(arr);
        return arr;
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
hashMap.set('key41', 41);
hashMap.set('key42', 42);
hashMap.set('key43', 43);
hashMap.set('key44', 44);
hashMap.set('key45', 45);
hashMap.set('key46', 46);
hashMap.set('key47', 47);
hashMap.set('key48', 48);
hashMap.set('key49', 49);
hashMap.set('key50', 50);
hashMap.set('key51', 51);
hashMap.set('key52', 52);
hashMap.set('key53', 53);
hashMap.set('key54', 54);
hashMap.set('key55', 55);
hashMap.set('key56', 56);
hashMap.set('key57', 57);
hashMap.set('key58', 58);
hashMap.set('key59', 59);
hashMap.set('key60', 60);
hashMap.set('key61', 61);
hashMap.set('key62', 62);
hashMap.set('key63', 63);
hashMap.set('key64', 64);
hashMap.set('key65', 65);
hashMap.set('key66', 66);
hashMap.set('key67', 67);
hashMap.set('key68', 68);
hashMap.set('key69', 69);
hashMap.entries();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXJCLGlIQUFpSDtBQUVqSDtJQUFzQiwyQkFBTztJQUczQjtRQUNFLGtCQUFLLFdBQUUsU0FBQztRQUNSLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQVJxQixPQUFPLEdBUTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL3NyYy9MaW5rZWRMaXN0LnRzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllcztcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsY0FBUztBQUNULG9CQUFTO0FBQ1QsbUJBQVNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8qIG1haW4gc2NzcyBzdHlsZSBzaGVldFxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBOb2RlIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbmV4dDogb2JqZWN0O1xuICBrZXk6IHN0cmluZztcbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgfVxuXG4gIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkTGlzdCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcblxuICBoZWFkOiBhbnk7XG5cbiAgdGFpbDogYW55O1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIHRoaXMuaGVhZCA9IHsgdmFsdWU6IHZhbHVlLCBrZXk6IGtleSwgbmV4dDogbnVsbCB9O1xuICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLnNpemUgPSAxO1xuICB9XG5cbiAgYXBwZW5kKHZhbHVlOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5oZWFkID0geyB2YWx1ZTogdmFsdWUsIGtleToga2V5LCBuZXh0OiBudWxsIH07XG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLmhlYWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwga2V5KTtcblxuICAgIHRoaXMudGFpbCA9IG5vZGU7XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIGlmIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudC5uZXh0ID0gbm9kZTtcbiAgICB0aGlzLnNpemUrKztcbiAgfVxuXG4gIHByZXBlbmQodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgY29uc3QgaGVhZENvcHkgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IGhlYWRDb3B5O1xuICAgIHRoaXMuc2l6ZSsrO1xuICB9XG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuICBnZXRIZWFkKCkge1xuICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG4gIGdldFRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFpbDtcbiAgICAvLyByZXR1cm5zIHRoZSBsYXN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgfVxuICBhdChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuc2l6ZSAtIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgY29uc29sZS5sb2coJ29oaGggbm9vb25lbGxsJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjb3B5ID0gdGhpcy5oZWFkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgY29weSA9IGNvcHkubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cbiAgbW9kaWZpZXNBU3BlY2lmaWNOb2RlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAvLyByZXR1cm4gYSBjb3B5XG4gICAgLy8gY29uc3QgaW5kZXggPSB0aGlzLmZpbmQodmFsdWUpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwb3AoKSB7XG4gICAgLy9ob3cgdG8gcmVtb3ZlIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgbGlzdD8/P1xuICAgIC8vZmlyc3QgSSBkbyB0aGlzLnRhaWwgPSBsYXN0IHRhaWw7ICBhbmQgdGhpcy50YWlsLm5leHQgPSBudWxsO1xuXG4gICAgLyogZG9uJ3Qga25vdyBob3cgdG8gZG8gdGhpcy50YWlsID0gcHJldmlvdXMgdGFpbFxuICAgIGFzc3VtcHRpb25zOlxuICAgIDEuIHRyYW5zdmVyc2UgaGVhZCAtPiBkZWxldGUgbGFzdCBlbGVtZW50IGNvbnRhaW5zIG5leHQ6bnVsbFxuICAgICAgIGRvbid0IGtub3cgaG93IHRvIGRlbGV0ZSBsYXN0IGVsZW1lbnQgY29udGFpbnMgbmV4dDpudWxsXG4gICAgIC0+IDEuMSBjcmVhdGUgYSAuLi4uLiBcbiAgICAgICAgICAgICB0cnkgd2hpbGUoY3VycmVudC5uZXh0ICE9PSBudWxsKSB0byB0cmFuc3ZlcnNlIHRoZSBsaW5rZWQgbGlzdFxuICAgICAgICAgICAgLT4gMS4xLjEgZG9uJ3Qga25vdyBob3cgdG8gLi4uLlxuICAgICAgICAxLjIgXG4gICAgIC0+IHRoaXMudGFpbCA9IHRoaXMuYXQoc2l6ZS0yKVxuXG4gICAgIDIuIGFub3RoZXIgd2F5IGV4Y2VwdCAoMS4pXG4gICAgIDMuIGFub3RoZXIgd2F5IG9mIGFub3RoZXIgd2F5Li4uXG4gICAgICovXG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMSkge1xuICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSB0aGlzLmF0KHRoaXMuc2l6ZSAtIDIpO1xuXG4gICAgdGhpcy50YWlsLm5leHQgPSBudWxsO1xuICAgIHRoaXMuc2l6ZS0tO1xuICB9XG5cbiAgY29udGFpbnModmFsdWU6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGluIHRoZSBsaXN0XG4gICAgLy8gYW5kIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICAgIC8qIG15IHdheXM6IFxuICAgIHRyYW5zdmVyc2luZyB0aGlzLmhlYWQgLT4gY2hlY2sgaWYodmFsdWUgPT09IHRoaXMudmFsdWUpLiBcbiAgICBSZXBlYXQgdW50aWwgdGhpcy5oZWFkLm5leHQgPT09IG51bGxcbiAgICBieSB1c2luZyB3aGlsZSBsb29wXG4gICAgKi9cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIC8vXG4gICAgd2hpbGUgKGN1cnJlbnQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50LnZhbHVlKSB7XG4gICAgICAgIC8vIG5vdCBza2lwcGluZyB0aGUgZmlyc3QgdGhpcy5oZWFkLnZhbHVlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZmluZEJ5S2V5KGtleTogc3RyaW5nKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEluZGV4OyBpKyspIHtcbiAgICAgIGlmIChrZXkgPT09IGN1cnJlbnQua2V5KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZmluZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEluZGV4OyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCB0b3RhbFN0ciA9ICcnO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHRvdGFsU3RyICs9IGAoJHtjdXJyZW50LnZhbHVlfSkgLT4gYDtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHRvdGFsU3RyICs9IG51bGw7XG4gICAgcmV0dXJuIHRvdGFsU3RyO1xuICB9XG5cbiAgaW5zZXJ0QXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBzaXplIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ29oaGggbm9vb2hlbGwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMucHJlcGVuZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0OyAvLyBjb3B5aW5nIGN1cnJlbnQubmV4dCBpbnNpZGUgbmV3Tm9kZS5uZXh0XG4gICAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgdGhpcy5zaXplKys7XG4gICAgfVxuICB9XG4gIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBub28nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMSkge1xuICAgICAgdGhpcy5wb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29weSA9IGN1cnJlbnQubmV4dC5uZXh0O1xuXG4gICAgY3VycmVudC5uZXh0ID0gY29weTtcblxuICAgIHRoaXMuc2l6ZS0tO1xuICB9XG59XG4vLyBJIHNob3VsZCBleHRlbmQgY2xhc3MgaW5zdGVhZCBvZiBtb2RpZnlpbmcgdGhlIG9sZCBvbmUgYnV0IHNpbmNlIEkgY29weSB0aGUgcHJvamVjdCBsaW5rZWRMaXN0IGFuZCBtb3ZlIGl0IGludG8gSGFzaHRhYmxlUHJvamVjdChpdCBkb2Vzc3NuJ3QgbWF0dGVyKVxuZXhwb3J0IGNsYXNzIEhhc2hNYXBMaW5rZWRMaXN0IGV4dGVuZHMgTGlua2VkTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlLCBrZXkpIHtcbiAgICBzdXBlcih2YWx1ZSwga2V5KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuL0xpbmtlZExpc3QnO1xuaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9MaW5rZWRMaXN0Jztcbi8vIGFsd2F5cyB1c2luZyB0aGUgYmVsb3cgcmVzdHJpY3Rpb24gYXMgYSByZXF1aXJlbWVudDpcbi8qKlxuICogaWYgKGhhc2hDb2RlIDwgMCB8fCBoYXNoQ29kZSA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAqL1xuXG5jbGFzcyBIYXNoTWFwIHtcbiAgYnVja2V0czogQXJyYXk7XG4gIE1heExlbmd0aDogbnVtYmVyO1xuICBsb2FkRmFjdG9yOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnVja2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZEZhY3RvciA9IDAuNztcbiAgICB0aGlzLk1heExlbmd0aCA9IDMxO1xuICB9XG4gIGlzUHJpbWUobnVtYmVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gKHNpemUgPSBNYXRoLnNxcnQobnVtYmVyKSk7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gc2l6ZTsgaSsrKSB7XG4gICAgICAvL1xuICAgICAgaWYgKG51bWJlciAlIGkgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0TmV4dFByaW1lKG51bTogbnVtYmVyKSB7XG4gICAgbGV0IHByaW1lID0gbnVtO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlICghZm91bmQpIHtcbiAgICAgIHByaW1lKys7XG4gICAgICBpZiAodGhpcy5pc1ByaW1lKHByaW1lKSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltZTtcbiAgfVxuICBoYXNoKGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgY29uc3QgcHJpbWVOdW1iZXIgPSB0aGlzLk1heExlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaENvZGUgPSAoaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKSkgJSBwcmltZU51bWJlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGU7XG4gIH1cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgLyogY2hlY2sgdG8gaW5jcmVhc2UgYXJyYXkgbGVuZ3RoXG4gICAgICovXG5cbiAgICBpZiAodGhpcy5nZXRMZW5ndGgoKSA+PSB0aGlzLk1heExlbmd0aCAqIHRoaXMubG9hZEZhY3Rvcikge1xuICAgICAgdGhpcy5NYXhMZW5ndGggPSB0aGlzLmdldE5leHRQcmltZSh0aGlzLk1heExlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGhhc2hDb2RlID0gdGhpcy5oYXNoKGtleSk7XG4gICAgaWYgKGhhc2hDb2RlIDwgMCB8fCBoYXNoQ29kZSA+PSB0aGlzLk1heExlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJ1Y2tldHNbaGFzaENvZGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxpbmtlZExpc3QgPSBuZXcgTGlua2VkTGlzdCh2YWx1ZSwga2V5KTtcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gPSBsaW5rZWRMaXN0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5tb2RpZmllc0FTcGVjaWZpY05vZGUoXG4gICAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0uZmluZEJ5S2V5KGtleSksXG4gICAgICAgIHZhbHVlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmFwcGVuZCh2YWx1ZSwga2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNoQ29kZSA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmZpbmRCeUtleShrZXkpO1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdLmF0KGluZGV4KTtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gICAgLy9yZXR1cm5zIHRoZSB2YWx1ZSB0aGF0IGlzIGFzc2lnbmVkIHRvIHRoaXMga2V5LlxuICAgIC8vSWYgYSBrZXkgaXMgbm90IGZvdW5kLCByZXR1cm4gbnVsbC5cbiAgfVxuICBoYXMoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNoQ29kZSA9IHRoaXMuaGFzaChrZXkpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYnVja2V0c1toYXNoQ29kZV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5maW5kQnlLZXkoa2V5KSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICAvL3Rha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50LlxuICAgIC8vSWYgdGhlIGdpdmVuIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCByZW1vdmUgdGhlIGVudHJ5IHdpdGggdGhhdCBrZXkgYW5kIHJldHVybiAnb2theSBiYWJlLCBJIHJlbW92ZWQgaXQnLlxuICAgIC8vIElmIHRoZSBrZXkgaXNu4oCZdCBpbiB0aGUgaGFzaCBtYXAsIGl0IHNob3VsZCByZXR1cm4gJ0kgY2FuJ3Qgbm90IGZpbmQgaXQgLGJhYmUnXG4gICAgY29uc3QgaGFzaENvZGUgPSB0aGlzLmhhc2goa2V5KTtcbiAgICBpZiAoXG4gICAgICBoYXNoQ29kZSA8IDAgfHxcbiAgICAgIGhhc2hDb2RlID49IHRoaXMuTWF4TGVuZ3RoIHx8XG4gICAgICB0aGlzLmJ1Y2tldHNbaGFzaENvZGVdID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBjYW4ndCBub3QgZmluZCBpdCwgYmFieVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcblxuICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICBjb25zdCBpbmRleE9mTGlua2VkTGlzdCA9IHRoaXMuYnVja2V0c1toYXNoQ29kZV0uZmluZEJ5S2V5KGtleSk7IC8vIHRoaXMgaXMgYSBsaW5rZWRsaXN0XG4gICAgY29uc29sZS5sb2coaW5kZXhPZkxpbmtlZExpc3QpO1xuXG4gICAgdGhpcy5idWNrZXRzW2hhc2hDb2RlXS5yZW1vdmVBdChpbmRleE9mTGlua2VkTGlzdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdldExlbmd0aCgpIHtcbiAgICAvLyEgSSBhbSBoZXJlXG4gICAgLy9yZXR1cm5zIHRoZSBudW1iZXIgb2Ygc3RvcmVkIGtleXMgaW4gdGhlIGhhc2ggbWFwLlxuICAgIC8vIHVzaW5nIGZvci4ubG9vcCB0byBpbmNyZWFzZSB0aGUgY291bnRcbiAgICAvLyBpdCBpcyB0cmlja3kgYmVjYXVzZSB3ZSBuZWVkIHRvIGFjY2VzcyBldmVyeSBidWNrZXQgdG8gY291bnQgZm9yIGtleXMgdG9vLlxuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5NYXhMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYnVja2V0c1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGxldCBjdXJyZW50TGlua2VkTGlzdCA9IHRoaXMuYnVja2V0c1tpXS5oZWFkO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QudmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5rZXkgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5uZXh0ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QgPSBjdXJyZW50TGlua2VkTGlzdC5uZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIGNsZWFyKCkge1xuICAgIC8vcmVtb3ZlcyBhbGwgZW50cmllcyBpbiB0aGUgaGFzaCBtYXAuXG4gICAgLy8gY2xlYXIgYWxsIHRoZSBidWNrZXRzP1xuXG4gICAgdGhpcy5idWNrZXRzID0ge307XG4gICAgcmV0dXJuIHRoaXMuYnVja2V0cztcbiAgfVxuICBrZXlzKCkge1xuICAgIC8vbG9vcHBpbmdcblxuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuTWF4TGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5idWNrZXRzW2ldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdGhpcy5idWNrZXRzW2ldLmhlYWQudmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgdGhpcy5idWNrZXRzW2ldLmhlYWQua2V5ICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgbGV0IGN1cnJlbnRMaW5rZWRMaXN0ID0gdGhpcy5idWNrZXRzW2ldLmhlYWQ7XG4gICAgICAgIGFyci5wdXNoKGN1cnJlbnRMaW5rZWRMaXN0LmtleSk7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC52YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGN1cnJlbnRMaW5rZWRMaXN0LmtleSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGN1cnJlbnRMaW5rZWRMaXN0Lm5leHQgIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QgPSBjdXJyZW50TGlua2VkTGlzdC5uZXh0O1xuICAgICAgICAgIGFyci5wdXNoKGN1cnJlbnRMaW5rZWRMaXN0LmtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgdmFsdWVzKCkge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5NYXhMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0uaGVhZC52YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0uaGVhZC5rZXkgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBsZXQgY3VycmVudExpbmtlZExpc3QgPSB0aGlzLmJ1Y2tldHNbaV0uaGVhZDtcbiAgICAgICAgYXJyLnB1c2goY3VycmVudExpbmtlZExpc3QudmFsdWUpO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QudmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5rZXkgIT09IG51bGwgJiZcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC5uZXh0ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnRMaW5rZWRMaXN0ID0gY3VycmVudExpbmtlZExpc3QubmV4dDtcbiAgICAgICAgICBhcnIucHVzaChjdXJyZW50TGlua2VkTGlzdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgZW50cmllcygpIHtcbiAgICAvL3JldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoIGtleSwgdmFsdWUgcGFpci4gRXhhbXBsZTogW1tmaXJzdEtleSwgZmlyc3RWYWx1ZV0sIFtzZWNvbmRLZXksIHNlY29uZFZhbHVlXV1cbiAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5NYXhMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0uaGVhZC52YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmJ1Y2tldHNbaV0uaGVhZC5rZXkgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBsZXQgY3VycmVudExpbmtlZExpc3QgPSB0aGlzLmJ1Y2tldHNbaV0uaGVhZDtcbiAgICAgICAgY29uc3Qgc3ViQXJyID0gW107XG4gICAgICAgIHN1YkFyci5wdXNoKGN1cnJlbnRMaW5rZWRMaXN0LmtleSk7XG4gICAgICAgIHN1YkFyci5wdXNoKCk7XG4gICAgICAgIGFyci5wdXNoKFtjdXJyZW50TGlua2VkTGlzdC5rZXksIGN1cnJlbnRMaW5rZWRMaXN0LnZhbHVlXSk7XG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICBjdXJyZW50TGlua2VkTGlzdC52YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGN1cnJlbnRMaW5rZWRMaXN0LmtleSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGN1cnJlbnRMaW5rZWRMaXN0Lm5leHQgIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudExpbmtlZExpc3QgPSBjdXJyZW50TGlua2VkTGlzdC5uZXh0O1xuICAgICAgICAgIGNvbnN0IHN1YkFyciA9IFtdO1xuICAgICAgICAgIHN1YkFyci5wdXNoKGN1cnJlbnRMaW5rZWRMaXN0LmtleSk7XG4gICAgICAgICAgc3ViQXJyLnB1c2goY3VycmVudExpbmtlZExpc3QudmFsdWUpO1xuICAgICAgICAgIGFyci5wdXNoKHN1YkFycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cbn1cblxuY29uc3QgaGFzaE1hcCA9IG5ldyBIYXNoTWFwKCk7XG5oYXNoTWFwLnNldCgna2V5MScsIDEpO1xuaGFzaE1hcC5zZXQoJ2tleTInLCAyKTtcbmhhc2hNYXAuc2V0KCdrZXkzJywgMyk7XG5oYXNoTWFwLnNldCgna2V5NCcsIDQpO1xuaGFzaE1hcC5zZXQoJ2tleTUnLCA1KTtcbmhhc2hNYXAuc2V0KCdrZXk2JywgNik7XG5oYXNoTWFwLnNldCgna2V5NycsIDcpO1xuaGFzaE1hcC5zZXQoJ2tleTgnLCA4KTtcbmhhc2hNYXAuc2V0KCdrZXk5JywgOSk7XG5oYXNoTWFwLnNldCgna2V5MTAnLCAxMCk7XG5oYXNoTWFwLnNldCgna2V5MTEnLCAxMSk7XG5oYXNoTWFwLnNldCgna2V5MTInLCAxMik7XG5oYXNoTWFwLnNldCgna2V5MTMnLCAxMyk7XG5oYXNoTWFwLnNldCgna2V5MTQnLCAxNCk7XG5oYXNoTWFwLnNldCgna2V5MTUnLCAxNSk7XG5oYXNoTWFwLnNldCgna2V5MTYnLCAxNik7XG5oYXNoTWFwLnNldCgna2V5MTcnLCAxNyk7XG5oYXNoTWFwLnNldCgna2V5MTgnLCAxOCk7XG5oYXNoTWFwLnNldCgna2V5MTknLCAxOSk7XG5oYXNoTWFwLnNldCgna2V5MjAnLCAyMCk7XG5oYXNoTWFwLnNldCgna2V5MjEnLCAyMSk7XG5oYXNoTWFwLnNldCgna2V5MjInLCAyMik7XG5oYXNoTWFwLnNldCgna2V5MjMnLCAyMyk7XG5oYXNoTWFwLnNldCgna2V5MjQnLCAyNCk7XG5oYXNoTWFwLnNldCgna2V5MjUnLCAyNSk7XG5oYXNoTWFwLnNldCgna2V5MjYnLCAyNik7XG5oYXNoTWFwLnNldCgna2V5MjcnLCAyNyk7XG5oYXNoTWFwLnNldCgna2V5MjgnLCAyOCk7XG5oYXNoTWFwLnNldCgna2V5MjknLCAyOSk7XG5oYXNoTWFwLnNldCgna2V5MzAnLCAzMCk7XG5oYXNoTWFwLnNldCgna2V5MzEnLCAzMSk7XG5oYXNoTWFwLnNldCgna2V5MzInLCAzMik7XG5oYXNoTWFwLnNldCgna2V5MzMnLCAzMyk7XG5oYXNoTWFwLnNldCgna2V5MzQnLCAzNCk7XG5oYXNoTWFwLnNldCgna2V5MzUnLCAzNSk7XG5oYXNoTWFwLnNldCgna2V5MzYnLCAzNik7XG5oYXNoTWFwLnNldCgna2V5MzcnLCAzNyk7XG5oYXNoTWFwLnNldCgna2V5MzgnLCAzOCk7XG5oYXNoTWFwLnNldCgna2V5MzknLCAzOSk7XG5oYXNoTWFwLnNldCgna2V5NDAnLCA0MCk7XG5oYXNoTWFwLnNldCgna2V5NDAnLCA0NSk7XG5oYXNoTWFwLnNldCgna2V5NDEnLCA0MSk7XG5oYXNoTWFwLnNldCgna2V5NDInLCA0Mik7XG5oYXNoTWFwLnNldCgna2V5NDMnLCA0Myk7XG5oYXNoTWFwLnNldCgna2V5NDQnLCA0NCk7XG5oYXNoTWFwLnNldCgna2V5NDUnLCA0NSk7XG5oYXNoTWFwLnNldCgna2V5NDYnLCA0Nik7XG5oYXNoTWFwLnNldCgna2V5NDcnLCA0Nyk7XG5oYXNoTWFwLnNldCgna2V5NDgnLCA0OCk7XG5oYXNoTWFwLnNldCgna2V5NDknLCA0OSk7XG5oYXNoTWFwLnNldCgna2V5NTAnLCA1MCk7XG5oYXNoTWFwLnNldCgna2V5NTEnLCA1MSk7XG5oYXNoTWFwLnNldCgna2V5NTInLCA1Mik7XG5oYXNoTWFwLnNldCgna2V5NTMnLCA1Myk7XG5oYXNoTWFwLnNldCgna2V5NTQnLCA1NCk7XG5oYXNoTWFwLnNldCgna2V5NTUnLCA1NSk7XG5oYXNoTWFwLnNldCgna2V5NTYnLCA1Nik7XG5oYXNoTWFwLnNldCgna2V5NTcnLCA1Nyk7XG5oYXNoTWFwLnNldCgna2V5NTgnLCA1OCk7XG5oYXNoTWFwLnNldCgna2V5NTknLCA1OSk7XG5oYXNoTWFwLnNldCgna2V5NjAnLCA2MCk7XG5oYXNoTWFwLnNldCgna2V5NjEnLCA2MSk7XG5oYXNoTWFwLnNldCgna2V5NjInLCA2Mik7XG5oYXNoTWFwLnNldCgna2V5NjMnLCA2Myk7XG5oYXNoTWFwLnNldCgna2V5NjQnLCA2NCk7XG5oYXNoTWFwLnNldCgna2V5NjUnLCA2NSk7XG5oYXNoTWFwLnNldCgna2V5NjYnLCA2Nik7XG5oYXNoTWFwLnNldCgna2V5NjcnLCA2Nyk7XG5oYXNoTWFwLnNldCgna2V5NjgnLCA2OCk7XG5oYXNoTWFwLnNldCgna2V5NjknLCA2OSk7XG5oYXNoTWFwLmVudHJpZXMoKTtcblxuY29uc29sZS5sb2coaGFzaE1hcCk7XG5cbi8vRXh0cmEgY3JlZGl0czogQ3JlYXRlIGEgY2xhc3MgSGFzaFNldCB0aGF0IGJlaGF2ZXMgdGhlIHNhbWUgYXMgYSBIYXNoTWFwIGJ1dCBvbmx5IGNvbnRhaW5zIGtleXMgd2l0aCBubyB2YWx1ZXMuXG5cbmNsYXNzIEhhc2hzZXQgZXh0ZW5kcyBIYXNoTWFwIHtcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gMDtcbiAgICB0aGlzLmxvYWRGYWN0b3IgPSAwLjc1O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
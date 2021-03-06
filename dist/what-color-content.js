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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONTAINER_ID = '__what_color_container__';
/* harmony export (immutable) */ __webpack_exports__["e"] = CONTAINER_ID;

const CANVAS_WRAPPER_ID = '__what_color_canvas_wrapper__';
/* harmony export (immutable) */ __webpack_exports__["b"] = CANVAS_WRAPPER_ID;

const CANVAS_ID = '__what_color_canvas__';
/* harmony export (immutable) */ __webpack_exports__["a"] = CANVAS_ID;

const COLOR_WIDGET_ID = '__what_color_color_widget__';
/* harmony export (immutable) */ __webpack_exports__["d"] = COLOR_WIDGET_ID;

const COLOR_INPUT_ID = '__what_color_color_input__';
/* harmony export (immutable) */ __webpack_exports__["c"] = COLOR_INPUT_ID;

const DEFAULT_COLOR = 'FFFFFF';
/* harmony export (immutable) */ __webpack_exports__["f"] = DEFAULT_COLOR;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(13);
Hogan.Template = __webpack_require__(14).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_on_message__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert_data_to_canvas__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_color_widget__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_canvas_pixel_color__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__copy_color__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inject_container__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inject_canvas__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_events__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unregister_events__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove_container__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__is_container_injected__ = __webpack_require__(24);












let killEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

let mouseMoveHandler = (e) => {
  killEvent(e);
  Object(__WEBPACK_IMPORTED_MODULE_2__render_color_widget__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__get_canvas_pixel_color__["a" /* default */])(e.clientX, e.clientY));
};

let mouseUpHandler = (e) => {
  killEvent(e);
  Object(__WEBPACK_IMPORTED_MODULE_4__copy_color__["a" /* default */])();
  destroy();
};

const EVENTS = [
  {
    event: 'mouseup',
    handler: mouseUpHandler
  },
  {
    event: 'mousemove',
    handler: mouseMoveHandler
  }
];

let destroy = () => {
  Object(__WEBPACK_IMPORTED_MODULE_8__unregister_events__["a" /* default */])(EVENTS);
  Object(__WEBPACK_IMPORTED_MODULE_9__remove_container__["a" /* default */])();
};

let start = (data) => {
  if (Object(__WEBPACK_IMPORTED_MODULE_10__is_container_injected__["a" /* default */])()) {
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_5__inject_container__["a" /* default */])();
  Object(__WEBPACK_IMPORTED_MODULE_2__render_color_widget__["a" /* default */])();

  Object(__WEBPACK_IMPORTED_MODULE_1__convert_data_to_canvas__["a" /* default */])(data).then((canvas) => {
    Object(__WEBPACK_IMPORTED_MODULE_6__inject_canvas__["a" /* default */])(canvas);
    Object(__WEBPACK_IMPORTED_MODULE_7__register_events__["a" /* default */])(EVENTS);
  });
};

Object(__WEBPACK_IMPORTED_MODULE_0__common_on_message__["a" /* default */])({ 'START': start });


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let message = chrome.runtime.onMessage;

/* harmony default export */ __webpack_exports__["a"] = ((handlersMap) => {
  let handler = (message, sender, respond) => {
    handlersMap[message.type](message.payload, sender, respond);
    return true; // async handler
  };

  message.addListener(handler);
  return () => message.removeListener(handler);
});



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__convert_data_to_image__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert_image_to_canvas__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["a"] = ((data) =>
  Object(__WEBPACK_IMPORTED_MODULE_0__convert_data_to_image__["a" /* default */])(data)
    .then(__WEBPACK_IMPORTED_MODULE_1__convert_image_to_canvas__["a" /* default */]));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((data) => new Promise((resolve) => {
  let image = new Image();
  image.onload = () => resolve(image);
  image.src = data;
}));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((image) => {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  let ratio = 1 / window.devicePixelRatio;

  canvas.width = image.width;
  canvas.height = image.height;

  context.scale(ratio, ratio);
  context.webkitImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  return canvas;
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_color_widget_mustache__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_color_widget_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_color_widget_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_config__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ((color) => {
  document.getElementById(__WEBPACK_IMPORTED_MODULE_1__page_config__["d" /* COLOR_WIDGET_ID */]).innerHTML = __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_color_widget_mustache___default()({
    color: (color || __WEBPACK_IMPORTED_MODULE_1__page_config__["f" /* DEFAULT_COLOR */]),
    colorInputId: __WEBPACK_IMPORTED_MODULE_1__page_config__["c" /* COLOR_INPUT_ID */]
  });
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(1);
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div");t.b("\n" + i);t.b("  style=\"");t.b("\n" + i);t.b("    position: absolute;");t.b("\n" + i);t.b("    right: 3px;");t.b("\n" + i);t.b("    bottom: 3px;");t.b("\n" + i);t.b("    background: rgba(0, 0, 0, 0.8);");t.b("\n" + i);t.b("    border-radius: 4px;");t.b("\n" + i);t.b("    width: 93px;");t.b("\n" + i);t.b("    height: 30px;");t.b("\n" + i);t.b("    box-sizing: border-box;");t.b("\n" + i);t.b("    pointer-events: none;");t.b("\n" + i);t.b("  \">");t.b("\n" + i);t.b("  <div");t.b("\n" + i);t.b("    style=\"");t.b("\n" + i);t.b("      background: #");t.b(t.v(t.f("color",c,p,0)));t.b(";");t.b("\n" + i);t.b("      width: 24px;");t.b("\n" + i);t.b("      height: 24px;");t.b("\n" + i);t.b("      border-radius: 2px;");t.b("\n" + i);t.b("      border: 1px solid rgba(255, 255, 255, 0.8);");t.b("\n" + i);t.b("      position: absolute;");t.b("\n" + i);t.b("      left: 3px;");t.b("\n" + i);t.b("      top: 3px;");t.b("\n" + i);t.b("      box-sizing: border-box;");t.b("\n" + i);t.b("    \"></div>");t.b("\n");t.b("\n" + i);t.b("  <input");t.b("\n" + i);t.b("    id=\"");t.b(t.v(t.f("colorInputId",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    readonly");t.b("\n" + i);t.b("    type=\"text\"");t.b("\n" + i);t.b("    value=\"");t.b(t.v(t.f("color",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    style=\"");t.b("\n" + i);t.b("      width: 300px;");t.b("\n" + i);t.b("      height: 22px;");t.b("\n" + i);t.b("      position: absolute;");t.b("\n" + i);t.b("      left: 30px;");t.b("\n" + i);t.b("      top: 5px;");t.b("\n" + i);t.b("      width: 60px;");t.b("\n" + i);t.b("      background: 0;");t.b("\n" + i);t.b("      border: 0;");t.b("\n" + i);t.b("      color: #fff;");t.b("\n" + i);t.b("      box-sizing: border-box;");t.b("\n" + i);t.b("      font: 12px 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;");t.b("\n" + i);t.b("      text-align: center;");t.b("\n" + i);t.b("    \">");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div\n  style=\"\n    position: absolute;\n    right: 3px;\n    bottom: 3px;\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 4px;\n    width: 93px;\n    height: 30px;\n    box-sizing: border-box;\n    pointer-events: none;\n  \">\n  <div\n    style=\"\n      background: #{{color}};\n      width: 24px;\n      height: 24px;\n      border-radius: 2px;\n      border: 1px solid rgba(255, 255, 255, 0.8);\n      position: absolute;\n      left: 3px;\n      top: 3px;\n      box-sizing: border-box;\n    \"></div>\n\n  <input\n    id=\"{{colorInputId}}\"\n    readonly\n    type=\"text\"\n    value=\"{{color}}\"\n    style=\"\n      width: 300px;\n      height: 22px;\n      position: absolute;\n      left: 30px;\n      top: 5px;\n      width: 60px;\n      background: 0;\n      border: 0;\n      color: #fff;\n      box-sizing: border-box;\n      font: 12px 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n      text-align: center;\n    \">\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_rgb_to_hex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_config__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ((px, py) => {
  let canvas = document.getElementById(__WEBPACK_IMPORTED_MODULE_1__page_config__["a" /* CANVAS_ID */]);
  let data = canvas.getContext('2d').getImageData(px, py, 1, 1).data;
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_rgb_to_hex__["a" /* default */])(data[0], data[1], data[2]);
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((r, g, b) =>
  ('000000' + ((r << 16) | (g << 8) | b).toString(16)).slice(-6).toUpperCase());


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  let colorInputEl = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["c" /* COLOR_INPUT_ID */]);
  colorInputEl.focus();
  colorInputEl.setSelectionRange(0, colorInputEl.value.length);
  document.execCommand('copy');
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_container_mustache__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_container_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_container_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_config__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (() => {
  document.body.insertAdjacentHTML('beforeend', __WEBPACK_IMPORTED_MODULE_0_mustache_loader_templates_container_mustache___default()({
    containerId: __WEBPACK_IMPORTED_MODULE_1__page_config__["e" /* CONTAINER_ID */],
    canvasWrapperId: __WEBPACK_IMPORTED_MODULE_1__page_config__["b" /* CANVAS_WRAPPER_ID */],
    colorWidgetId: __WEBPACK_IMPORTED_MODULE_1__page_config__["d" /* COLOR_WIDGET_ID */]
  }));
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(1);
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div");t.b("\n" + i);t.b("  id=\"");t.b(t.v(t.f("containerId",c,p,0)));t.b("\"");t.b("\n" + i);t.b("  style=\"");t.b("\n" + i);t.b("    position: fixed;");t.b("\n" + i);t.b("    z-index: 100000;");t.b("\n" + i);t.b("    left: 0;");t.b("\n" + i);t.b("    top: 0;");t.b("\n" + i);t.b("    right: 0;");t.b("\n" + i);t.b("    bottom: 0;");t.b("\n" + i);t.b("    background: transparent;");t.b("\n" + i);t.b("    cursor: crosshair;");t.b("\n" + i);t.b("    box-sizing: border-box;");t.b("\n" + i);t.b("    user-select: none;");t.b("\n" + i);t.b("  \">");t.b("\n" + i);t.b("  <div");t.b("\n" + i);t.b("    id=\"");t.b(t.v(t.f("canvasWrapperId",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    style=\"");t.b("\n" + i);t.b("      position: absolute;");t.b("\n" + i);t.b("      z-index: 50;");t.b("\n" + i);t.b("      left: 0;");t.b("\n" + i);t.b("      top: 0;");t.b("\n" + i);t.b("      user-select: none;");t.b("\n" + i);t.b("      pointer-events: none;");t.b("\n" + i);t.b("    \"");t.b("\n" + i);t.b("  ></div>");t.b("\n" + i);t.b("  <div");t.b("\n" + i);t.b("    id=\"");t.b(t.v(t.f("colorWidgetId",c,p,0)));t.b("\"");t.b("\n" + i);t.b("    style=\"");t.b("\n" + i);t.b("      position: absolute;");t.b("\n" + i);t.b("      z-index: 100;");t.b("\n" + i);t.b("      left: 0;");t.b("\n" + i);t.b("      top: 0;");t.b("\n" + i);t.b("      right: 0;");t.b("\n" + i);t.b("      bottom: 0;");t.b("\n" + i);t.b("      user-select: none;");t.b("\n" + i);t.b("      pointer-events: none;");t.b("\n" + i);t.b("    \"");t.b("\n" + i);t.b("  ></div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div\n  id=\"{{containerId}}\"\n  style=\"\n    position: fixed;\n    z-index: 100000;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: transparent;\n    cursor: crosshair;\n    box-sizing: border-box;\n    user-select: none;\n  \">\n  <div\n    id=\"{{canvasWrapperId}}\"\n    style=\"\n      position: absolute;\n      z-index: 50;\n      left: 0;\n      top: 0;\n      user-select: none;\n      pointer-events: none;\n    \"\n  ></div>\n  <div\n    id=\"{{colorWidgetId}}\"\n    style=\"\n      position: absolute;\n      z-index: 100;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      user-select: none;\n      pointer-events: none;\n    \"\n  ></div>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((canvas) => {
  canvas.id = __WEBPACK_IMPORTED_MODULE_0__page_config__["a" /* CANVAS_ID */];
  document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["b" /* CANVAS_WRAPPER_ID */])
    .appendChild(canvas);
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((events) => {
  let containerEl = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["e" /* CONTAINER_ID */]);
  events.forEach((data) =>
    containerEl.addEventListener(data.event, data.handler));
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((events) => {
  let containerEl = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["e" /* CONTAINER_ID */]);
  events.forEach((data) =>
    containerEl.removeEventListener(data.event, data.handler));
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  let containerEl = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["e" /* CONTAINER_ID */]);
  document.body.removeChild(containerEl);
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_config__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (() => {
  return !!document.getElementById(__WEBPACK_IMPORTED_MODULE_0__page_config__["e" /* CONTAINER_ID */]);
});


/***/ })
/******/ ]);
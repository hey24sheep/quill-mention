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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blots/mention.js":
/*!******************************!*\
  !*** ./src/blots/mention.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _quill = __webpack_require__(/*! quill */ \"quill\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Embed = _quill2.default.import('blots/embed');\n\nclass MentionBlot extends Embed {\n  static create(data) {\n    const node = super.create();\n    const denotationChar = document.createElement('span');\n    denotationChar.className = 'ql-mention-denotation-char';\n    denotationChar.innerHTML = data.denotationChar;\n    node.appendChild(denotationChar);\n    node.innerHTML += data.value;\n    return MentionBlot.setDataValues(node, data);\n  }\n\n  static setDataValues(element, data) {\n    const domNode = element;\n    Object.keys(data).forEach(key => {\n      domNode.dataset[key] = data[key];\n    });\n    return domNode;\n  }\n\n  static value(domNode) {\n    return domNode.dataset;\n  }\n}\n\nMentionBlot.blotName = 'mention';\nMentionBlot.tagName = 'span';\nMentionBlot.className = 'mention';\n\n_quill2.default.register(MentionBlot);\n\n//# sourceURL=webpack:///./src/blots/mention.js?");

/***/ }),

/***/ "./src/constants/keys.js":
/*!*******************************!*\
  !*** ./src/constants/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst Keys = {\n  TAB: 9,\n  ENTER: 13,\n  ESCAPE: 27,\n  UP: 38,\n  DOWN: 40\n};\n\nexports.default = Keys;\n\n//# sourceURL=webpack:///./src/constants/keys.js?");

/***/ }),

/***/ "./src/imports/numberisnan.js":
/*!************************************!*\
  !*** ./src/imports/numberisnan.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (x) {\n  return x !== x;\n};\n\n//# sourceURL=webpack:///./src/imports/numberisnan.js?");

/***/ }),

/***/ "./src/quill.mention.css":
/*!*******************************!*\
  !*** ./src/quill.mention.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/quill.mention.css?");

/***/ }),

/***/ "./src/quill.mention.js":
/*!******************************!*\
  !*** ./src/quill.mention.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _quill = __webpack_require__(/*! quill */ \"quill\");\n\nvar _quill2 = _interopRequireDefault(_quill);\n\nvar _keys = __webpack_require__(/*! ./constants/keys */ \"./src/constants/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\n__webpack_require__(/*! ./quill.mention.css */ \"./src/quill.mention.css\");\n\n__webpack_require__(/*! ./blots/mention */ \"./src/blots/mention.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst numberIsNaN = __webpack_require__(/*! ./imports/numberisnan.js */ \"./src/imports/numberisnan.js\");\n\nclass Mention {\n  constructor(quill, options) {\n    this.isOpen = false;\n    this.itemIndex = 0;\n    this.mentionCharPos = null;\n    this.cursorPos = null;\n    this.values = [];\n    this.suspendMouseEnter = false;\n\n    this.quill = quill;\n\n    this.options = {\n      source: null,\n      renderItem(item, searchTerm) {\n        return `${item.value}`;\n      },\n      onSelect(item, insertItem) {\n        insertItem(item);\n      },\n      mentionDenotationChars: ['@'],\n      showDenotationChar: true,\n      allowedChars: /^[a-zA-Z0-9_]*$/,\n      minChars: 0,\n      maxChars: 31,\n      offsetTop: 2,\n      offsetLeft: 0,\n      isolateCharacter: false,\n      fixMentionsToQuill: false,\n      defaultMenuOrientation: 'bottom',\n      dataAttributes: ['id', 'value', 'denotationChar', 'link', 'target'],\n      linkTarget: '_blank',\n      onOpen() {\n        return true;\n      },\n      onClose() {\n        return true;\n      },\n      // Style options\n      listItemClass: 'ql-mention-list-item',\n      mentionContainerClass: 'ql-mention-list-container',\n      mentionListClass: 'ql-mention-list'\n    };\n\n    _extends(this.options, options, {\n      dataAttributes: Array.isArray(options.dataAttributes) ? this.options.dataAttributes.concat(options.dataAttributes) : this.options.dataAttributes\n    });\n\n    this.mentionContainer = document.createElement('div');\n    this.mentionContainer.className = this.options.mentionContainerClass ? this.options.mentionContainerClass : '';\n    this.mentionContainer.style.cssText = 'display: none; position: absolute;';\n    this.mentionContainer.onmousemove = this.onContainerMouseMove.bind(this);\n\n    if (this.options.fixMentionsToQuill) {\n      this.mentionContainer.style.width = 'auto';\n    }\n\n    this.mentionList = document.createElement('ul');\n    this.mentionList.className = this.options.mentionListClass ? this.options.mentionListClass : '';\n    this.mentionContainer.appendChild(this.mentionList);\n\n    this.quill.container.appendChild(this.mentionContainer);\n\n    quill.on('text-change', this.onTextChange.bind(this));\n    quill.on('selection-change', this.onSelectionChange.bind(this));\n\n    quill.keyboard.addBinding({\n      key: _keys2.default.TAB\n    }, this.selectHandler.bind(this));\n    quill.keyboard.bindings[9].unshift(quill.keyboard.bindings[9].pop());\n\n    quill.keyboard.addBinding({\n      key: _keys2.default.ENTER\n    }, this.selectHandler.bind(this));\n    quill.keyboard.bindings[13].unshift(quill.keyboard.bindings[13].pop());\n\n    quill.keyboard.addBinding({\n      key: _keys2.default.ESCAPE\n    }, this.escapeHandler.bind(this));\n\n    quill.keyboard.addBinding({\n      key: _keys2.default.UP\n    }, this.upHandler.bind(this));\n\n    quill.keyboard.addBinding({\n      key: _keys2.default.DOWN\n    }, this.downHandler.bind(this));\n  }\n\n  selectHandler() {\n    if (this.isOpen) {\n      this.selectItem();\n      return false;\n    }\n    return true;\n  }\n\n  escapeHandler() {\n    if (this.isOpen) {\n      this.hideMentionList();\n      return false;\n    }\n    return true;\n  }\n\n  upHandler() {\n    if (this.isOpen) {\n      this.prevItem();\n      return false;\n    }\n    return true;\n  }\n\n  downHandler() {\n    if (this.isOpen) {\n      this.nextItem();\n      return false;\n    }\n    return true;\n  }\n\n  showMentionList() {\n    this.mentionContainer.style.visibility = 'hidden';\n    this.mentionContainer.style.display = '';\n    this.setMentionContainerPosition();\n    this.setIsOpen(true);\n  }\n\n  hideMentionList() {\n    this.mentionContainer.style.display = 'none';\n    this.setIsOpen(false);\n  }\n\n  highlightItem(scrollItemInView = true) {\n    for (let i = 0; i < this.mentionList.childNodes.length; i += 1) {\n      this.mentionList.childNodes[i].classList.remove('selected');\n    }\n    this.mentionList.childNodes[this.itemIndex].classList.add('selected');\n\n    if (scrollItemInView) {\n      const itemHeight = this.mentionList.childNodes[this.itemIndex].offsetHeight;\n      const itemPos = this.itemIndex * itemHeight;\n      const containerTop = this.mentionContainer.scrollTop;\n      const containerBottom = containerTop + this.mentionContainer.offsetHeight;\n\n      if (itemPos < containerTop) {\n        // Scroll up if the item is above the top of the container\n        this.mentionContainer.scrollTop = itemPos;\n      } else if (itemPos > containerBottom - itemHeight) {\n        // scroll down if any part of the element is below the bottom of the container\n        this.mentionContainer.scrollTop += itemPos - containerBottom + itemHeight;\n      }\n    }\n  }\n\n  getItemData() {\n    const link = this.mentionList.childNodes[this.itemIndex].dataset.link;\n\n    const hasLinkValue = typeof link !== 'undefined';\n    const itemTarget = this.mentionList.childNodes[this.itemIndex].dataset.target;\n    if (hasLinkValue) {\n      this.mentionList.childNodes[this.itemIndex].dataset.value = `<a href=\"${link}\" target=${itemTarget || this.options.linkTarget}>${this.mentionList.childNodes[this.itemIndex].dataset.value}`;\n    }\n    return this.mentionList.childNodes[this.itemIndex].dataset;\n  }\n\n  onContainerMouseMove() {\n    this.suspendMouseEnter = false;\n  }\n\n  selectItem() {\n    const data = this.getItemData();\n    this.options.onSelect(data, asyncData => {\n      this.insertItem(asyncData);\n    });\n    this.hideMentionList();\n  }\n\n  insertItem(data) {\n    const render = data;\n    if (render === null) {\n      return;\n    }\n    if (!this.options.showDenotationChar) {\n      render.denotationChar = '';\n    }\n    this.quill.deleteText(this.mentionCharPos, this.cursorPos - this.mentionCharPos, _quill2.default.sources.USER);\n    this.quill.insertEmbed(this.mentionCharPos, 'mention', render, _quill2.default.sources.USER);\n    this.quill.insertText(this.mentionCharPos + 1, ' ', _quill2.default.sources.USER);\n    this.quill.setSelection(this.mentionCharPos + 2, _quill2.default.sources.USER);\n    this.hideMentionList();\n  }\n\n  onItemMouseEnter(e) {\n    if (this.suspendMouseEnter) {\n      return;\n    }\n\n    const index = Number(e.target.dataset.index);\n\n    if (!numberIsNaN(index) && index !== this.itemIndex) {\n      this.itemIndex = index;\n      this.highlightItem(false);\n    }\n  }\n\n  onItemClick(e) {\n    e.stopImmediatePropagation();\n    e.preventDefault();\n    this.itemIndex = e.currentTarget.dataset.index;\n    this.highlightItem();\n    this.selectItem();\n  }\n\n  attachDataValues(element, data) {\n    const mention = element;\n    Object.keys(data).forEach(key => {\n      if (this.options.dataAttributes.indexOf(key) > -1) {\n        mention.dataset[key] = data[key];\n      } else {\n        delete mention.dataset[key];\n      }\n    });\n    return mention;\n  }\n\n  renderList(mentionChar, data, searchTerm) {\n    if (data && data.length > 0) {\n      this.values = data;\n      this.mentionList.innerHTML = '';\n\n      for (let i = 0; i < data.length; i += 1) {\n        const li = document.createElement('li');\n        li.className = this.options.listItemClass ? this.options.listItemClass : '';\n        li.dataset.index = i;\n        li.innerHTML = this.options.renderItem(data[i], searchTerm);\n        li.onmouseenter = this.onItemMouseEnter.bind(this);\n        li.dataset.denotationChar = mentionChar;\n        li.onclick = this.onItemClick.bind(this);\n        this.mentionList.appendChild(this.attachDataValues(li, data[i]));\n      }\n      this.itemIndex = 0;\n      this.highlightItem();\n      this.showMentionList();\n    } else {\n      this.hideMentionList();\n    }\n  }\n\n  nextItem() {\n    this.itemIndex = (this.itemIndex + 1) % this.values.length;\n    this.suspendMouseEnter = true;\n    this.highlightItem();\n  }\n\n  prevItem() {\n    this.itemIndex = (this.itemIndex + this.values.length - 1) % this.values.length;\n    this.suspendMouseEnter = true;\n    this.highlightItem();\n  }\n\n  hasValidChars(s) {\n    return this.options.allowedChars.test(s);\n  }\n\n  containerBottomIsNotVisible(topPos, containerPos) {\n    const mentionContainerBottom = topPos + this.mentionContainer.offsetHeight + containerPos.top;\n    return mentionContainerBottom > window.pageYOffset + window.innerHeight;\n  }\n\n  containerRightIsNotVisible(leftPos, containerPos) {\n    if (this.options.fixMentionsToQuill) {\n      return false;\n    }\n\n    const rightPos = leftPos + this.mentionContainer.offsetWidth + containerPos.left;\n    const browserWidth = window.pageXOffset + document.documentElement.clientWidth;\n    return rightPos > browserWidth;\n  }\n\n  setIsOpen(isOpen) {\n    if (this.isOpen !== isOpen) {\n      if (isOpen) {\n        this.options.onOpen();\n      } else {\n        this.options.onClose();\n      }\n      this.isOpen = isOpen;\n    }\n  }\n\n  setMentionContainerPosition() {\n    const containerPos = this.quill.container.getBoundingClientRect();\n    const mentionCharPos = this.quill.getBounds(this.mentionCharPos);\n    const containerHeight = this.mentionContainer.offsetHeight;\n\n    let topPos = this.options.offsetTop;\n    let leftPos = this.options.offsetLeft;\n\n    // handle horizontal positioning\n    if (this.options.fixMentionsToQuill) {\n      const rightPos = 0;\n      this.mentionContainer.style.right = `${rightPos}px`;\n    } else {\n      leftPos += mentionCharPos.left;\n    }\n\n    if (this.containerRightIsNotVisible(leftPos, containerPos)) {\n      const containerWidth = this.mentionContainer.offsetWidth + this.options.offsetLeft;\n      const quillWidth = containerPos.width;\n      leftPos = quillWidth - containerWidth;\n    }\n\n    // handle vertical positioning\n    if (this.options.defaultMenuOrientation === 'top') {\n      // Attempt to align the mention container with the top of the quill editor\n      if (this.options.fixMentionsToQuill) {\n        topPos = -1 * (containerHeight + this.options.offsetTop);\n      } else {\n        topPos = mentionCharPos.top - (containerHeight + this.options.offsetTop);\n      }\n\n      // default to bottom if the top is not visible\n      if (topPos + containerPos.top <= 0) {\n        let overMentionCharPos = this.options.offsetTop;\n\n        if (this.options.fixMentionsToQuill) {\n          overMentionCharPos += containerPos.height;\n        } else {\n          overMentionCharPos += mentionCharPos.bottom;\n        }\n\n        topPos = overMentionCharPos;\n      }\n    } else {\n      // Attempt to align the mention container with the bottom of the quill editor\n      if (this.options.fixMentionsToQuill) {\n        topPos += containerPos.height;\n      } else {\n        topPos += mentionCharPos.bottom;\n      }\n\n      // default to the top if the bottom is not visible\n      if (this.containerBottomIsNotVisible(topPos, containerPos)) {\n        let overMentionCharPos = this.options.offsetTop * -1;\n\n        if (!this.options.fixMentionsToQuill) {\n          overMentionCharPos += mentionCharPos.top;\n        }\n\n        topPos = overMentionCharPos - containerHeight;\n      }\n    }\n\n    this.mentionContainer.style.top = `${topPos}px`;\n    this.mentionContainer.style.left = `${leftPos}px`;\n\n    this.mentionContainer.style.visibility = 'visible';\n  }\n\n  onSomethingChange() {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    this.cursorPos = range.index;\n    const startPos = Math.max(0, this.cursorPos - this.options.maxChars);\n    const beforeCursorPos = this.quill.getText(startPos, this.cursorPos - startPos);\n    const mentionCharIndex = this.options.mentionDenotationChars.reduce((prev, cur) => {\n      const previousIndex = prev;\n      const mentionIndex = beforeCursorPos.lastIndexOf(cur);\n\n      return mentionIndex > previousIndex ? mentionIndex : previousIndex;\n    }, -1);\n    if (mentionCharIndex > -1) {\n      if (this.options.isolateCharacter && !(mentionCharIndex === 0 || !!beforeCursorPos[mentionCharIndex - 1].match(/\\s/g))) {\n        this.hideMentionList();\n        return;\n      }\n      const mentionCharPos = this.cursorPos - (beforeCursorPos.length - mentionCharIndex);\n      this.mentionCharPos = mentionCharPos;\n      const textAfter = beforeCursorPos.substring(mentionCharIndex + 1);\n      if (textAfter.length >= this.options.minChars && this.hasValidChars(textAfter)) {\n        const mentionChar = beforeCursorPos[mentionCharIndex];\n        this.options.source(textAfter, this.renderList.bind(this, mentionChar), mentionChar);\n      } else {\n        this.hideMentionList();\n      }\n    } else {\n      this.hideMentionList();\n    }\n  }\n\n  onTextChange(delta, oldDelta, source) {\n    if (source === 'user') {\n      this.onSomethingChange();\n    }\n  }\n\n  onSelectionChange(range) {\n    if (range && range.length === 0) {\n      this.onSomethingChange();\n    } else {\n      this.hideMentionList();\n    }\n  }\n}\n\n_quill2.default.register('modules/mention', Mention);\n\nexports.default = Mention;\n\n//# sourceURL=webpack:///./src/quill.mention.js?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/quill.mention.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/quill.mention.js */\"./src/quill.mention.js\");\n\n\n//# sourceURL=webpack:///multi_./src/quill.mention.js?");

/***/ }),

/***/ "quill":
/*!************************!*\
  !*** external "Quill" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Quill;\n\n//# sourceURL=webpack:///external_%22Quill%22?");

/***/ })

/******/ });
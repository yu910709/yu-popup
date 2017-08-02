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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {object} option - one entry param to function yu-popup
 * @param {string} [option.type] - accept 'success' 'error' 'loading' ''
 * @param {string} [option.title]
 * @param {(string|string[])} [option.desc]
 * @param {number} [option.width = 80] - max width 100%  min width 80px
 * @param {number} [option.timing = 3000] - autoclose when pop has timing
 * @param {function} [option.mounted] - before pop's dom into html
 * @callback callback
 * @param {function} [option.callback] - after pop's dom removed
 */
var popup = function popup(option) {
    if (option) {
        //参数合理性判断
        var allowParams = new Set(['type', 'title', 'desc', 'width', 'timing', 'mounted', 'callback']);
        var userParams = new Set();
        for (var i in option) {
            userParams.add(i);
        }
        var difference = new Set([].concat(_toConsumableArray(userParams)).filter(function (x) {
            return !allowParams.has(x);
        })); //计算用户的参数和允许参数的差集
        if (userParams.size - difference.size === 0) {
            //没有有用的配置项
            console.error('useful configuration in param \'option\' is none , Please fill in at least one useful configuration just like : \'' + Array.from(allowParams) + '\' -- popJs');
            return false;
        } else {
            if (difference.size > 0) {
                //有未定的参数键值对
                console.warn('\'' + Array.from(difference) + '\' are not allowed , param \'option\' can only accept these configuration : \'' + Array.from(allowParams) + '\' -- popJs');
            }
        }
        //构建前清除原来的pop
        if (document.querySelector('.pop-mask')) {
            document.querySelector('.pop-mask').parentNode.removeChild(document.querySelector('.pop-mask'));
            document.querySelector('html').classList.remove('no-move');
            document.querySelector('body').classList.remove('no-move');
        }
        //根据类型定义图标
        var icon = void 0;
        option.type = option.type ? option.type : '';
        switch (option.type) {
            case 'success':
                icon = '<i class="iconfont icon-smile"></i>';
                break;
            case 'error':
                icon = '<i class="iconfont icon-cry"></i>';
                break;
            case 'loading':
                icon = '<i class="iconfont icon-loading"></i>';
                break;
            case '':
                icon = '';
                break;
            default:
                icon = '';
                console.warn('unknown type \'' + option.type + '\' in param \'option\' , \'type\' can only accept these values : \'success\' \'error\' \'loading\' \'\', if you do not need \'type\' , please don\'t configure it -- popJs');
        }
        //定义标题
        option.title = option.title ? option.title : '';
        var title = '';
        if (option.title !== '') {
            if (typeof option.title === 'string') {
                title = '<h3>' + option.title + '</h3>';
            } else {
                console.warn('\'title\' in param \'option\' can only accept string type -- popJs');
            }
        }
        //定义描述
        option.desc = option.desc ? option.desc : '';
        var desc = '';
        if (option.desc !== '') {
            switch (Object.prototype.toString.call(option.desc)) {
                case '[object String]':
                    desc = '<p>' + option.desc + '</p>';
                    break;
                case '[object Array]':
                    desc += '<p>';
                    for (var _i in option.desc) {
                        desc += option.desc[_i] + '<br>';
                    }
                    desc += '</p>';
                    break;
                default:
                    console.warn('\'desc\' in param \'option\' can only accept string/array type -- popJs');
            }
        }
        //定义自动关闭定时
        if (option.type !== 'loading') {
            option.timing = option.timing ? option.timing : 3000;
        }
        var timing = void 0;
        switch (_typeof(option.timing)) {
            case 'number':
                timing = option.timing;
                break;
            case 'undefined':
                timing = option.timing;
                break;
            default:
                console.warn('\'timing\' in param \'option\' can only accept number type -- popJs');
        }
        //创建DOM之前调用方法
        if (option.mounted) {
            if (typeof option.mounted === 'function') {
                option.mounted();
            } else {
                console.warn('\'mounted\' in param \'option\' can only accept function type -- popJs');
            }
        }

        //构建DOM
        var popmask = document.createElement('section');
        popmask.classList.add('pop-mask');
        var pop = document.createElement('div');
        pop.classList.add('pop');
        pop.innerHTML = '\n           ' + icon + '\n           ' + title + '\n           ' + desc + '\n       ';
        popmask.appendChild(pop);
        document.querySelector('body').appendChild(popmask);
        document.querySelector('html').classList.add('no-move');
        document.querySelector('body').classList.add('no-move');
        pop.style.marginTop = document.documentElement.clientHeight / 2 - pop.offsetHeight / 2 + 'px'; //垂直居中
        //自定义区域
        if (option.width) {
            if (typeof option.width === 'number') {
                if (option.width > 80) {
                    option.width = option.width < document.documentElement.clientWidth ? option.width : document.documentElement.clientWidth;
                    pop.style.width = option.width + 'px';
                } else {
                    console.error('\'width\' in param \'option\' must greater than 80 -- popJs');
                    return false;
                }
            } else {
                console.warn('\'width\' in param \'option\' can only accept number type -- popJs');
            }
        }
        //定时关闭
        if (timing) {
            setTimeout(function () {
                if (document.querySelector('.pop-mask') === popmask) {
                    //POP没有被顶掉的时候
                    document.querySelector('body').removeChild(popmask);
                    document.querySelector('html').classList.remove('no-move');
                    document.querySelector('body').classList.remove('no-move');
                    //回调方法
                    if (option.callback) {
                        if (typeof option.callback === 'function') {
                            option.callback();
                        } else {
                            console.warn('\'callback\' in param \'option\' can only accept function type -- popJs');
                        }
                    }
                }
            }, timing);
        }
    } else {
        console.error('there is no param \'option\' , popJs can not work without any config , please check you code . -- popJs');
    }
};

exports.default = popup;

/***/ })
/******/ ]);
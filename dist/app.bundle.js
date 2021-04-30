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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\n\nvar link = 'http://localhost:3000/api/cameras';\nvar cameras = new XMLHttpRequest();\ncameras.open('GET', link);\ncameras.send(); // creation promise et resolve ARRAY avec les cameras\n\nvar promiseCameras = new Promise(function (resolve, reject) {\n  cameras.onload = function () {\n    var arrayCameras = JSON.parse(cameras.response);\n    console.log(arrayCameras);\n    resolve(arrayCameras);\n  };\n});\npromiseCameras.then(function (value) {\n  var classMaintContent = document.getElementsByClassName('main-content');\n  var k = -1; // if (value.length % 2 !== 0) {\n  //     constructorLigne(classMaintContent[0]);\n  // };\n\n  for (var i = 0; i < value.length; i++) {\n    if (i % 2 === 0) {\n      // creation une ligne\n      Object(_template__WEBPACK_IMPORTED_MODULE_0__[\"constructorHTMLCode\"])(classMaintContent[0], _template__WEBPACK_IMPORTED_MODULE_0__[\"template\"].classLigne);\n      k++;\n    }\n\n    var classLigne = document.getElementsByClassName('ligne'); //creation des articles dans la ligne avec deux article (k = indice de ligne)\n\n    Object(_template__WEBPACK_IMPORTED_MODULE_0__[\"constructorHTMLCode\"])(classLigne[k], _template__WEBPACK_IMPORTED_MODULE_0__[\"template\"].classArticle);\n    var produitName = document.getElementsByClassName(\"produit-nom\"); //atribution du nom pour article \n\n    produitName[i].innerText = value[i].name;\n    var produitPrix = document.getElementsByClassName(\"produit-prix\"); //atributipn de la prix pour article\n\n    produitPrix[i].innerText = value[i].price + \" €\";\n  }\n});\n/*\r\npromiseCameras.then((value) => { \r\n    async () => {\r\n        \r\n    }\r\n    for (let i = 0; i < value.length; i++) {\r\n\r\n        // creation du code HTML pour les articles;\r\n        let articles = document.getElementById('articles');\r\n        let div = document.createElement('div');\r\n        articles.appendChild(div);\r\n        div.className = \"camera\";\r\n\r\n        // rajoute dans chaque div \r\n        let camera = document.getElementsByClassName('camera');\r\n        camera[i].innerHTML = (\r\n            value[i].lenses + \"<br>\" + \r\n            value[i]._id + \"<br>\" + \r\n            value[i].name + \"<br>\" + \r\n            value[i].price + \"<br>\" +\r\n            value[i].description + \"<br>\" +\r\n            value[i].imageUrl + \"<br><br>\" );\r\n        console.log(value[i]);\r\n\r\n    };\r\n});\r\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! exports provided: template, constructorHTMLCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constructorHTMLCode\", function() { return constructorHTMLCode; });\n// pour export et en suit pour utilisé en import on utilise VAR et objet\nvar template = {\n  classLigne: '<div class=\"ligne\">',\n  classArticle: '<a href=\"#\"><article class=\"articles\"><div class=\"produit-img\"><img src=\"http://localhost:3000/images/vcam_1.jpg\" alt=\"\"></div><div class=\"produit-nomPrixAvis\"><h2 class=\"produit-nom\"></h2><span class=\"produit-prix\">49900 €</span><br><span class=\"produit-stars\"><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star noGood\"></i></span></div></article></a>'\n};\nfunction constructorHTMLCode(element, tmpl) {\n  element.insertAdjacentHTML('beforeend', tmpl);\n}\n;\n/*\r\nexport var classLigne = '<div class=\"ligne\">';\r\n*/\n// example du code HTML utilisant comme STRING\n\n/*\r\n<a href=\"#\">\r\n                  <article class=\"articles\">\r\n                      <div class=\"produit-img\">\r\n                          <img src=\"http://localhost:3000/images/vcam_1.jpg\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"produit-nomPrixAvis\">\r\n                          <h2 class=\"produit-nom\">Zurss 50S 50S 50S 50S 50S 50S 50S </h2>\r\n                          <span class=\"produit-prix\">49900 €</span>\r\n                          <br>\r\n                          <span class=\"produit-stars\">\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star noGood\"></i>\r\n                          </span>\r\n                      </div>\r\n                  </article>\r\n              </a>\r\n*/\n\n/*\r\nexport var classArticle = '<a href=\"#\"><article class=\"articles\"><div class=\"produit-img\"><img src=\"http://localhost:3000/images/vcam_1.jpg\" alt=\"\"></div><div class=\"produit-nomPrixAvis\"><h2 class=\"produit-nom\">Zurss 50S 50S 50S 50S 50S 50S 50S </h2><span class=\"produit-prix\">49900 €</span><br><span class=\"produit-stars\"><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star noGood\"></i></span></div></article></a>';\r\n*/\n\n/*\r\nexport function constructorArticle(element, tmpl) {\r\n  element.insertAdjacentHTML('beforeend', classArticle);\r\n};\r\n*/\n\n//# sourceURL=webpack:///./src/template.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/produit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/addToCart.js":
/*!**********************************!*\
  !*** ./src/modules/addToCart.js ***!
  \**********************************/
/*! exports provided: produits, addToLocalStorage, notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produits\", function() { return produits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToLocalStorage\", function() { return addToLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notification\", function() { return notification; });\nvar produits = {\n  \"product_id\": [],\n  \"lenses\": [],\n  \"prix\": []\n};\nfunction addToLocalStorage(array, input, option) {\n  array.product_id.push(input._id);\n  array.lenses.push(option);\n  array.prix.push(input.price);\n  localStorage.setItem('produitInPanier', JSON.stringify(array));\n  console.log(\"array \", array);\n}\n;\nfunction notification(name, titreOption, value) {\n  var produitNotification = document.getElementById('popUnder-body-p');\n  produitNotification.innerHTML = \"Vous avez <u>ajouté</u> \" + name + \" avec \" + titreOption + \" \" + value + \"</br> <b>Voir le panie?</b>\";\n}\n\n//# sourceURL=webpack:///./src/modules/addToCart.js?");

/***/ }),

/***/ "./src/modules/cartStatus.js":
/*!***********************************!*\
  !*** ./src/modules/cartStatus.js ***!
  \***********************************/
/*! exports provided: quantityProduct, showQuantityOfProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quantityProduct\", function() { return quantityProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showQuantityOfProducts\", function() { return showQuantityOfProducts; });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./src/modules/template.js\");\n\nfunction quantityProduct() {\n  if (localStorage.getItem('produitInPanier') !== null) {\n    var bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));\n    console.log(\"buffer \" + bufferLocalStorage.product_id.length); // return qyantité de produit dans le localStorage (typeof Number)\n\n    return bufferLocalStorage.product_id.length;\n  }\n}\nfunction showQuantityOfProducts(quantity) {\n  var sectorPaneir = document.getElementsByTagName(\"aside\");\n\n  if (quantity != 0 && quantity !== undefined) {\n    // si element avec id \"counter\" a etait crée pas becoin créé encore\n    if (!document.getElementById(\"counter\")) {\n      Object(_template_js__WEBPACK_IMPORTED_MODULE_0__[\"constructorHTMLCode\"])(sectorPaneir[0], _template_js__WEBPACK_IMPORTED_MODULE_0__[\"template\"].counter);\n    } // envoye le quantité de produit dans le code HTML\n\n\n    document.getElementById(\"counter\").innerText = quantity;\n    console.log(\"verification! \" + quantity);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/cartStatus.js?");

/***/ }),

/***/ "./src/modules/hostLink.js":
/*!*********************************!*\
  !*** ./src/modules/hostLink.js ***!
  \*********************************/
/*! exports provided: portFronEnd, portServer, domaine, link, linkPOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"portFronEnd\", function() { return portFronEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"portServer\", function() { return portServer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domaine\", function() { return domaine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"link\", function() { return link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linkPOST\", function() { return linkPOST; });\nvar portFronEnd = '';\nvar portServer = ':3000';\nvar domaine = \"http://\" + \"nodejs-for-orinoco.herokuapp.com\";\nvar link = domaine + '/api/cameras';\nvar linkPOST = domaine + '/api/cameras/order';\n\n//# sourceURL=webpack:///./src/modules/hostLink.js?");

/***/ }),

/***/ "./src/modules/notificationEvent.js":
/*!******************************************!*\
  !*** ./src/modules/notificationEvent.js ***!
  \******************************************/
/*! exports provided: eventAccepter, eventRefuser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventAccepter\", function() { return eventAccepter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventRefuser\", function() { return eventRefuser; });\n/* harmony import */ var _hostLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostLink.js */ \"./src/modules/hostLink.js\");\n // function de l'evenement => REDIRECTION \n\nfunction eventAccepter(element) {\n  element.addEventListener(\"click\", function () {\n    console.log(\"chiao\");\n    console.log(document.domain + \"/panier.html\");\n    window.location.href = \"http://\" + document.domain + \"/panier.html\";\n  });\n} // function de l'evenement => destruction PopUnder\n\nfunction eventRefuser(element) {\n  element.addEventListener(\"click\", function () {\n    document.getElementById('popUnder').remove();\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/notificationEvent.js?");

/***/ }),

/***/ "./src/modules/sendRequest.js":
/*!************************************!*\
  !*** ./src/modules/sendRequest.js ***!
  \************************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendRequest\", function() { return sendRequest; });\n//function pour GET POST \nfunction sendRequest(method, url) {\n  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(method, url);\n    request.responseType = 'text';\n    request.setRequestHeader('Content-Type', 'application/json');\n\n    request.onload = function () {\n      if (request.status >= 400) {\n        reject(request.response);\n      } else {\n        var array = JSON.parse(request.response);\n        resolve(array);\n      }\n    };\n\n    request.onerror = function () {\n      reject(request.response);\n    };\n\n    request.send(JSON.stringify(body));\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/modules/sendRequest.js?");

/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/*! exports provided: template, puissance, constructorHTMLCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"puissance\", function() { return puissance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constructorHTMLCode\", function() { return constructorHTMLCode; });\n// pour export et en suit pour utilisé en import on utilise VAR et objet\nvar template = {\n  classLigne: '<div class=\"ligne\"></div>',\n  classArticle: '<a class=\"articleUrl\" href=\"#\"><article class=\"articles\"><div class=\"produit-img\"><img src=\"\" class=\"imgUrl\" alt=\"\"></div><div class=\"produit-nomPrixAvis\"><h2 class=\"produit-nom\"></h2><span class=\"produit-prix\">49900 €</span><span class=\"produit-stars\"><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star noGood\"></i></span></div></article></a>',\n  idArticle: '<article class=\"articles\"><div id=\"produit-img\"><img id=\"imgUrl\" src=\"./images/vcam_1.jpg\" alt=\"\"></div><div id=\"produit-general\"><h2 id=\"produit-nom\"></h2><span id=\"produit-prix\"></span><p id=\"produit-description\">Lorem ipsum</p><form action=\"POST\" id=\"produit-form\"><span id=\"option\"></span></form></div></article>',\n  classeLabelRadio: '<label class=\"labelRadio\"><input type=\"radio\" name=\"\" class=\"produit-form-radio\" value=\"\"></label>',\n  buttonAjouterAuPanier: '<input type=\"button\" id=\"produit-form-post\" value=\"Ajouter au Panier\">',\n  counter: '<span id=\"counter\"></span>',\n  productInCart: '<li class=\"product\"><span class=\"product-name\">Photo 50mm</span><button class=\"product-delete\" id=\"supr\" value=\"\" ><i class=\"fas fa-trash-alt\"></i></button></li>',\n  notification: '<div id=\"popUnder\"><div id=\"popUnder-body\"><span id=\"popUnder-body-p\"></span><span id=\"popUnder-body-btnVerification\"><button id=\"accepter\" value=\"\"><i class=\"fas fa-check-square\"></i></button><button id=\"refuser\"><i class=\"fas fa-window-close\"></i></button></span></div> </div>',\n  notificationErr: '<div id=\"popUnder\"><div id=\"popUnder-body\"><span id=\"popUnder-body-btnClose\"><button id=\"refuser\"><i class=\"fas fa-times-circle\"></i></button></span><span id=\"popUnder-body-p\">Veuillez choisir une option</span></div></div>',\n  formCommande: '<div id=\"commande\" action=\"order.html\" method=\"POST\"><div id=\"first-last-name\"><label>Prénom:<input type=\"text\" id=\"firstName\" placeholder=\"Jean\"></label><label>Nom: <input type=\"text\" id=\"lastName\" placeholder=\"Deschemps\" data=\"1\"></label></div><div id=\"adress\"><label>Adresse:<input type=\"address\" id=\"street\" placeholder=\"1 Avenue de la Republique\" data=\"2\"></label></div><div id=\"zipcode-ville\"><label>Code Postale:<input type=\"address\" id=\"zipcode\" placeholder=\"13001\" data=\"3\"></label><label>Ville:<input type=\"address\" id=\"city\" placeholder=\"Marseille\" data=\"4\"></label></div><div id=\"email\"><label>Courriel:<input type=\"email\" id=\"mail\" placeholder=\"example@gmail.com\" data=\"5\"></label></div><button id=\"submit\">Valide votre commande</button></div>'\n};\nvar puissance = 0.01; // pour deminuer le prix des articles\n// OU et QOUI on insert\n\nfunction constructorHTMLCode(element, tmpl) {\n  element.insertAdjacentHTML('beforeend', tmpl);\n}\n;\n/*\r\nexport var classLigne = '<div class=\"ligne\">';\r\n*/\n// example du code HTML pour article sur la page d'acceuil utilisant comme STRING\n\n/*\r\n<a href=\"#\">\r\n                  <article class=\"articles\">\r\n                      <div class=\"produit-img\">\r\n                          <img src=\"http://localhost:3000/images/vcam_1.jpg\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"produit-nomPrixAvis\">\r\n                          <h2 class=\"produit-nom\">Zurss 50S 50S 50S 50S 50S 50S 50S </h2>\r\n                          <span class=\"produit-prix\">49900 €</span>\r\n                          <br>\r\n                          <span class=\"produit-stars\">\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star good\"></i>\r\n                              <i class=\"fas fa-star noGood\"></i>\r\n                          </span>\r\n                      </div>\r\n                  </article>\r\n              </a>\r\n*/\n// Example du code html pour article sur page produit.html\n\n/*\r\n<article class=\"articles\">\r\n    <div id=\"produit-img\">\r\n        <img src=\"./images/vcam_1.jpg\" alt=\"\">\r\n    </div>\r\n\r\n    <div id=\"produit-general\">\r\n            <h2 id=\"produit-nom\">Zurss S 50S 50S 50S </h2>\r\n\r\n            <span id=\"produit-prix\">49900 €</span>\r\n            <p id=\"produit-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\r\n            incididunt ut labore et dolore magna aliqua.\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima quasi explicabo asperiores consequatur, quis tempore iusto officiis ea possimus voluptatibus! Nostrum, eos. Numquam totam ullam perspiciatis nemo, excepturi impedit.\r\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis recusandae assumenda, earum fugit reprehenderit id alias est itaque voluptatibus, unde explicabo. Tenetur mollitia pariatur nihil sint quaerat, voluptate perferendis tempore!\r\n\r\n                            </p>\r\n            <form action=\"POST\" id=\"produit-form\">\r\n                <span>Lenses:</span>\r\n                <label class=\"labelRadio\">\r\n                    <input type=\"radio\" name=\"lenses\" class=\"produit-form-post\" value=\"35mm 1.4\">\r\n                        35mm 1.4\"\r\n                                </label>\r\n                    <label class=\"labelRadio\">\r\n                        <input type=\"radio\" name=\"lenses\" class=\"produit-form-post\" value=\"50mm 1.6\">\r\n                            50mm 1.6\r\n                                </label>\r\n                        <label class=\"labelRadio\">\r\n                            <input type=\"radio\" name=\"lenses\" class=\"produit-form-post\" value=\"50mm 1.6\">\r\n                                50mm 1.6\r\n                                </label>\r\n                            <label class=\"labelRadio\">\r\n                                <input type=\"radio\" name=\"lenses\" class=\"produit-form-post\" value=\"50mm 1.6\">\r\n                                    50mm 1.6\r\n                                </label>\r\n                                <input type=\"button\" id=\"produit-form-post\" value=\"Ajouter au Panier\">\r\n                                    <span id=\"produit-notification\">\r\n                                        Vous avez ajouté Zurss S 50S avec linse 50mm 1.6\r\n                                </span>\r\n                                    <span id=\"produit-notification-goPanier\">\r\n                                        <a href=\"/panier.html\">\r\n                                            Voir le panier\r\n                                    </a>\r\n                                    </span>\r\n                            </form>\r\n                            \r\n\r\n                        </div>\r\n</article>\r\n*/\n\n/*\r\nexport var classArticle = '<a href=\"#\"><article class=\"articles\"><div class=\"produit-img\"><img src=\"http://localhost:3000/images/vcam_1.jpg\" alt=\"\"></div><div class=\"produit-nomPrixAvis\"><h2 class=\"produit-nom\">Zurss 50S 50S 50S 50S 50S 50S 50S </h2><span class=\"produit-prix\">49900 €</span><br><span class=\"produit-stars\"><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star noGood\"></i></span></div></article></a>';\r\n*/\n\n/*\r\nexport function constructorArticle(element, tmpl) {\r\n  element.insertAdjacentHTML('beforeend', classArticle);\r\n};\r\n*/\n\n//# sourceURL=webpack:///./src/modules/template.js?");

/***/ }),

/***/ "./src/produit.js":
/*!************************!*\
  !*** ./src/produit.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hostLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hostLink.js */ \"./src/modules/hostLink.js\");\n/* harmony import */ var _modules_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/template.js */ \"./src/modules/template.js\");\n/* harmony import */ var _modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addToCart.js */ \"./src/modules/addToCart.js\");\n/* harmony import */ var _modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cartStatus.js */ \"./src/modules/cartStatus.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/modules/sendRequest.js\");\n/* harmony import */ var _modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/notificationEvent.js */ \"./src/modules/notificationEvent.js\");\n\n\n\n\n\n\nvar id = 'produit.html?id=';\nvar hrefURL = location.href;\nvar idProduitByURL; // si nous avons dans URL '?id=' alors on cherche numero ID \n// recuperation de ID par URL (typeof hrefURL = string)\n\nif (hrefURL.includes(id) == true) {\n  idProduitByURL = hrefURL.slice(hrefURL.indexOf(id) + id.length, hrefURL.length);\n} // c'est TO DO\n// console.log(hrefURL.includes(id));\n// console.log(hrefURL.length);\n// console.log(idProduitByURL);\n\n\nObject(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_4__[\"sendRequest\"])('GET', _modules_hostLink_js__WEBPACK_IMPORTED_MODULE_0__[\"link\"]).then(function (data) {\n  var objetJSON = data.find(function (objet) {\n    return objet._id === idProduitByURL;\n  });\n\n  if (objetJSON) {\n    console.log(objetJSON); // creation de title pour option (color, linses...)\n\n    var option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('\":')); // mettre en majuscule\n\n    var optionFirstCharUpperCase = option[0].toUpperCase(0) + option.slice(1, option.length); // verification si c'est bon\n\n    console.log(option);\n    var ligne = document.getElementsByClassName(\"ligne\");\n    Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(ligne[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].idArticle); // preparation de variables DOM pour travailer avec\n\n    var produitNom = document.getElementById(\"produit-nom\");\n    var produitPrix = document.getElementById(\"produit-prix\");\n    var produitDescription = document.getElementById(\"produit-description\");\n    var titleOption = document.getElementById(\"option\");\n    var produitForm = document.getElementById(\"produit-form\");\n    var imgUrl = document.getElementById(\"imgUrl\"); // incertion de donné\n\n    produitPrix.innerText = objetJSON.price * _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"puissance\"] + \" €\";\n    produitDescription.innerText = objetJSON.description;\n    produitNom.innerText = objetJSON.name;\n    titleOption.innerText = optionFirstCharUpperCase + \":\";\n    imgUrl.setAttribute(\"src\", objetJSON.imageUrl); // console.log(objetJSON.lenses.length);\n    // cration lest des option pour article\n\n    for (var i = 0; i < objetJSON.lenses.length; i++) {\n      Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(produitForm, _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].classeLabelRadio);\n      var lebelRadio = document.getElementsByClassName(\"labelRadio\");\n      var inputProduitFormRadio = document.getElementsByClassName(\"produit-form-radio\");\n      Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(lebelRadio[i], objetJSON.lenses[i]);\n      inputProduitFormRadio[i].setAttribute(\"name\", option);\n      inputProduitFormRadio[i].setAttribute(\"value\", objetJSON.lenses[i]);\n    } // n'oublie pas ajouter button ;)\n\n\n    Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(produitForm, _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].buttonAjouterAuPanier);\n    var ajouterAuPanier = document.getElementById(\"produit-form-post\"); //ajoute en localStorage\n\n    ajouterAuPanier.addEventListener('click', function () {\n      var tagBody = document.getElementsByTagName(\"body\"); // let produitForm = document.getElementById('produit-form'); \n      // constructorHTMLCode(tagBody[0], template.notificationErr);\n\n      var radios = document.getElementsByClassName(\"produit-form-radio\");\n      var optionValue; // verification si une RADIO (lenses) etait choisis\n\n      for (var i = 0; i < radios.length; i++) {\n        if (radios[i].checked) {\n          // get value, set checked flag or do whatever you need to\n          optionValue = radios[i].value;\n        } // n'oublie pas enlever checked\n\n\n        radios[i].checked = false;\n      }\n\n      console.log(\"radio value \", optionValue); // verifier si utilisateur choisis la lense\n\n      if (optionValue !== undefined) {\n        // si nous avons queque chosse dans localStorage il faut recuperer et reenvoyer à localSotage\n        if (localStorage.getItem('produitInPanier') !== null) {\n          Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(tagBody[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].notification);\n          var bufferProduits = JSON.parse(localStorage.getItem('produitInPanier'));\n          Object(_modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__[\"addToLocalStorage\"])(bufferProduits, objetJSON, optionValue);\n          Object(_modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__[\"notification\"])(objetJSON.name, option, optionValue);\n          Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"showQuantityOfProducts\"])(Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"quantityProduct\"])());\n          var accepter = document.getElementById(\"accepter\");\n          Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventAccepter\"])(accepter); // destruction PopUnder\n\n          var refuser = document.getElementById(\"refuser\");\n          Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventRefuser\"])(refuser);\n        } else {\n          // sinon il fait directement envoyer à localStorage\n          Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(tagBody[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].notification);\n          Object(_modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__[\"addToLocalStorage\"])(_modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__[\"produits\"], objetJSON, optionValue);\n          Object(_modules_addToCart_js__WEBPACK_IMPORTED_MODULE_2__[\"notification\"])(objetJSON.name, option, optionValue);\n          Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"showQuantityOfProducts\"])(Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"quantityProduct\"])());\n\n          var _accepter = document.getElementById(\"accepter\");\n\n          Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventAccepter\"])(_accepter); // destruction PopUnder\n\n          var _refuser = document.getElementById(\"refuser\");\n\n          Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventRefuser\"])(_refuser);\n        }\n      } else {\n        // sinon message que il faut choisir la lense\n        console.log(\"choisiser les \" + option);\n        Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"constructorHTMLCode\"])(tagBody[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].notificationErr); // let produitNotification = document.getElementById('produit-notification');\n        // produitNotification.innerText = (\"Veillez à choisir la \" + option);\n        // let produitNotificationGoPanier = document.getElementById('produit-notification-goPanier');\n        // produitNotificationGoPanier.innerHTML = '';\n        // destruction PopUnder\n\n        var _refuser2 = document.getElementById(\"refuser\");\n\n        Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventRefuser\"])(_refuser2);\n      }\n\n      console.log(\"qoui \" + radios.checked);\n    });\n    Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"showQuantityOfProducts\"])(Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_3__[\"quantityProduct\"])());\n  } else {\n    console.log('piratage');\n  }\n})[\"catch\"](function (err) {\n  console.log(err);\n}); // fait border radius si l'écran trés grand\n\nif (document.documentElement.clientHeight > 1000) {\n  var footer = document.getElementsByTagName(\"footer\");\n  footer[0].setAttribute(\"class\", \"bottomFooter\");\n}\n\n//# sourceURL=webpack:///./src/produit.js?");

/***/ })

/******/ });
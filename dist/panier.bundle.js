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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/panier.js");
/******/ })
/************************************************************************/
/******/ ({

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventAccepter\", function() { return eventAccepter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventRefuser\", function() { return eventRefuser; });\n/* harmony import */ var _hostLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostLink.js */ \"./src/modules/hostLink.js\");\n // function de l'evenement => REDIRECTION ver direcion\n\nfunction eventAccepter(element, direction) {\n  element.addEventListener(\"click\", function () {\n    console.log(\"chiao\");\n    console.log(document.domain + \"/panier.html\");\n    window.location.href = \"http://\" + document.domain + \"/panier.html\";\n  });\n} // function de l'evenement => destruction PopUnder\n\nfunction eventRefuser(element) {\n  element.addEventListener(\"click\", function () {\n    document.getElementById('popUnder').remove();\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/notificationEvent.js?");

/***/ }),

/***/ "./src/modules/removeFromCart.js":
/*!***************************************!*\
  !*** ./src/modules/removeFromCart.js ***!
  \***************************************/
/*! exports provided: verificationDelete, deleteArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verificationDelete\", function() { return verificationDelete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteArticle\", function() { return deleteArticle; });\n// function fermeture de popUnder\nfunction verificationDelete() {\n  var refuser = document.getElementById(\"refuser\");\n  refuser.addEventListener(\"click\", function () {\n    document.getElementById('popUnder').remove();\n  });\n} // function suppresion de produit et reload page\n\nfunction deleteArticle(id) {\n  var accepter = document.getElementById(\"accepter\");\n  accepter.addEventListener(\"click\", function () {\n    var bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));\n    console.log(bufferLocalStorage); // suprimme id produit, lense, prix par l'index\n\n    bufferLocalStorage.product_id.splice(id, 1);\n    bufferLocalStorage.lenses.splice(id, 1);\n    bufferLocalStorage.prix.splice(id, 1); // n'oublie pas réenvoyer a local storage\n\n    localStorage.setItem('produitInPanier', JSON.stringify(bufferLocalStorage));\n    location.reload();\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/removeFromCart.js?");

/***/ }),

/***/ "./src/modules/sendRequest.js":
/*!************************************!*\
  !*** ./src/modules/sendRequest.js ***!
  \************************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendRequest\", function() { return sendRequest; });\n//function pour GET POST (body = null si methot get)\nfunction sendRequest(method, url) {\n  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(method, url);\n    request.responseType = 'text';\n    request.setRequestHeader('Content-Type', 'application/json');\n\n    request.onload = function () {\n      if (request.status >= 400) {\n        // Status Code si > 400 reject\n        reject(request.response);\n      } else {\n        var array = JSON.parse(request.response); // parse le response en JSON\n\n        resolve(array);\n      }\n    };\n\n    request.onerror = function () {\n      reject(request.response);\n    };\n\n    request.send(JSON.stringify(body)); // envoyer body transforme en STRING\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/modules/sendRequest.js?");

/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/*! exports provided: template, puissance, constructorHTMLCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"puissance\", function() { return puissance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constructorHTMLCode\", function() { return constructorHTMLCode; });\n// pour export et en suit pour utilisé en import on utilise VAR et objet\nvar template = {\n  //template pour ligne dans **'index.html**\n  classLigne: '<div class=\"ligne\"></div>',\n  // template pour l'article dans **'index.html**\n  classArticle: '<a class=\"articleUrl\" href=\"#\"><article class=\"articles\"><div class=\"produit-img\"><img src=\"\" class=\"imgUrl\" alt=\"\"></div><div class=\"produit-nomPrixAvis\"><h2 class=\"produit-nom\"></h2><span class=\"produit-prix\">49900 €</span><span class=\"produit-stars\"><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star good\"></i><i class=\"fas fa-star noGood\"></i></span></div></article></a>',\n  // template pour l'article dans **produit.html**\n  idArticle: '<article class=\"articles\"><div id=\"produit-img\"><img id=\"imgUrl\" src=\"./images/vcam_1.jpg\" alt=\"\"></div><div id=\"produit-general\"><h2 id=\"produit-nom\"></h2><span id=\"produit-prix\"></span><p id=\"produit-description\">Lorem ipsum</p><form action=\"POST\" id=\"produit-form\"><span id=\"option\"></span><select><option>Choisissez une option</option></select></form></div></article>',\n  // template pour delisting (radio) des options pour l'article dans **produit.html**\n  // classeLabelRadio : '<label class=\"labelRadio\"><input type=\"radio\" name=\"\" class=\"produit-form-radio\" value=\"\"></label>',\n  tagOption: ' <option value=\"qqc\">Quelque chose Quelque chose Quelque chose</option>',\n  // template pour input Ajouter au Panier dans **produit.html**\n  buttonAjouterAuPanier: '<input type=\"button\" id=\"produit-form-post\" value=\"Ajouter au Panier\">',\n  // template pour counter dans l'assid de panier sur toute le pages\n  counter: '<span id=\"counter\"></span>',\n  // template pour liste de(s) produit(s) dans **panier.html**\n  productInCart: '<li class=\"product\"><span class=\"product-name\">Photo 50mm</span><button class=\"product-delete\" id=\"supr\" value=\"\" ><i class=\"fas fa-trash-alt\"></i></button></li>',\n  // template pour Pop-Under notification \n  notification: '<div id=\"popUnder\"><div id=\"popUnder-body\"><span id=\"popUnder-body-p\"></span><span id=\"popUnder-body-btnVerification\"><button id=\"accepter\" value=\"\"><i class=\"fas fa-check-square\"></i></button><button id=\"refuser\"><i class=\"fas fa-window-close\"></i></button></span></div> </div>',\n  // template pour Pop-Under avec error\n  notificationErr: '<div id=\"popUnder\"><div id=\"popUnder-body\"><span id=\"popUnder-body-btnClose\"><button id=\"refuser\"><i class=\"fas fa-times-circle\"></i></button></span><span id=\"popUnder-body-p\">Veuillez choisir une option</span></div></div>',\n  // template pour la form de commande dans la **panier.html**\n  formCommande: '<div id=\"commande\"><div id=\"first-last-name\"><label>Prénom:<input type=\"text\" id=\"firstName\" placeholder=\"Jean\"></label><label>Nom: <input type=\"text\" id=\"lastName\" placeholder=\"Deschemps\" data=\"1\"></label></div><div id=\"adress\"><label>Adresse:<input type=\"address\" id=\"street\" placeholder=\"1 Avenue de la Republique\" data=\"2\"></label></div><div id=\"zipcode-ville\"><label>Code Postale:<input type=\"address\" id=\"zipcode\" placeholder=\"13001\" data=\"3\"></label><label>Ville:<input type=\"address\" id=\"city\" placeholder=\"Marseille\" data=\"4\"></label></div><div id=\"email\"><label>Courriel:<input type=\"email\" id=\"mail\" placeholder=\"example@gmail.com\" data=\"5\"></label></div><button id=\"submit\">Valide votre commande</button></div>'\n};\nvar puissance = 0.01; // pour deminuer le prix des articles\n// OU et QOUI on insert\n\nfunction constructorHTMLCode(element, tmpl) {\n  element.insertAdjacentHTML('beforeend', tmpl);\n}\n;\n\n//# sourceURL=webpack:///./src/modules/template.js?");

/***/ }),

/***/ "./src/panier.js":
/*!***********************!*\
  !*** ./src/panier.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hostLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hostLink.js */ \"./src/modules/hostLink.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/modules/sendRequest.js\");\n/* harmony import */ var _modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cartStatus.js */ \"./src/modules/cartStatus.js\");\n/* harmony import */ var _modules_template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/template.js */ \"./src/modules/template.js\");\n/* harmony import */ var _modules_removeFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/removeFromCart */ \"./src/modules/removeFromCart.js\");\n/* harmony import */ var _modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/notificationEvent.js */ \"./src/modules/notificationEvent.js\");\n\n\n\n\n\n //combien produit dans panier\n\nObject(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"showQuantityOfProducts\"])(Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"quantityProduct\"])());\nObject(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_1__[\"sendRequest\"])(\"GET\", _modules_hostLink_js__WEBPACK_IMPORTED_MODULE_0__[\"link\"]).then(function (data) {\n  if (!Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"quantityProduct\"])()) {\n    document.getElementsByTagName(\"h2\")[0].innerText = \"Aucune article au panier :(\";\n    var ol = document.getElementsByTagName(\"ol\");\n    ol[0].classList.add(\"minH\");\n  } else {\n    (function () {\n      // recuperation localStorage\n      var dataLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));\n      document.getElementsByTagName(\"h2\")[0].innerText = \"La composition de votre panier\";\n      var panierOL = document.getElementsByTagName(\"ol\");\n      var prixTotal = 0; // pour afficher total de prix\n      // delisting products\n\n      var _loop = function _loop(i) {\n        Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"constructorHTMLCode\"])(panierOL[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"template\"].productInCart);\n        var objetJSON = data.find(function (objet) {\n          return objet._id === dataLocalStorage.product_id[i];\n        });\n        var produitInPanier = JSON.parse(localStorage.getItem('produitInPanier')); // regarder si c'est lenses / couler / vernil\n\n        var option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('\":'));\n        var productName = document.getElementsByClassName(\"product-name\")[i]; //compteur de prix total de la commande\n\n        prixTotal += objetJSON.price;\n        console.log(\"objet \" + objetJSON.lenses);\n        productName.innerText = objetJSON.name + \" \" + option + \" \" + produitInPanier.lenses[i] + \" (prix:\" + objetJSON.price * _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"puissance\"] + \" €)\";\n        console.log(objetJSON);\n        document.getElementsByClassName(\"product-delete\")[i].setAttribute(\"value\", i); // cration pour chaque butonne addEventListener\n\n        document.getElementsByClassName(\"product-delete\")[i].addEventListener('click', function () {\n          console.log(document.getElementsByClassName(\"product-delete\")[i].value);\n          var indexArticle = document.getElementsByClassName(\"product-delete\")[i].value;\n          var tagBody = document.getElementsByTagName(\"body\");\n          var messageNotification = document.getElementsByClassName(\"product-name\")[i].textContent; //get text\n\n          Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"constructorHTMLCode\"])(tagBody[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"template\"].notification);\n          document.getElementById(\"popUnder-body-p\").innerHTML = \"Voulez-vous <u>supprimer</u> \" + messageNotification + \" ?\";\n          document.getElementById(\"accepter\").setAttribute(\"value\", i);\n          Object(_modules_removeFromCart__WEBPACK_IMPORTED_MODULE_4__[\"verificationDelete\"])(); //envoyer en function idArticle\n\n          Object(_modules_removeFromCart__WEBPACK_IMPORTED_MODULE_4__[\"deleteArticle\"])(indexArticle);\n        });\n      };\n\n      for (var i = 0; i < Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"quantityProduct\"])(); i++) {\n        _loop(i);\n      }\n\n      document.getElementById(\"sommeTotal\").innerText = \"Prix total de la commande: \" + prixTotal * _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"puissance\"] + \" €\";\n      var panier = document.getElementsByClassName(\"main-panier\");\n      Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"constructorHTMLCode\"])(panier[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"template\"].formCommande);\n    })();\n  }\n}).then(function () {\n  if (Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"quantityProduct\"])()) {\n    // finction de verification de l'input\n    var checkInput = function checkInput(input, regex) {\n      var checking = false;\n\n      if (regex.test(input.value) && input.value !== \"\") {\n        input.setAttribute(\"class\", \"valide\");\n        checking = true;\n        console.log(input, checking);\n      } else {\n        input.setAttribute(\"class\", \"error\");\n        checking = false;\n        console.log(input, checking);\n      }\n\n      return checking;\n    }; // validation donné de chaque inpute\n\n\n    // qu-es ce que on verifie\n    var check = {\n      \"firstName\": false,\n      \"lastName\": false,\n      \"street\": false,\n      \"codePostal\": false,\n      \"ville\": false,\n      \"courriel\": false\n    };\n    var commande = {\n      contact: {\n        firstName: \"\",\n        lastName: \"\",\n        address: \"\",\n        city: \"\",\n        email: \"\"\n      },\n      products: []\n    }; // remplicage de commande - massiv de products avec ID de LocalStorage\n\n    var bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));\n    commande.products = bufferLocalStorage.product_id; // RegEx pour validation des inputs\n\n    var regexFirstNameLastNameVille = /^([A-Za-z][A-Za-z'-]+)?$/;\n    var regexStreet = /^([A-Za-z0-9][ A-Za-z0-9.,]+)?$/;\n    var regexCodePostal = /^(?:0[1-9]|[1-9]\\d)\\d{3}$/;\n    var regexCourriel = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n    var firstName = document.getElementById(\"firstName\");\n    var lastName = document.getElementById('lastName');\n    var street = document.getElementById(\"street\");\n    var codePostal = document.getElementById(\"zipcode\");\n    var ville = document.getElementById(\"city\");\n    var courriel = document.getElementById(\"mail\");\n    firstName.addEventListener('input', function () {\n      check.firstName = checkInput(firstName, regexFirstNameLastNameVille);\n    });\n    lastName.addEventListener('input', function () {\n      check.lastName = checkInput(lastName, regexFirstNameLastNameVille);\n    });\n    street.addEventListener('input', function () {\n      check.street = checkInput(street, regexStreet);\n    });\n    codePostal.addEventListener('input', function () {\n      check.codePostal = checkInput(codePostal, regexCodePostal);\n    });\n    ville.addEventListener('input', function () {\n      check.ville = checkInput(ville, regexFirstNameLastNameVille);\n    });\n    courriel.addEventListener('input', function () {\n      check.courriel = checkInput(courriel, regexCourriel);\n    }); // click pour valider la commande (RAS obtenir orderId - NOGOOD - PopUnder)\n\n    var submit = document.getElementById(\"submit\");\n    submit.addEventListener('click', function () {\n      check.firstName = checkInput(firstName, regexFirstNameLastNameVille);\n      check.lastName = checkInput(lastName, regexFirstNameLastNameVille);\n      check.street = checkInput(street, regexStreet);\n      check.codePostal = checkInput(codePostal, regexCodePostal);\n      check.ville = checkInput(ville, regexFirstNameLastNameVille);\n      check.courriel = checkInput(courriel, regexCourriel); // verification ensamble avec logique ET\n\n      if (check.firstName && check.lastName && check.street && check.codePostal && check.ville && check.courriel) {\n        //remplisage de la commande avec la valeur des inputs\n        commande.contact.firstName = firstName.value;\n        commande.contact.lastName = lastName.value;\n        commande.contact.address = street.value;\n        commande.contact.city = codePostal.value + \" \" + ville.value;\n        commande.contact.email = courriel.value; // send request POST et recuperation in preview orderId et redirect vers page confirmation\n\n        Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_1__[\"sendRequest\"])('POST', _modules_hostLink_js__WEBPACK_IMPORTED_MODULE_0__[\"linkPOST\"], commande).then(function (data) {\n          // recuperation de localstorage \n          var bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier')); // prix total\n\n          var prixTotal = 0;\n\n          for (var i = 0; i < Object(_modules_cartStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"quantityProduct\"])(); i++) {\n            var prixTypeOfNumber = Number(bufferLocalStorage.prix[i]);\n            prixTotal += prixTypeOfNumber;\n          }\n\n          prixTotal *= _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"puissance\"];\n          console.log(\"Votre id de comande\", data.orderId);\n          window.location.href = \"http://\" + document.domain + \"/confirmation.html?id=\" + data.orderId;\n          localStorage.removeItem(\"produitInPanier\");\n        });\n        console.log(\"votre commande\", commande);\n        console.log(\"GOOOOD!!!\");\n      } else {\n        // creation popUnder\n        var tagBody = document.getElementsByTagName(\"body\");\n        Object(_modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"constructorHTMLCode\"])(tagBody[0], _modules_template_js__WEBPACK_IMPORTED_MODULE_3__[\"template\"].notificationErr); // incertion du message\n\n        document.getElementById(\"popUnder-body-p\").innerText = \"Veuillez remplir tous les champs du formulaire correctement.\"; // delete the pop-under\n\n        var refuser = document.getElementById(\"refuser\");\n        Object(_modules_notificationEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"eventRefuser\"])(refuser);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/panier.js?");

/***/ })

/******/ });
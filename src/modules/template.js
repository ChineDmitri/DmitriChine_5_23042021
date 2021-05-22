// pour export et en suit pour utilisé en import on utilise VAR et objet
export let template = {
    //template pour ligne dans **'index.html**
    classLigne : '<div class="ligne"></div>',
    // template pour l'article dans **'index.html**
    classArticle : '<a class="articleUrl" href="#"><article class="articles"><div class="produit-img"><img src="" class="imgUrl" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom"></h2><span class="produit-prix">49900 €</span><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>',
    // template pour l'article dans **produit.html**
    idArticle : '<article class="articles"><div id="produit-img"><img id="imgUrl" src="./images/vcam_1.jpg" alt=""></div><div id="produit-general"><h2 id="produit-nom"></h2><span id="produit-prix"></span><p id="produit-description">Lorem ipsum</p><form action="POST" id="produit-form"><span id="option"></span><select><option>Choisissez une option</option></select></form></div></article>',
    // template pour delisting (radio) des options pour l'article dans **produit.html**
    // classeLabelRadio : '<label class="labelRadio"><input type="radio" name="" class="produit-form-radio" value=""></label>',
    tagOption : ' <option value="qqc">Quelque chose Quelque chose Quelque chose</option>',
    // template pour input Ajouter au Panier dans **produit.html**
    buttonAjouterAuPanier : '<input type="button" id="produit-form-post" value="Ajouter au Panier">',
    // template pour counter dans l'assid de panier sur toute le pages
    counter : '<span id="counter"></span>',
    // template pour liste de(s) produit(s) dans **panier.html**
    productInCart: '<li class="product"><span class="product-name">Photo 50mm</span><button class="product-delete" id="supr" value="" ><i class="fas fa-trash-alt"></i></button></li>',
    // template pour Pop-Under notification 
    notification: '<div id="popUnder"><div id="popUnder-body"><span id="popUnder-body-p"></span><span id="popUnder-body-btnVerification"><button id="accepter" value=""><i class="fas fa-check-square"></i></button><button id="refuser"><i class="fas fa-window-close"></i></button></span></div> </div>',
    // template pour Pop-Under avec error
    notificationErr: '<div id="popUnder"><div id="popUnder-body"><span id="popUnder-body-btnClose"><button id="refuser"><i class="fas fa-times-circle"></i></button></span><span id="popUnder-body-p">Veuillez choisir une option</span></div></div>',
    // template pour la form de commande dans la **panier.html**
    formCommande: '<div id="commande"><div id="first-last-name"><label>Prénom:<input type="text" id="firstName" placeholder="Jean"></label><label>Nom: <input type="text" id="lastName" placeholder="Deschemps" data="1"></label></div><div id="adress"><label>Adresse:<input type="address" id="street" placeholder="1 Avenue de la Republique" data="2"></label></div><div id="zipcode-ville"><label>Code Postale:<input type="address" id="zipcode" placeholder="13001" data="3"></label><label>Ville:<input type="address" id="city" placeholder="Marseille" data="4"></label></div><div id="email"><label>Courriel:<input type="email" id="mail" placeholder="example@gmail.com" data="5"></label></div><button id="submit">Valide votre commande</button></div>'
}   

export let puissance = 0.01; // pour deminuer le prix des articles

// OU et QOUI on insert
export function constructorHTMLCode(element, tmpl) {
    element.insertAdjacentHTML('beforeend', tmpl);
  };
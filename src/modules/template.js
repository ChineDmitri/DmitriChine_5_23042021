// pour export et en suit pour utilisé en import on utilise VAR et objet
export let template = {
    classLigne : '<div class="ligne"></div>',
    classArticle : '<a class="articleUrl" href="#"><article class="articles"><div class="produit-img"><img src="" class="imgUrl" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom"></h2><span class="produit-prix">49900 €</span><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>',
    idArticle : '<article class="articles"><div id="produit-img"><img id="imgUrl" src="./images/vcam_1.jpg" alt=""></div><div id="produit-general"><h2 id="produit-nom"></h2><span id="produit-prix"></span><p id="produit-description">Lorem ipsum</p><form action="POST" id="produit-form"><span id="option"></span></form></div></article>',
    classeLabelRadio : '<label class="labelRadio"><input type="radio" name="" class="produit-form-radio" value=""></label>',
    buttonAjouterAuPanier : '<input type="button" id="produit-form-post" value="Ajouter au Panier">',
    counter : '<span id="counter"></span>',
    productInCart: '<li class="product"><span class="product-name">Photo 50mm</span><button class="product-delete" id="supr" value="" ><i class="fas fa-trash-alt"></i></button></li>',
    notification: '<div id="popUnder"><div id="popUnder-body"><span id="popUnder-body-p"></span><span id="popUnder-body-btnVerification"><button id="accepter" value=""><i class="fas fa-check-square"></i></button><button id="refuser"><i class="fas fa-window-close"></i></button></span></div> </div>',
    notificationErr: '<div id="popUnder"><div id="popUnder-body"><span id="popUnder-body-btnClose"><button id="refuser"><i class="fas fa-times-circle"></i></button></span><span id="popUnder-body-p">Veuillez choisir une option</span></div></div>',
    formCommande: '<div id="commande" action="order.html" method="POST"><div id="first-last-name"><label>Prénom:<input type="text" id="firstName" placeholder="Jean"></label><label>Nom: <input type="text" id="lastName" placeholder="Deschemps" data="1"></label></div><div id="adress"><label>Adresse:<input type="address" id="street" placeholder="1 Avenue de la Republique" data="2"></label></div><div id="zipcode-ville"><label>Code Postale:<input type="address" id="zipcode" placeholder="13001" data="3"></label><label>Ville:<input type="address" id="city" placeholder="Marseille" data="4"></label></div><div id="email"><label>Courriel:<input type="email" id="mail" placeholder="example@gmail.com" data="5"></label></div><button id="submit">Valide votre commande</button></div>'
}   

export let puissance = 0.01; // pour deminuer le prix des articles

// OU et QOUI on insert
export function constructorHTMLCode(element, tmpl) {
    element.insertAdjacentHTML('beforeend', tmpl);
  };

/*
export var classLigne = '<div class="ligne">';
*/

// example du code HTML pour article sur la page d'acceuil utilisant comme STRING
  /*
 <a href="#">
                    <article class="articles">
                        <div class="produit-img">
                            <img src="http://localhost:3000/images/vcam_1.jpg" alt="">
                        </div>
                        <div class="produit-nomPrixAvis">
                            <h2 class="produit-nom">Zurss 50S 50S 50S 50S 50S 50S 50S </h2>
                            <span class="produit-prix">49900 €</span>
                            <br>
                            <span class="produit-stars">
                                <i class="fas fa-star good"></i>
                                <i class="fas fa-star good"></i>
                                <i class="fas fa-star good"></i>
                                <i class="fas fa-star good"></i>
                                <i class="fas fa-star noGood"></i>
                            </span>
                        </div>
                    </article>
                </a>
*/

// Example du code html pour article sur page produit.html
/*
<article class="articles">
    <div id="produit-img">
        <img src="./images/vcam_1.jpg" alt="">
    </div>

    <div id="produit-general">
            <h2 id="produit-nom">Zurss S 50S 50S 50S </h2>

            <span id="produit-prix">49900 €</span>
            <p id="produit-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima quasi explicabo asperiores consequatur, quis tempore iusto officiis ea possimus voluptatibus! Nostrum, eos. Numquam totam ullam perspiciatis nemo, excepturi impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis recusandae assumenda, earum fugit reprehenderit id alias est itaque voluptatibus, unde explicabo. Tenetur mollitia pariatur nihil sint quaerat, voluptate perferendis tempore!

                            </p>
            <form action="POST" id="produit-form">
                <span>Lenses:</span>
                <label class="labelRadio">
                    <input type="radio" name="lenses" class="produit-form-post" value="35mm 1.4">
                        35mm 1.4"
                                </label>
                    <label class="labelRadio">
                        <input type="radio" name="lenses" class="produit-form-post" value="50mm 1.6">
                            50mm 1.6
                                </label>
                        <label class="labelRadio">
                            <input type="radio" name="lenses" class="produit-form-post" value="50mm 1.6">
                                50mm 1.6
                                </label>
                            <label class="labelRadio">
                                <input type="radio" name="lenses" class="produit-form-post" value="50mm 1.6">
                                    50mm 1.6
                                </label>
                                <input type="button" id="produit-form-post" value="Ajouter au Panier">
                                    <span id="produit-notification">
                                        Vous avez ajouté Zurss S 50S avec linse 50mm 1.6
                                </span>
                                    <span id="produit-notification-goPanier">
                                        <a href="/panier.html">
                                            Voir le panier
                                    </a>
                                    </span>
                            </form>
                            

                        </div>
</article>
*/

/*
export var classArticle = '<a href="#"><article class="articles"><div class="produit-img"><img src="http://localhost:3000/images/vcam_1.jpg" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom">Zurss 50S 50S 50S 50S 50S 50S 50S </h2><span class="produit-prix">49900 €</span><br><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>';
*/

/*
export function constructorArticle(element, tmpl) {
  element.insertAdjacentHTML('beforeend', classArticle);
};
*/
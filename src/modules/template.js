// pour export et en suit pour utilisé en import on utilise VAR et objet
export var template = {
    classLigne : '<div class="ligne"></div>',
    classArticle : '<a class="articleUrl" href="#"><article class="articles"><div class="produit-img"><img src="" class="imgUrl" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom"></h2><span class="produit-prix">49900 €</span><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>',
    idArticle : '<article class="articles"><div id="produit-img"><img id="imgUrl" src="./images/vcam_1.jpg" alt=""></div><div id="produit-general"><h2 id="produit-nom"></h2><span id="produit-prix"></span><p id="produit-description">Lorem ipsum</p><form action="POST" id="produit-form"><span id="option"></span></form></div></article>',
    classeLabelRadio : '<label class="labelRadio"><input type="radio" name="" class="produit-form-radio" value=""></label>',
    buttonAjouterAuPanier : '<input type="button" id="produit-form-post" value="Ajouter au Panier">',
    produitNotification : '<span id="produit-notification"></span><span id="produit-notification-goPanier"></span>',
    counter : '<span id="counter"></span>',
    productInCart: '<li class="product"><span class="product-name">Photo 50mm</span><button class="product-delete" id="" value="1" ><i class="fas fa-trash-alt"></i></button></li>'
}   

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
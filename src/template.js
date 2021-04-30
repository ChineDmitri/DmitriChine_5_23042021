// pour export et en suit pour utilisé en import on utilise VAR et objet
export var template = {
    classLigne : '<div class="ligne">',
    classArticle : '<a class="articleUrl" href="#"><article class="articles"><div class="produit-img"><img src="" class="imgUrl" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom"></h2><span class="produit-prix">49900 €</span><br><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>'
}


export function constructorHTMLCode(element, tmpl) {
    element.insertAdjacentHTML('beforeend', tmpl);
  };

/*
export var classLigne = '<div class="ligne">';
*/

// example du code HTML utilisant comme STRING
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

/*
export var classArticle = '<a href="#"><article class="articles"><div class="produit-img"><img src="http://localhost:3000/images/vcam_1.jpg" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom">Zurss 50S 50S 50S 50S 50S 50S 50S </h2><span class="produit-prix">49900 €</span><br><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>';
*/

/*
export function constructorArticle(element, tmpl) {
  element.insertAdjacentHTML('beforeend', classArticle);
};
*/
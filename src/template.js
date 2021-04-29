

let classLigne = '<div class="ligne">';

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
let classArticle = '<a href="#"><article class="articles"><div class="produit-img"><img src="http://localhost:3000/images/vcam_1.jpg" alt=""></div><div class="produit-nomPrixAvis"><h2 class="produit-nom">Zurss 50S 50S 50S 50S 50S 50S 50S </h2><span class="produit-prix">49900 €</span><br><span class="produit-stars"><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star good"></i><i class="fas fa-star noGood"></i></span></div></article></a>';

export function constructorLigne(element) {
  element.insertAdjacentHTML('beforeend', classLigne);
};

export function constructorArticle(element) {
  element.insertAdjacentHTML('beforeend', classArticle);
};

import {
    link
} from './modules/hostLink.js';

import {
    constructorHTMLCode, 
    template
} from './modules/template';

import {
    quantityProduct,
    showQuantityOfProducts
} from './modules/cartStatus.js';

import {
    sendRequest
} from './modules/sendRequest.js';

// let cameras = new XMLHttpRequest();

// cameras.open('GET', link);
// cameras.send();

// // creation promise et resolve ARRAY avec les cameras
// let promiseCameras = new Promise((resolve, reject) => {
//     cameras.onload = () => {
//         let arrayCameras = JSON.parse(cameras.response);
//         console.log(arrayCameras);
//         resolve(arrayCameras)
//     }
// });

sendRequest('GET', link)
    .then((value) => {
        let classMaintContent = document.getElementsByClassName('main-content');
        let k = -1;

        // if (value.length % 2 !== 0) {
        //     constructorLigne(classMaintContent[0]);
        // };

        for (let i = 0; i < value.length; i++) {

            if (i % 2 === 0) {
                // creation une ligne
                constructorHTMLCode(classMaintContent[0], template.classLigne);
                k++;
            }

            let classLigne = document.getElementsByClassName('ligne');
            //creation des articles dans la ligne avec deux article (k = indice de ligne)
            constructorHTMLCode(classLigne[k], template.classArticle);

            let produitName = document.getElementsByClassName("produit-nom");
            //atribution du nom pour article 
            produitName[i].innerText = value[i].name;

            let produitPrix = document.getElementsByClassName("produit-prix");
            //atributipn de la prix pour article
            produitPrix[i].innerText = (value[i].price + " €");

            // attribution de url de l'image pour article
            let produitImg = document.getElementsByClassName("imgUrl");
            produitImg[i].setAttribute("src", value[i].imageUrl);

            // creation url de la produit
            let url = ('./produit.html?id=' + value[i]._id);

            // attribution de l'url pour article 
            let produitUrl = document.getElementsByClassName('articleUrl');
            produitUrl[i].setAttribute("href", url);

        }

        showQuantityOfProducts(quantityProduct());


    })
    .catch((err) => {
        console.log(err)
    })
    



/*
promiseCameras.then((value) => { 
    async () => {
        
    }
    for (let i = 0; i < value.length; i++) {

        // creation du code HTML pour les articles;
        let articles = document.getElementById('articles');
        let div = document.createElement('div');
        articles.appendChild(div);
        div.className = "camera";

        // rajoute dans chaque div 
        let camera = document.getElementsByClassName('camera');
        camera[i].innerHTML = (
            value[i].lenses + "<br>" + 
            value[i]._id + "<br>" + 
            value[i].name + "<br>" + 
            value[i].price + "<br>" +
            value[i].description + "<br>" +
            value[i].imageUrl + "<br><br>" );
        console.log(value[i]);

    };
});
*/
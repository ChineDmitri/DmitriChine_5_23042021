import {
    constructorHTMLCode,
    template
} from './modules/template.js';

import {
    produits,
    addToLocalStorage,
    notification
} from './modules/addToCart.js';

import {
    quantityProduct,
    showQuantityOfProducts
} from './modules/cartStatus.js';

import {
    sendRequest
} from './modules/sendRequest.js'

const id = 'produit.html?id=';
let hrefURL = location.href;
let idProduitByURL;

// si nous avons dans URL '?id=' alors on cherche numero ID 
// recuperation de ID par URL (typeof hrefURL = string)
if (hrefURL.includes(id) == true) {
    idProduitByURL = hrefURL.slice((hrefURL.indexOf(id) + id.length), hrefURL.length);
}

// c'est TO DO
// console.log(hrefURL.includes(id));
// console.log(hrefURL.length);
// console.log(idProduitByURL);


const link = 'http://localhost:3000/api/cameras';


sendRequest('GET', link)
    .then((data) => {
        let objetJSON = data.find(objet => objet._id === idProduitByURL)

        if (objetJSON) {
            console.log(objetJSON);

            // creation de title pour option (color, linses...)
            let option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('":'));
            // mettre en majuscule
            let optionFirstCharUpperCase = option[0].toUpperCase(0) + option.slice(1, option.length);
            // verification si c'est bon
            console.log(option);
            
            
            let ligne = document.getElementsByClassName("ligne");

            constructorHTMLCode(ligne[0], template.idArticle);

            // preparation de variables DOM pour travailer avec
            let produitNom = document.getElementById("produit-nom");
            let produitPrix = document.getElementById("produit-prix");
            let produitDescription = document.getElementById("produit-description");
            let titleOption = document.getElementById("option");
            let produitForm = document.getElementById("produit-form");
            let imgUrl = document.getElementById("imgUrl");

            // incertion de donné
            produitPrix.innerText = (objetJSON.price + " €");
            produitDescription.innerText = objetJSON.description;
            produitNom.innerText = objetJSON.name;
            titleOption.innerText = (optionFirstCharUpperCase + ":");
            imgUrl.setAttribute("src", objetJSON.imageUrl)

            // console.log(objetJSON.lenses.length);

            // cration lest des option pour article
            for (let i = 0; i < objetJSON.lenses.length; i++) {
                constructorHTMLCode(produitForm, template.classeLabelRadio)

                let lebelRadio = document.getElementsByClassName("labelRadio");
                let inputProduitFormRadio = document.getElementsByClassName("produit-form-radio");
                
                constructorHTMLCode(lebelRadio[i], objetJSON.lenses[i]);
                inputProduitFormRadio[i].setAttribute("name", option);
                inputProduitFormRadio[i].setAttribute("value", objetJSON.lenses[i]);
            }

            // n'oublie pas ajouter button ;)
            constructorHTMLCode(produitForm, template.buttonAjouterAuPanier);
            constructorHTMLCode(produitForm, template.produitNotification);

            let ajouterAuPanier = document.getElementById("produit-form-post");

            

            //ajoute en localStorage
            ajouterAuPanier.addEventListener('click', () => {
                
                
                // let produitForm = document.getElementById('produit-form'); 

                let radios = document.getElementsByClassName("produit-form-radio");
                let optionValue;
                // verification si une RADIO (lenses) etait choisis
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        // get value, set checked flag or do whatever you need to
                        optionValue = radios[i].value;
                    }
                    // n'oublie pas enlever checked
                    radios[i].checked = false;
                }
                console.log("radio value ", optionValue);

                // verifier si utilisateur choisis la lense
                if (optionValue !== undefined) {
                    // si nous avons queque chosse dans localStorage il faut recuperer et reenvoyer à localSotage
                    if (localStorage.getItem('produitInPanier') !== null) {
                        let bufferProduits = JSON.parse(localStorage.getItem('produitInPanier'));
                        addToLocalStorage(bufferProduits, objetJSON, optionValue);

                        notification(objetJSON.name, option, optionValue);
    
                        showQuantityOfProducts(quantityProduct());

                    } else { // sinon il fait directement envoyer à localStorage

                        addToLocalStorage(produits, objetJSON, optionValue);

                        notification(objetJSON.name, option, optionValue);

                        showQuantityOfProducts(quantityProduct());

                    }

                } else { // sinon message que il faut choisir la lense

                    console.log("choisiser les " + option);

                    let produitNotification = document.getElementById('produit-notification');
                    produitNotification.innerText = ("Veillez à choisir la " + option);
                    let produitNotificationGoPanier = document.getElementById('produit-notification-goPanier');
                    produitNotificationGoPanier.innerHTML = '';

                }

                console.log("qoui " + radios.checked);

                
            })

            showQuantityOfProducts(quantityProduct());

        } else {
            console.log('piratage');
        }
    })
    .catch ((err) => {
      console.log(err)  
    }) 
    




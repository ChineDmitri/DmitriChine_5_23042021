import {
    sendRequest
} from './modules/sendRequest.js';

import {
    quantityProduct,
    showQuantityOfProducts
} from './modules/cartStatus.js';

import {
    constructorHTMLCode,
    template
} from './modules/template.js';

import {
    verificationDelete,
    deleteArticle
} from './modules/removeFromCart';

// let commande = {
//     contact: {
//         firstName: "Dmitri",
//         lastName: "Chine",
//         address: "580 Route de la Légion",
//         // {
//         //     street : ,
//         //     zipCode : "13400",
//         //     city: "Aubagne"
//         // },
//         city: "Aubagne",
//         email: "mr.dima11@gmail.com",
//     },
//      products: ["5be1ef211c9d44000030b062", "5be9bc241c9d440000a730e7", "5be1ef211c9d44000030b062"]
// }
    

let linkGET = `http://localhost:3000/api/cameras/`;
let lingPOST = `http://localhost:3000/api/cameras/order`;

showQuantityOfProducts(quantityProduct());

function removePopUnder() {
    
    }

sendRequest("GET", linkGET)
.then((data) => {

    if (!quantityProduct()) {
        document.getElementsByTagName("h2")[0].innerText = "Aucune article au panier :(";
    } else {
        // recuperation localStorage
        let dataLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));

        document.getElementsByTagName("h2")[0].innerText = "La composition de votre panier";
    
        let panierOL = document.getElementsByTagName("ol");
        
        // delisting products
        for (let i = 0; i < quantityProduct(); i++) {
            constructorHTMLCode(panierOL[0], template.productInCart);
            let objetJSON = data.find(objet => objet._id === dataLocalStorage.product_id[i]);

            // regarder si c'est lenses / couler / vernil
            let option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('":'));
            let productName = document.getElementsByClassName("product-name")[i]

            console.log("objet " + objetJSON.lenses);
            productName.innerText = objetJSON.name + " " + option + " " + objetJSON.lenses;

            document.getElementsByClassName("product-delete")[i].setAttribute("value", i);

            // cration pour chaque butonne addEventListener
            document.getElementsByClassName("product-delete")[i].addEventListener('click', () => {
                console.log(document.getElementsByClassName("product-delete")[i].value);
                let indexArticle = document.getElementsByClassName("product-delete")[i].value;

                let tagBody = document.getElementsByTagName("body");
                let messageNotification = document.getElementsByClassName("product-name")[i].textContent;

                constructorHTMLCode(tagBody[0], template.notificationDelete);
                document.getElementById("popUnder-body-p").innerHTML = ("Voulez-vous <u>supprimer</u> " + messageNotification + " ?");
                document.getElementById("accepter").setAttribute("value", i);


                verificationDelete();
                //envoyer en function idArticle
                deleteArticle(indexArticle);
            })

        }


    }
    
})








// sendRequest('POST', link, commande)
//     .then(data => {
//         console.log(data.orderId)
//     })
//     .catch(err => console.log(err))
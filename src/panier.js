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

sendRequest("GET", linkGET)
.then((data) => {

    if (!quantityProduct()) {
        document.getElementsByTagName("h2")[0].innerText = "Aucune article au panier :(";
    } else {
        // recuperation localStorage
        let dataLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));

        document.getElementsByTagName("h2")[0].innerText = "La composition de votre panier";
    
        let panierOL = document.getElementsByTagName("ol");
        
        for (let i = 0; i < quantityProduct(); i++) {
            constructorHTMLCode(panierOL[0], template.productInCart);
            let objetJSON = data.find(objet => objet._id === dataLocalStorage.product_id[i]);

            // regarder si c'est lenses / couler / vernil
            let option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('":'));

            console.log("objet " + objetJSON.lenses);
            document.getElementsByClassName("product-name")[i].innerText = objetJSON.name + " " + option + " " + objetJSON.lenses;

            document.getElementsByClassName("product-delete")[i].setAttribute("onclick", "");
        }
       
        let deleteButton = document.getElementsByClassName("product-delete");
        deleteButton.onclick(() => alert("gogogo"))

    }

})





// sendRequest('POST', link, commande)
//     .then(data => {
//         console.log(data.orderId)
//     })
//     .catch(err => console.log(err))
import {
    link,
    linkPOST
} from './modules/hostLink.js';

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
    

showQuantityOfProducts(quantityProduct());

sendRequest("GET", link)
.then((data) => {

    if (!quantityProduct()) {
        document.getElementsByTagName("h2")[0].innerText = "Aucune article au panier :(";
    } else {
        // recuperation localStorage
        let dataLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));

        document.getElementsByTagName("h2")[0].innerText = "La composition de votre panier";
    
        let panierOL = document.getElementsByTagName("ol");
        
        let prixTotal = 0;

        // delisting products
        for (let i = 0; i < quantityProduct(); i++) {
            constructorHTMLCode(panierOL[0], template.productInCart);
            let objetJSON = data.find(objet => objet._id === dataLocalStorage.product_id[i]);

            // regarder si c'est lenses / couler / vernil
            let option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('":'));
            let productName = document.getElementsByClassName("product-name")[i]

            //compteur de prix total de la commande
            prixTotal += objetJSON.price;

            console.log("objet " + objetJSON.lenses);
            productName.innerText = objetJSON.name + " " + option + " " + objetJSON.lenses + " (prix:" + objetJSON.price + " €)";

            document.getElementsByClassName("product-delete")[i].setAttribute("value", i);

            // cration pour chaque butonne addEventListener
            document.getElementsByClassName("product-delete")[i].addEventListener('click', () => {
                console.log(document.getElementsByClassName("product-delete")[i].value);
                let indexArticle = document.getElementsByClassName("product-delete")[i].value;

                let tagBody = document.getElementsByTagName("body");
                let messageNotification = document.getElementsByClassName("product-name")[i].textContent;

                constructorHTMLCode(tagBody[0], template.notification);
                document.getElementById("popUnder-body-p").innerHTML = ("Voulez-vous <u>supprimer</u> " + messageNotification + " ?");
                document.getElementById("accepter").setAttribute("value", i);


                verificationDelete();
                //envoyer en function idArticle
                deleteArticle(indexArticle);
            })

        }
        
        document.getElementById("sommeTotal").innerText = ("Prix total de la commande: " + prixTotal / 100 + " €");


       

        // verif firstName
        // let firstName = document.getElementById("firstName");
        // firstName.addEventListener('input', () => {
        //     if (regexFirstNameLastName.test(firstName.value)) {
        //         submit.removeAttribute("disabled");
        //     } else {
        //         submit.setAttribute("disabled","true");
        //     }
        // })

        
        
    }
    
})

// validation donné
let check = {
    "firstName": false,
    "lastName": false,
    "street": false,
    "codePostal": false,
    "ville": false,
    "courriel": false,
}

let commande = {
    contact: {
        firstName: "",
        lastName: "",
        address: "",
        // {
        //     street : ,
        //     zipCode : "13400",
        //     city: "Aubagne"
        // },
        city: "",
        email: "",
    },
    products: ["5be1ed3f1c9d44000030b061", "5be1ed3f1c9d44000030b061", "5be1ed3f1c9d44000030b061"]
}

// remplicage de commande massiv de products avec ID de LocalStorage
// let bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));
// commande.products = JSON.stringify(bufferLocalStorage.product_id);

let regexFirstNameLastNameVille = /^([A-Za-z][A-Za-z'-]+)?$/;
let regexStreet = /^([A-Za-z0-9][ A-Za-z0-9.,]+)?$/;
let regexCodePostal = /^(?:0[1-9]|[1-9]\d)\d{3}$/;
let regexCourriel = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

let firstName = document.getElementById("firstName");
let lastName = document.getElementById('lastName');
let street = document.getElementById("street");
let codePostal = document.getElementById("zipcode");
let ville = document.getElementById("city");
let courriel = document.getElementById("mail");

function checkInput(input, regex) {
    let checking = false;
    if (regex.test(input.value) && input.value !== "") {
        input.setAttribute("class", "valide");
        checking = true;
        console.log(input, checking);
    } else {
        input.setAttribute("class", "error")
        checking = false;
        console.log(input, checking);
    }
    return checking;
}

firstName.addEventListener('input', () => {
    check.firstName = checkInput(firstName, regexFirstNameLastNameVille);
})
lastName.addEventListener('input', () => {
    check.lastName = checkInput(lastName, regexFirstNameLastNameVille);
})
street.addEventListener('input', () => {
    check.street = checkInput(street, regexStreet);
})
codePostal.addEventListener('input', () => {
    check.codePostal = checkInput(codePostal, regexCodePostal);
})
ville.addEventListener('input', () => {
    check.ville = checkInput(ville, regexFirstNameLastNameVille);
})
courriel.addEventListener('input', () => {
    check.courriel = checkInput(courriel, regexCourriel);
})

let submit = document.getElementById("submit");
submit.addEventListener('click', function(dataPromt) {

    check.firstName = checkInput(firstName, regexFirstNameLastNameVille);
    check.lastName = checkInput(lastName, regexFirstNameLastNameVille);
    check.street = checkInput(street, regexStreet);
    check.codePostal = checkInput(codePostal, regexCodePostal);
    check.ville = checkInput(ville, regexFirstNameLastNameVille);
    check.courriel = checkInput(courriel, regexCourriel);

    if (check.firstName &&
        check.lastName &&
        check.street &&
        check.codePostal &&
        check.ville &&
        check.courriel) {
        //remplisage de la commande avec la valeur des inputs
        commande.contact.firstName = firstName.value;
        commande.contact.lastName = lastName.value;
        commande.contact.address = street.value;
        commande.contact.city = (codePostal.value + " " + ville.value);
        commande.contact.email = courriel.value;

        sendRequest('POST', linkPOST, commande)
        
            
        

        console.log('votre commande', commande)
        console.log("GOOOOD!!!")
    } else {
        // let tagBody = document.getElementsByClassName("body");
        // constructorHTMLCode(tagBody[0], template.notificationErr);
        let tagBody = document.getElementsByTagName("body");
        constructorHTMLCode(tagBody[0], template.notificationErr);
        // incertion du message
        document.getElementById("popUnder-body-p").innerText = "Veuillez remplir tous les champs du formulaire correctement.";

        // fermeture notification
        let refuser = document.getElementById("refuser");
        refuser.addEventListener("click", () => {
            document.getElementById('popUnder').remove();
        })
    }
})








        
        








// sendRequest('POST', link, commande)
//     .then(data => {
//         console.log(data.orderId)
//     })
//     .catch(err => console.log(err))
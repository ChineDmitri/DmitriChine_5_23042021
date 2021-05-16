import {
    link,
    linkPOST,
    domaine,
    portFronEnd
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
    template,
    puissance
} from './modules/template.js';

import {
    verificationDelete,
    deleteArticle
} from './modules/removeFromCart';    
import {    
    eventRefuser
} from './modules/notificationEvent.js';

//combien produit dans panier
showQuantityOfProducts(quantityProduct());

sendRequest("GET", link)
.then((data) => {

    if (!quantityProduct()) {
        document.getElementsByTagName("h2")[0].innerText = "Aucune article au panier :(";
        
        let ol = document.getElementsByTagName("ol");
        ol[0].classList.add("minH");

    } else {
        // recuperation localStorage
        let dataLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));

        document.getElementsByTagName("h2")[0].innerText = "La composition de votre panier";
    
        let panierOL = document.getElementsByTagName("ol");
        
        let prixTotal = 0; // pour afficher total de prix

        // delisting products
        for (let i = 0; i < quantityProduct(); i++) {
            constructorHTMLCode(panierOL[0], template.productInCart);
            let objetJSON = data.find((objet) => objet._id === dataLocalStorage.product_id[i]);
            let produitInPanier = JSON.parse(localStorage.getItem('produitInPanier'));

            // regarder si c'est lenses / couler / vernil
            let option = JSON.stringify(objetJSON).slice(2, JSON.stringify(objetJSON).indexOf('":'));
            let productName = document.getElementsByClassName("product-name")[i]

            //compteur de prix total de la commande
            prixTotal += objetJSON.price;

            console.log("objet " + objetJSON.lenses);
            productName.innerText = objetJSON.name + " " + option + " " + produitInPanier.lenses[i] + " (prix:" + objetJSON.price * puissance + " €)";
            console.log(objetJSON)
            document.getElementsByClassName("product-delete")[i].setAttribute("value", i);

            // cration pour chaque butonne addEventListener
            document.getElementsByClassName("product-delete")[i].addEventListener('click', () => {
                console.log(document.getElementsByClassName("product-delete")[i].value);
                let indexArticle = document.getElementsByClassName("product-delete")[i].value;

                let tagBody = document.getElementsByTagName("body");
                let messageNotification = document.getElementsByClassName("product-name")[i].textContent; //get text

                constructorHTMLCode(tagBody[0], template.notification);
                document.getElementById("popUnder-body-p").innerHTML = ("Voulez-vous <u>supprimer</u> " + messageNotification + " ?");
                document.getElementById("accepter").setAttribute("value", i);


                verificationDelete();
                //envoyer en function idArticle
                deleteArticle(indexArticle);
            })

        }
        
        document.getElementById("sommeTotal").innerText = ("Prix total de la commande: " + prixTotal * puissance + " €");    
        let panier = document.getElementsByClassName("main-panier")
        constructorHTMLCode(panier[0], template.formCommande);
        
    }
    
})
.then(() => {
    if (quantityProduct()) {
        // qu-es ce que on verifie
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
                city: "",
                email: "",
            },
            products: []
        }

        // remplicage de commande - massiv de products avec ID de LocalStorage
        let bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));
        commande.products = bufferLocalStorage.product_id;

        // RegEx pour validation des inputs
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

        // finction de verification de l'input
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

        // validation donné de chaque inpute
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

        // click pour valider la commande (RAS obtenir orderId - NOGOOD - PopUnder)
        let submit = document.getElementById("submit");
        submit.addEventListener('click', () => {

            check.firstName = checkInput(firstName, regexFirstNameLastNameVille);
            check.lastName = checkInput(lastName, regexFirstNameLastNameVille);
            check.street = checkInput(street, regexStreet);
            check.codePostal = checkInput(codePostal, regexCodePostal);
            check.ville = checkInput(ville, regexFirstNameLastNameVille);
            check.courriel = checkInput(courriel, regexCourriel);

            // verification ensamble avec logique ET
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

                // send request POST et recuperation in preview orderId et redirect vers page confirmation
                sendRequest('POST', linkPOST, commande)
                    .then((data) => {
                        console.log("Votre id de comande", data.orderId);
                        window.location.href = (domaine + portFronEnd + "/confirmation.html?id=" + data.orderId);
                        localStorage.removeItem("produitInPanier");
                    })

                console.log("votre commande", commande)
                console.log("GOOOOD!!!")

            } else {

                // creation popUnder
                let tagBody = document.getElementsByTagName("body");
                constructorHTMLCode(tagBody[0], template.notificationErr);

                // incertion du message
                document.getElementById("popUnder-body-p").innerText = "Veuillez remplir tous les champs du formulaire correctement.";

                // delete the pop-under
                let refuser = document.getElementById("refuser");
                eventRefuser(refuser);

            }
        })
        
    } 
    

})

import {
    quantityProduct,
    showQuantityOfProducts
} from './modules/cartStatus.js';


//combien produit dans panier
showQuantityOfProducts(quantityProduct());

const id = 'confirmation.html?id=';
let hrefURL = location.href;
let idProduitByURL;

// si nous avons dans URL 'confirmation.html?id=' alors on cherche numero ID 
// recuperation de ID par URL (typeof hrefURL = string)
if (hrefURL.includes(id)) {
    idProduitByURL = hrefURL.slice((hrefURL.indexOf(id) + id.length), hrefURL.length);
    // indexOf(objet) = [i] de où objet commence (ex string = "Dima Chine"; string.indexOf("Chine") retun number 5 if false -1)
    // slice (debut[i], fin[i]) 
}

// si id n'est pas 36 symbol donc c'est piratage :)
if (idProduitByURL.length === 36) {
    console.log("GO")
    document.getElementById("confirmationMessage").innerText = "Merci pour votre achat et à bientôt!";
    document.getElementById("orderId").innerHTML = ("Numero de votre commande:<br><b>" + idProduitByURL + "</b>")
} else {
    document.getElementById("confirmationMessage").innerText = "Commande n'est pas trouvé!";
    document.getElementById("orderId").innerHTML = '<a href="/">Revenir à l&#39;accueil</a>';
}
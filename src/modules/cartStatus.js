import { 
    constructorHTMLCode, 
    template 
} from "./template.js";

export function quantityProduct() {

    if (localStorage.getItem('produitInPanier') !== null) {
        let bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier'));
        
        console.log("buffer " + bufferLocalStorage.product_id.length);
        // return qyantité de produit dans le localStorage (typeof Number)
        return bufferLocalStorage.product_id.length;
    }

}

export function showQuantityOfProducts(quantity) {
    
    let sectorPaneir = document.getElementsByTagName("aside");

    if (quantity != 0 && quantity !== undefined) {
        // si element avec id "counter" a etait crée pas becoin créé encore
        if (!document.getElementById("counter")) {
            constructorHTMLCode(sectorPaneir[0], template.counter);
        } 

        // envoye le quantité de produit dans le code HTML
        document.getElementById("counter").innerText = quantity;

        console.log("verification! " + quantity);
        
    }
    
}
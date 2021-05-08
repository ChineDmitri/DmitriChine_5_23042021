
export let produits = {
    "product_id": [],
    "lenses": [],
    "prix": []
}

export function addToLocalStorage(array, input, option) {
    
    array.product_id.push(input._id);
    array.lenses.push(option);
    array.prix.push(input.price);
    localStorage.setItem('produitInPanier', JSON.stringify(array));
    console.log("array ", array);
};

export function notification(name, titreOption, value) {
   
    let produitNotification = document.getElementById('popUnder-body-p');
    produitNotification.innerHTML = ("Vous avez <u>ajouté</u> " + name + " avec " + titreOption + " " + value + "</br> <b>Voir le panie?</b>");
}

export let produits = {
    "product_id": [],
    "lenses": [],
}

export function addToLocalStorage(array, input, option) {
    array.product_id.push(input._id);
    array.lenses.push(option);
    localStorage.setItem('produitInPanier', JSON.stringify(array));
    console.log("array ", array);
};

export function notification(name, titreOption, value) {
    let produitNotification = document.getElementById('produit-notification');
    let produitNotificationGoPanier = document.getElementById('produit-notification-goPanier');
    produitNotification.innerText = ("Vous avez ajouté " + name + " avec " + titreOption + " " + value);
    produitNotificationGoPanier.innerHTML = '<a href="/panier.html">Voir le panier</a>';
}
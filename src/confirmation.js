const id = 'confirmation.html?id=';
let hrefURL = location.href;
let idProduitByURL;

// si nous avons dans URL 'confirmation.html?id=' alors on cherche numero ID 
// recuperation de ID par URL (typeof hrefURL = string)
if (hrefURL.includes(id)) {
    idProduitByURL = hrefURL.slice((hrefURL.indexOf(id) + id.length), hrefURL.length);
    // indexOf(objet) = [i] de où objet commence (ex string = "Dima Chine"; string.indexOf("Chine") retun number 5 if false -1)
    // slice (debut[i], fin[i]) debut c'est n'inclus pas!
}

if (idProduitByURL.length === 36) {
    console.log("GO")
} else {
    console.log("NO GO")
}
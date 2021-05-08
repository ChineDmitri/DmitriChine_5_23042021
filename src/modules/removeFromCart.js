// function fermeture de popUnder
export function verificationDelete() {
    let refuser = document.getElementById("refuser");
    
    
    refuser.addEventListener("click", () => {
        document.getElementById('popUnder').remove();
    })

    
} 

// function suppresion de produit et reload page
export function deleteArticle(id) {
    let accepter = document.getElementById("accepter");
    accepter.addEventListener("click", () => {
        // document.getElementsByClassName("product")[id].remove();
        // document.getElementById('popUnder').remove();

        let bufferLocalStorage = JSON.parse(localStorage.getItem('produitInPanier')); 
        console.log(bufferLocalStorage);

        // suprimme id produit et lense par l'index
        bufferLocalStorage.product_id.splice(id, 1);
        bufferLocalStorage.lenses.splice(id, 1);

        // n'oublie pas réenvoyer a local storage
        localStorage.setItem('produitInPanier', JSON.stringify(bufferLocalStorage));

        location.reload();


    })
}
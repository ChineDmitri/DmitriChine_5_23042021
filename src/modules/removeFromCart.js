
export function verificationDelete() {
    let refuser = document.getElementById("refuser");
    
    
    refuser.addEventListener("click", () => {
        document.getElementById('popUnder').remove();
    })

    
} 

export function deleteArticle(idProduit) {
    let accepter = document.getElementById("accepter");
    accepter.addEventListener("click", () => {
        document.getElementsByClassName("product")[idProduit].remove();
        document.getElementById('popUnder').remove();

        // let bufferLocalStorage = jlocalStorage.getItem('produitInPanier');
        // console.log(bufferLocalStorage);
    })
}
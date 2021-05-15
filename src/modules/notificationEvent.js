import {
    domaine,
    portFronEnd
} from './hostLink.js'

// function de l'evenement => REDIRECTION 
export function eventAccepter(element) {
    element.addEventListener("click", () => {
        console.log("chiao")
        console.log(document.domain + "/panier.html")
        window.location.href = ("http://" +document.domain + "/panier.html");
    })
}

// function de l'evenement => destruction PopUnder
export function eventRefuser(element) {
    element.addEventListener("click", () => {
        document.getElementById('popUnder').remove();
    })
}

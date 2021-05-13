import {
    domaine,
    portFronEnd
} from './hostLink.js'

// function de l'evenement => REDIRECTION 
export function eventAccepter(element) {
    element.addEventListener("click", () => {
        console.log("chiao")
        window.location.href = (domaine + portFronEnd + "/panier.html");
    })
}

// function de l'evenement => destruction PopUnder
export function eventRefuser(element) {
    element.addEventListener("click", () => {
        document.getElementById('popUnder').remove();
    })
}

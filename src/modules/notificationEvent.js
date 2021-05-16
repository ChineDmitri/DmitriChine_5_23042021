import {
    domaine,
    portFronEnd
} from './hostLink.js'

// function de l'evenement => REDIRECTION ver direcion
export function eventAccepter(element, direction) {
    element.addEventListener("click", () => {
        console.log("chiao")
        window.location.href = (domaine + portFronEnd + direction);
    })
}

// function de l'evenement => destruction PopUnder
export function eventRefuser(element) {
    element.addEventListener("click", () => {
        document.getElementById('popUnder').remove();
    })
}

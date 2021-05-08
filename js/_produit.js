
const id = '?id=';
let hrefURL = location.href;
let idProduitByURL;

if (hrefURL.includes(id) == true) {
    idProduitByURL = hrefURL.slice((hrefURL.indexOf(id) + id.length), hrefURL.length);
}
// recuperation de ID par URL (typeof hrefURL = string)
console.log(hrefURL.includes(id));
console.log(hrefURL.length);
console.log(idProduitByURL);


const link = 'http://localhost:3000/api/cameras';

//function pour GET POST 
function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {

        let cameras = new XMLHttpRequest();
    
        cameras.open(method, url);

        cameras.send(body);
    
        cameras.onload = () => {
            let arrayCameras = JSON.parse(cameras.response);
            resolve(arrayCameras)
        }

        cameras.onerror = () => {
            reject(cameras.response);
        }
    })
        
};


sendRequest('GET', link)
    .then((data) => {
        let objetJSON = data.find(objet => objet._id === idProduitByURL)

        if (objetJSON) {
            console.log(objetJSON);

            let articles = document.getElementById('articles');
            let div = document.createElement('div');
            articles.appendChild(div);
            div.className = "discription";

            let discription = document.getElementsByClassName('discription');
            discription[0].innerHTML = (
                objetJSON.name + "</br></br>" +
                objetJSON.description + "</br></br>" +
                objetJSON.price + "</br></br>" +
                objetJSON.imageUrl
            );

        } else {
            console.log('piratage');
        }
    })
    .catch((error) => {
        console.log('existe pas', error);
    })

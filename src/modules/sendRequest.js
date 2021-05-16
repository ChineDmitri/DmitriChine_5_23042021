//function pour GET POST (body = null si methot get)
export function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {

        let request = new XMLHttpRequest();
    
        request.open(method, url);

        request.responseType = 'text';
        request.setRequestHeader('Content-Type', 'application/json');


        request.onload = () => {
            if (request.status >= 400) { // Status Code si > 400 reject
                reject(request.response)
            } else {
                let array = JSON.parse(request.response); // parse le response en JSON
                resolve(array)
            } 
        }

        request.onerror = () => {
            reject(request.response);
        }

        request.send(JSON.stringify(body)); // envoyer body transforme en STRING
    })
        
};
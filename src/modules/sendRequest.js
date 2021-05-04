//function pour GET POST 
export function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {

        let request = new XMLHttpRequest();
    
        request.open(method, url);

        request.responseType = 'text';
        request.setRequestHeader('Content-Type', 'application/json');

    
        request.onload = () => {
            if (request.status >= 400) {
                reject(request.response)
            } else {
                let array = JSON.parse(request.response);
                resolve(array)
            } 
        }

        request.onerror = () => {
            reject(request.response);
        }

        request.send(JSON.stringify(body));
    })
        
};


const link = 'http://localhost:3000/api/cameras';
let cameras = new XMLHttpRequest();

cameras.open('GET', link);
cameras.send();

// creation promise et resolve ARRAY avec les cameras
let promiseCameras = new Promise((resolve, reject) => {
    cameras.onload = () => {
        let arrayCameras = JSON.parse(cameras.response);
        console.log(arrayCameras);
        resolve(arrayCameras)
    }
});



promiseCameras.then((value) => { 
    async () => {
        
    }
    for (let i = 0; i < value.length; i++) {

        // creation du code HTML pour les articles;
        let articles = document.getElementById('articles');
        let div = document.createElement('div');
        articles.appendChild(div);
        div.className = "camera";

        // rajoute dans chaque div 
        let camera = document.getElementsByClassName('camera');
        camera[i].innerHTML = (
            value[i].lenses + "<br>" + 
            value[i]._id + "<br>" + 
            value[i].name + "<br>" + 
            value[i].price + "<br>" +
            value[i].description + "<br>" +
            value[i].imageUrl + "<br><br>" );
        console.log(value[i]);

    };
});


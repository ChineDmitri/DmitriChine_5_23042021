import {
    sendRequest
} from './modules/sendRequest.js'

let commande = {
    contact: {
        firstName: "Dmitri",
        lastName: "Chine",
        address: "580 Route de la Légion",
        // {
        //     street : ,
        //     zipCode : "13400",
        //     city: "Aubagne"
        // },
        city: "Aubagne",
        email: "mr.dima11@gmail.com",
    },
     products: ["5be1ef211c9d44000030b062", "5be9bc241c9d440000a730e7", "5be1ef211c9d44000030b062"]
}
    

let link = `http://localhost:3000/api/cameras/order`;


sendRequest('POST', link, commande)
    .then(data => console.log(data.orderId))
    .catch(err => console.log(err))
function CartService ($http, $q) {
    const service = this;

    service.cartList = [];

//     service.getCartData = () => {
//         return $q(function (resolve, reject) {
//             $http.get('/cartItems')
//             .then ( (response) => {
//                 console.log(response.data);
//                 resolve(response.data);
//             }) 
//             .catch( (err) => {
//                 console.error(err);
//                 reject(err);
//             })
//         })
//     }
// }

service.removeItem = (item) => {
    return $q( (resolve, reject) => {
        $http({
            url: "/cartItems/" + item.id,
            method: "DELETE"
        })
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}



service.updateItem = (id) => {
    return $http({
        url: "/cartItems/" + id,
        method: "PUT",
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}

service.addItem = (item) => {
    service.cartList.push(item);
    return $http({
        url: "/cartItems/",
        method: "POST"
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}


angular
.module('CartApp')
.service('CartService', CartService);


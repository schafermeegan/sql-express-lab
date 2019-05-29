function CartService ($http, $q) {
    const service = this;

    service.getCartData = () => {
        return $q(function (resolve, reject) {
            $http.get('/cartItems')
            .then ( (response) => {
                console.log(response.data);
                resolve(response.data);
            }) 
            .catch( (err) => {
                console.error(err);
                reject(err);
            })
        })
    }
}

service.removeItem = (id) => {
    return $http({
        url: "/cartItems/" + id,
        method: "DELETE"
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}

service.updateItem = (item) => {
    return $http({
        url: "/cartItems/" + id,
        method: "PUT"
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}

service.addItem = (item) => {
    return $http({
        url: "/cartItems/" = id,
        method: "POST"
    }) .then( (response) => {
        console.log(response.data);
        resolve(response.data);
    });
}


angular
.module('CartApp')
.service('CartService', CartService);

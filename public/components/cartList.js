function CartList(CartService) {
    const ctrl = this;

    ctrl.getList = () => {
        CartService.getCartData()
        .then( (data) => {
            ctrl.cartItems = data;
        })
        .catch( (err) => {
            console.log(err);
        })
    };
    ctrl.getList();
}


angular
.module('CartApp')
.component('cartList', {
    controller: CartList,
    template:
    `
    <div>
        <h2>Shopping:<h2>
        </div>

    `
});
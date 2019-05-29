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
        <h2>Shopping Cart<h2>
        </div>

    <div>
        <form ng-submit="addItem(item)">
            <input type="text" ng-model="form.text1">
        </form>

        <form ng-submit="removeItem(id)">
            <input type="number" ng-model="form.number1">
        </form>

        <form ng-submit="updateItem(item)">
            <input type="text" ng-model="form.text2"
        </form>

    </div>

    `
});
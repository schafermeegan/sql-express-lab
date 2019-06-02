function CartList(CartService) {
  const ctrl = this;

//     ctrl.getList = () => {
//         CartService.getCartData()
//         .then( (data) => {
//             ctrl.cartItems = data;
//         })
//         .catch( (err) => {
//             console.log(err);
//         })
//     };
//     ctrl.getList();
// }

ctrl.removeItem =
ctrl.addItem =
ctrl.updateItem =

ctrl.addItem = (item) => {

}

ctrl.removeItem = (id) => {

}

ctrl.updateItem = (item) => {

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
          Add Item
          <input type="text" ng-model="form.text1">
      </form>
      <form ng-submit="removeItem(id)">
          Remove Item
          <input type="number" ng-model="form.number1">
      </form>
      <form ng-submit="updateItem(item)">
          Update Item
          <input type="text" ng-model="form.text2"
      </form>
  </div>
  `
});
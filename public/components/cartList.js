function CartList(CartService) {
  const ctrl = this;

ctrl.addItem = (addedProduct, totalPrice, updateQuantity) => {
    let addedItem = {
        product: addedProduct,
        price: totalPrice,
        quantity: updateQuantity
    }
    CartService.addItem(addedItem)
        .then( (data) => {
            ctrl.cartData = data;
        })
}

ctrl.removeItem = (item) => {
    CartListService.removeItem(item)
        .then( (data) => {
            ctrl.cartData = data;
        })
}

ctrl.updateItem = (item) => {
    CartService.updateItem(item)
        .then( (data) => {
            ctrl.cartData = data;
        })
    }
}

angular
.module('CartApp')
.component('cartList', {
  controller: cartList,
  template:
  `

    <div class="container">
        <form name="shoppingFrm" ng-submit="addItem()">
            <input type="text" ng-model="addedProduct" name="newproduct" placeholder="Item" required /><br></br>
            <input type="text" ng-model="totalPrice" name="newprice" placeholder="$0.00" required /><br></br>
            <input type="text" ng-model="updatedQuantity" name="newquantity" placeholder="Quantity" required /><br></br>
    
            <div class="buttonClass">
                <button class="addToCart" ng-click="addItem()">Submit</button> 
            </div>

        <ol>
            <li ng-repeat="shopping in shoppingss | filter:test">
                <label ng-click="cart.deleted = !cart.deleted">
                    <span ng-class="{ deleted: cart.deleted }">{{ shopping.item }} </span>
                    <button class="delete" ng-submit="removeItem($index)">X</button>
                </label>
            </li>
        </ol>   
        </form>
    </div>


  `
})
Server.js
route - cartItems.js
package.json -- npm init
cartData.js -- array


AFTER­HOURS EXPRESS LAB 1

(Note: This is Full-Time Express Lab Part 1 without the Angular front-end. The Angular front-end is added in Express Exercise 1.)

Task: Build a REST API with an Express server. Create a module that contains routes for your front-end to communicate with. Test the endpoints with Postman.

What does the application do?

1. The REST API provides access to an array of shopping cart items.
2. The API will now have routes for GET, POST, PUT, and DELETE which will allow our front-end to communicate with our server. Each route will be handling the following functionality:
        a. GET /cart‑items: returns a JSON array of all items
        b. POST /cart‑items: for now, log the body to the console. (later, this will add a new item to the list)
        c. PUT /cart‑items/_ID_: for now, log the _ID_ URL param and the body to the console. (later, this will replace an item in the list)
        d. DELETE /cart‑items/_ID_: for now, log the _ID_ URL param to the console. (later, this will delete an item from the list.)

Build Specifications:

1. Use Express to create your server.
2. Require the module that will contain the routes you have created.
3. Start your server out with a hard-coded array of cart items, each including id, product, price, and quantity.
4. Test your endpoints using Postman.

Bonus:
1. Modify your POST endpoint to add an item to the array.
2. Modify your DELETE endpoint to remove an item from the array, based on the ID.
3. Modify your PUT endpoint to replace an item in the array, based on the ID.



EXPRESS EXERCISE 1

Task: Continuing from Express Lab 1, add a front-end to display the shopping cart items from your back-end API.

What does the application do?

    When the user visits /index.html, an AngularJS application is displayed, which fetches the shopping cart items from the API and displays them beautifully.

Build Specifications:

Server Side
1. Create a public folder that will house your front-end files. Adjust the server.js file accordingly to ensure Express is going to be using the public folder.

Client (Angular) Side
1. Build an Angular app within the public folder.
2. Create a CartService in Angular. Give it a getAllItems() method that uses $http to make a GET request to your /cart-items API.
3. Display the cart items from the service on the page.
4. For this part of the exercise, we do NOT yet need to handle POST, PUT, and DELETE on the Angular side


FULL­STACK EXPRESS LAB PART 2

Task: Create a database for your shopping cart. Build out the front end functionality.

What does the application do?
1. The application will now have a consistent database to hold and retrieve information from, allowing the user to keep their shopping cart.
2. The Angular application will allow users to add items, remove items, and update the quantity of an item.

Build Specifications:

Server Side
1. In pgAdmin, create a database called “ExpressShopDB” and a table called “ShoppingCart”. The table will have columns: id, product, price, and quantity.
2. Add the JavaScript with pg-node that will contain all of the information allowing the server to communicate with the database.
3. Adjust your GET, POST, PUT, and DELETE requests in your routes module to include the appropriate queries for each of the four requests.
4. Test your endpoints with Postman to make sure the routing is set up.

Client (Angular) Side
5. Update the CartService to call all four of your API endpoints. Add the methods addItem(item), removeItem(id), and updateItem(item).
6. Expand the UI to handle each of these new operations.
    a. Submit the form to add an item.
    b. Click the “x” to remove an item.
    c. Change the quantity.
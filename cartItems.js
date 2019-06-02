const express = require("express");
const cartItems = express.Router();
//const cartData = require('./cartData');

cartItems.get('/', (req, res) => {
   res.send(cartData);
});

    // accept POST request at URI: /cartItems
    cartItems.post("/cartItems", (req, res) => {
        console.log(req.body); // <-- this is the data that has been extracted from the reque
        res.send("Adding an item..");
        });


    cartItems.put("/cartItems/:id", (req, res) => {
        console.log(req.params.id); // <-- params for the URL
        res.send("Got for a specific id: " + req.params.id);
        });


    // accept DELETE request at URI: /cartItems
cartItems.delete("/cartItems/:id", (req, res) => {
    console.log(req.params.id); // <-- params for the URL
    res.send("Deleting an item..");
});



module.exports = cartItems;





// cartItems.post("/cartItems", (req, res) => {
//     // console.log(req.body);
//     res.send(cartData);
// });
// // accept PUT request at URI: /cartItems
// cartItems.put("/cartItems/:id", (req, res) => {
    
//     res.send("Updating a food for a specific id: " + req.params.id);
// });
// // accept DELETE request at URI: /cartItems
// cartItems.delete("/cartItems/:id", (req, res) => {
   
//     res.send("Deleting a food for a specific id: " + req.params.id);
// });



    
    // students.get("/cartItems/me", (req, res) => {
    //     console.log(req.body);
    //     res.send("Getting my foods...");
    // });
    //If a request was made to "/users/10", the code below would log the number 10 to the console.
    // array.get("/cart-items/:id", (req, res) => {
    //     console.log(req.params.id); // <-- params for the URL
    //     res.send("Got for a specific id: " + req.params.id);
    // });
    // accept POST request at URI: /cart-items

    
// app.use(express.static("./public"));


// // //will refer to the 
// // const cartItems = require("./cartItems");

// // //Convert params and body into useable JSON


// // app.use("/cartItems", cartItems);

// // app.get('/api', (req, res) => {
// //     res.send("Hello World");
// // });

// const port = 2000;

// //run the server!
// app.listen(port, () => console.log('listening on port: http://localhost:${port}'));

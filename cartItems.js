const express = require("express");
const cartItems = express.Router();
const cartData = require('./cartData');

cartItems.get('/', (req, res) => {
   res.send(cartData);
});

const pg = require("pg");
const pool = new pg.Pool({
    user: "ExpressShopDB",
    password: "Isla5313",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

cartItems.get("/cartItems", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then( (result) => {
        res.send(result.rows);
    })
});

cartItems.get('/cartItems/:id', (req, res) => {
    //getting the ID from the URL and setting it
    //to the array
    let index = req.params.id;

    //if exists inside of the array
    if(cartData[index]) {
        res.send(cartData[index]);
    } else {
        //Something went wrong
        res.send("Nope");
    }
});


cartItems.post("/cartItems", (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO shoppingcart (product, price, quantity)" +
    "VALUES($1::real, $2::text, $3::int)";
    let params = [data.product, data.price, data.quantity];
    pool.query(sql, params).then( (result) => {
        res.status(201);
        res.send('Updated Cart');
    });
});

cartItems.put("/cartItems/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let sql = "UPDATE shoppingcart SET product=$1::prodcut WHERE id=$2::id";
    let params = [data.name, id];

    pool.query(sql, params)
    .then( () => {
        res.send('Success');
    });
});

cartItems.delete("/cartItems/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let sql = "DELETE FROM shoppingcart WHERE id=$1::int"
    pool.query("DELETE FROM shoppingcart WHERE id=$2::id;")
    .then( (result) => {
        res.send(result.rows);
    })
})

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

  
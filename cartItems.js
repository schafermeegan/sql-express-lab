const express = require('express');

const cartItems = express.Router();

const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  password: "Isla5313",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});

cartItems.get("/", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then ( (results) => {
        res.send(results.rows);
    })
    .catch ( (err) => {
        res.send(err);
    })
});

cartItems.post("/", (req, res) => {
    let data = req.body;
    pool.query("INSERT INTO shoppingcart (product, price, count) values($1::text, $2::float, $3::int, $4::text)",[data.product, data.price, data.count])
    .then( () => {
        res.status(201);
        res.send(data.body);
    })
});

cartItems.put("/:id", (req, res) => {
    pool.query("UPDATE shoppingcart SET count=$1::int WHERE id=$2::int", [req.body.count, req.body.id])
    .then( () => {
        res.send("Updated");
    })
    .catch( (err) => {
        res.send(err);
    })
});

cartItems.delete("/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id])
    .then( () => {
        res.status(201);
        res.send("Deleted");
    })
});

module.exports = cartItems;

// const express = require("express");
// const cartItems = express.Router();
// //const cartData = require('./cartData');

// cartItems.get('/', (req, res) => {
//    res.send(cartData);
// });

//     // accept POST request at URI: /cartItems
//     cartItems.post("/cartItems", (req, res) => {
//         console.log(req.body); // <-- this is the data that has been extracted from the reque
//         res.send("Adding an item..");
//         });


//     cartItems.put("/cartItems/:id", (req, res) => {
//         console.log(req.params.id); // <-- params for the URL
//         res.send("Got for a specific id: " + req.params.id);
//         });


//     // accept DELETE request at URI: /cartItems
// cartItems.delete("/cartItems/:id", (req, res) => {
//     console.log(req.params.id); // <-- params for the URL
//     res.send("Deleting an item..");
// });



// module.exports = cartItems;


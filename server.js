const express = require('express');
const cartItems = require("./cartItems");
const app = express();

app.use(express.json());
app.use("/", cartItems);

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Isla5313",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

// app.use(express.static("./public"));
// app.use("/", cartItems);
app.get("/shoppingcart", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then( (result) => {
        res.send(result.rows);
    })
})



app.post("/shoppingcart", (req, res) => {
    let data = req.body;
    // let name = data.name;
    
    pool.query("INSERT INTO shoppingcart (product, price, quantity)" +
    "VALUES($1::varchar(20), $2::real, $3::smallint)",
    [data.product, data.price, data.quantity]
    )
    .then( () => {
        res.status(201);
        res.send('Updated Cart');
    })
})



app.put("/shoppingcart/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let sql = "UPDATE shoppingcart SET product=$1::prodcut WHERE id=$2::id";
    let params = [data.name, id];

    pool.query(sql, params)
    .then( () => {
        res.send('Success');
    })
})



app.delete("/shoppingcart", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$2::id;")
    .then( (result) => {
        res.send(result.rows);
    })
})

// //will refer to the 
// const cartItems = require("./cartItems");

// //Convert params and body into useable JSON


// app.use("/cartItems", cartItems);

// app.get('/api', (req, res) => {
//     res.send("Hello World");
// });

// const port = 2000;

// run the server!
app.listen(port, () => console.log('listening on port: http://localhost:${port}'));

//use this for heroku
// const port = process.env.PORT || 5000;





// module.exports = cartItems;



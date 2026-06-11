const express = require("express");
const app = express();
const db = require("./db/db.js")
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"]
}));

//All products

app.get("/products", (req, res) => {
    res.json(db);
});

app.get("/products/:id", (req, res) => {
    const producto = db.filter(p => p.id == req.params.id);
    res.json(producto);
})

app.listen(5000, () => {
    console.log("Server running in port 5000");
})
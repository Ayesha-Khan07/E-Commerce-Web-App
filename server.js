const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});


// Fetch products from Fake Store API
app.get("/api/products", async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

let cart = []; // Temporary storage

app.post("/api/cart/add", (req, res) => {
    const { product } = req.body;
    cart.push(product);
    res.json({ message: "Product added to cart", cart });
});

app.get("/api/cart", (req, res) => {
    res.json(cart);
});

app.post("/api/cart/remove", (req, res) => {
    const { productId } = req.body;
    cart = cart.filter((item) => item.id !== productId);
    res.json({ message: "Product removed", cart });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import "./styles/home.css";
import "./styles/search.css";
import ProductCards from "./ProductCards";

export default function ProductsList({ products,addToCart }) {
    const noProductsStyle = {
        fontWeight: "bold",
        fontSize:'large',
        paddingTop: "50px", 
        marginTop: "50px",
        marginBottom: "80px",
        textAlign: "center",   
    }
    
    return (
        <div className="container">
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => <ProductCards key={product.id} product={product} addToCart={addToCart} />)
                ) : (
                   <p style={noProductsStyle}> No products found.</p>
                )}
            </div>
        </div>
    );
}

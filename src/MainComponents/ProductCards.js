import './styles/home.css';
import './styles/search.css';

export default function ProductCards({ product, addToCart }){
    const addToCartStyle = {
        backgroundColor: '#f5c61d',
        color:'#000',
        border: 'none',
        fontSize:'large',
        fontWeight: 'bold',
    };
    return (
        <div className="col-md-4">
          <div className="card product-card">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">Price: ${product.price}</p>
              <button className="btn btn-mustard w-100" style={addToCartStyle} onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
    );
}
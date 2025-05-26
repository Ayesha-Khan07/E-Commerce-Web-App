import React from "react";

export default function Filter({ filters, setFilters, filterProducts }) {
    const FilterStyle = {
        backgroundColor: '#f5c61d',
        color:'#000',
        border: 'none',
        fontSize:'large',
        fontWeight: 'bold',
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
        <em>
        <h3 style={{ fontWeight: "bold", fontSize: "28px", paddingTop:"20px", marginTop: "20px", textAlign:"center", textDecoration:"underline", paddingBottom:"25px" }}>Search Products</h3>
        </em>
      <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <label className="form-label fw-bold">Category</label>
                    <select
                        className="form-select"
                        name="category"
                        value={filters.category}
                        onChange={handleChange}>   

                        <option value="all">All Categories</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label className="form-label fw-bold">Min Price</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Min Price"
	                    name="minPrice"
                        value={filters.minPrice}
                       onChange={handleChange}
                    />
                </div>

                <div className="col-md-3">
                    <label className="form-label fw-bold">Max Price</label>
                    <input
                        type="number"
                        className="form-control"
	                    name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-2 d-flex align-items-end">
                    <button className="btn btn-lg w-100 fw-bold" style={FilterStyle} onClick={filterProducts}>
                         Apply Filter
                    </button>
                </div>
            </div>
        </div>
</div>
  );
}

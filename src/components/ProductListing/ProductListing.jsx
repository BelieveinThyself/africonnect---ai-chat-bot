import React, { useState } from 'react';
import { ArrowLeft, Plus, Filter, MoreVertical, X, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProductListing.css';

// Asset Imports
import cashewImg from '../../assets/ProductListing/cashew.jpg';
import cocoaImg from '../../assets/ProductListing/cocoa-beans.jpg';
import cottonImg from '../../assets/ProductListing/cotton.png';
import gingerImg from '../../assets/ProductListing/ginger.jpg';
import sesameImg from '../../assets/ProductListing/sesame.jpg';
import sheaImg from '../../assets/ProductListing/shea-butter.png';

const ProductListing = () => {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 1, name: 'Premium Cocoa Beans', category: 'Agriculture', price: '$2,400/ton', origin: 'Ghana', stock: '50 Tons', img: cocoaImg },
    { id: 2, name: 'Raw Cashew Nuts', category: 'Nuts', price: '$1,200/ton', origin: 'Ivory Coast', stock: '120 Tons', img: cashewImg },
    { id: 3, name: 'Organic Cotton', category: 'Textiles', price: '$1,800/ton', origin: 'Benin', stock: '30 Tons', img: cottonImg },
    { id: 4, name: 'Dried Ginger', category: 'Spices', price: '$3,500/ton', origin: 'Nigeria', stock: '15 Tons', img: gingerImg },
    { id: 5, name: 'Sesame Seeds', category: 'Seeds', price: '$1,100/ton', origin: 'Ethiopia', stock: '80 Tons', img: sesameImg },
    { id: 6, name: 'Shea Butter', category: 'Processing', price: '$4,000/ton', origin: 'Mali', stock: '10 Tons', img: sheaImg },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '', category: '', price: '', origin: '', stock: '', img: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, img: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      img: formData.img || cocoaImg 
    };

    setProducts([newProduct, ...products]);
    setShowModal(false);
    setFormData({ name: '', category: '', price: '', origin: '', stock: '', img: null });
  };

  return (
    <div className="listing-container">
      <header className="listing-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h2>My Product Listings</h2>
        </div>
        <button className="add-product-btn" onClick={() => setShowModal(true)}>
          <Plus size={20} /> Add New Product
        </button>
      </header>

      <div className="filter-bar">
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
        </div>
        <button className="filter-btn">
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.img} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <div className="info-header">
                <h3>{product.name}</h3>
                <MoreVertical size={18} className="more-icon" />
              </div>
              <p className="category">{product.category}</p>
              <div className="details-row">
                <span className="origin">📍 {product.origin}</span>
                <span className="stock">{product.stock} available</span>
              </div>
              <div className="price-tag">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>List New Product</h3>
              <X className="close-icon" onClick={() => setShowModal(false)} />
            </div>
            
            <form onSubmit={handleAddProduct} className="product-form">
              <div className="input-group">
                <label>Product Name</label>
                <input type="text" name="name" placeholder="e.g. Arabica Coffee" required onChange={handleInputChange} />
              </div>
              
              <div className="input-group">
                <label>Category</label>
                <select name="category" required onChange={handleInputChange}>
                  <option value="">Select Category</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Nuts">Nuts</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Spices">Spices</option>
                  <option value="Processing">Processing</option>
                </select>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Price</label>
                  <input type="text" name="price" placeholder="$ per unit" required onChange={handleInputChange} />
                </div>
                <div className="input-group">
                  <label>Stock</label>
                  <input type="text" name="stock" placeholder="Quantity" required onChange={handleInputChange} />
                </div>
              </div>

              <div className="input-group">
                <label>Origin</label>
                <input type="text" name="origin" placeholder="Country/City" required onChange={handleInputChange} />
              </div>
              
              <div className="file-upload-box">
                <label htmlFor="file-input" className="file-label">
                  <Camera size={20} />
                  <span>{formData.img ? "Image Selected" : "Upload Product Image"}</span>
                </label>
                <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} hidden />
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="save-btn">Post Listing</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
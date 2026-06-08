

import { useState } from 'react';
import './RFQPage.css';

export default function RFQPage() {
  const [form, setForm] = useState({
    category: '',
    commodity: '',
    quantity: '',
    unit: 'QTY',
    delivery: '',
    price: '',
    specs: ''
  });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RFQ submitted:', form);
    const matches = form.category ? 2 : 0;
    alert(`RFQ sent to ${matches} suppliers!`);
  };

  return (
    <div className="rfq-container">
      <div className="rfq-header">
        <h2>Request for Quotation</h2>
        <p>Connect directly with verified suppliers across the continent. Provide detailed specifications to receive accurate competitive pricing for your raw material requirements.</p>
      </div>

      <form className="rfq-form" onSubmit={handleSubmit}>
        
        <label>Product Category
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Minerals">Minerals</option>
            <option value="Textiles">Textiles</option>
          </select>
        </label>

        <label>Commodity Type
          <input 
            type="text" 
            name="commodity" 
            placeholder="e.g. Cocoa, millet, cashew" 
            value={form.commodity} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>Quantity Required
          <div className="qty-row">
            <input 
              type="number" 
              name="quantity" 
              placeholder="0.00" 
              value={form.quantity} 
              onChange={handleChange} 
              required 
            />
            <select name="unit" value={form.unit} onChange={handleChange}>
              <option>QTY</option>
              <option>KG</option>
              <option>TON</option>
            </select>
          </div>
        </label>

        <label>Delivery Timeline
          <input 
            type="date" 
            name="delivery" 
            value={form.delivery} 
            onChange={handleChange} 
          />
        </label>

        <label>Target Price (Optional)
          <div className="price-row">
            <span className="currency">USD</span>
            <input 
              type="number" 
              name="price" 
              placeholder="Per Unit Price" 
              value={form.price} 
              onChange={handleChange} 
            />
          </div>
        </label>

        <label>Additional Specifications & Requirements
          <textarea 
            name="specs" 
            rows="5"
            placeholder="Describe quality grades, packaging requirements, port of discharge, or required certifications..."
            value={form.specs} 
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="rfq-submit">Submit RFQ →</button>
      </form>
    </div>
  );
}
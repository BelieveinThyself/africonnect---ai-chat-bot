import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, Package, Layers, DollarSign } from 'lucide-react';

const NewProductFormTab = ({ onCancel }) => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Agriculture',
    stock: '',
    moq: '',
    price: '',
    imagePreview: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, imagePreview: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="tab-pane-layout max-width-form">
      
      {/* View Back Title Nav Bar Strip */}
      <div className="view-action-header-row" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={onCancel}>
          <ArrowLeft size={20} className="text-black" />
          <div>
            <h2>Publish New B2B Product Line</h2>
            <p>Configure regional delivery metrics, stock inventory margins, and product images.</p>
          </div>
        </div>
      </div>

      <div className="profile-dashboard-layout-grid" style={{ marginTop: '16px' }}>
        
        {/* Left Form Panel */}
        <form className="profile-settings-form-wrapper" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field-item">
            <label>Product Common Title</label>
            <input type="text" name="name" placeholder="e.g., Organic Ground Cashews" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-field-item">
            <label>Market Classification Group</label>
            <select name="category" value={formData.category} onChange={handleChange} className="form-input" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
              <option value="Agriculture">Agriculture & Fresh Food Produce</option>
              <option value="Grains">Grains & Raw Seeds</option>
              <option value="Minerals">Raw Processing Materials</option>
            </select>
          </div>

          <div className="form-input-group-row">
            <div className="form-field-item">
              <label>Current Available Stock</label>
              <input type="text" name="stock" placeholder="e.g., 8,500 KG" value={formData.stock} onChange={handleChange} />
            </div>
            <div className="form-field-item">
              <label>Minimum Order Cap (MOQ)</label>
              <input type="text" name="moq" placeholder="e.g., 500 KG" value={formData.moq} onChange={handleChange} />
            </div>
          </div>

          <div className="form-field-item">
            <label>Target Unit Valuation Pricing</label>
            <input type="text" name="price" placeholder="e.g., $4.50 / QTY" value={formData.price} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button type="button" className="edit-mini-btn" onClick={onCancel} style={{ padding: '12px 24px', fontWeight: 700 }}>Cancel Changes</button>
            <button type="submit" className="add-product-badge-btn large-btn" style={{ borderRadius: '8px' }}>Publish Product Live</button>
          </div>
        </form>

        {/* Right Asset Sidebar */}
        <div className="profile-identity-card-sidebar">
          <div className="avatar-uploader-center" style={{ width: '100%', boxSizing: 'border-box' }} onClick={() => fileInputRef.current.click()}>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifycenter: 'center', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
              {formData.imagePreview ? (
                <img src={formData.imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '20px', textAlign: 'center', margin: '0 auto' }}>
                  <Upload size={32} color="#64748b" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Upload Product Picture</span>
                </div>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
            <button className="edit-mini-btn" style={{ marginTop: '16px', width: '100%' }}>Select Graphic File</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewProductFormTab;
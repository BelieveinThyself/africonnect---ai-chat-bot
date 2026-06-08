import React from 'react';
import { Plus, Search, Edit3, Trash2 } from 'lucide-react';
import cocoaImg from '../../assets/LandingPage/cocoa.png';
import cashewImg from '../../assets/LandingPage/cashew.jpg';

const MyProductsTab = ({ onNavigateToCreate }) => {
  const inventoryItems = [
    { id: 1, name: "Premium Cocoa Beans", category: "Agriculture", stock: "14,500 KG", moq: "500 KG", price: "$8.20/KG", img: cocoaImg, status: "In Stock" },
    { id: 2, name: "Raw Organic Cashew Nuts", category: "Agriculture", stock: "8,000 KG", moq: "1,000 KG", price: "$4.50/KG", img: cashewImg, status: "In Stock" }
  ];

  return (
    <div className="tab-pane-layout">
      <div className="view-action-header-row">
        <div>
          <h2>Product Inventory Management</h2>
          <p>Update, review, and manage your published B2B market commodities.</p>
        </div>
        {/* ✅ Calls the layout handler passed down from SupplierDashboard page */}
        <button className="add-product-badge-btn large-btn" onClick={onNavigateToCreate}>
          <Plus size={18} />
          <span>Publish New Product</span>
        </button>
      </div>

      <div className="filter-utilities-strip">
        <div className="util-search-input-box">
          <Search size={16} />
          <input type="text" placeholder="Search product line..." />
        </div>
      </div>

      <div className="table-responsive-wrapper">
        <table className="rfq-dashboard-table">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>MOQ</th>
              <th>Unit Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="product-table-identity-cell">
                    <img src={item.img} alt={item.name} className="mini-table-thumb" />
                    <span className="product-cell-bold-title">{item.name}</span>
                  </div>
                </td>
                <td className="buyer-cell-txt">{item.category}</td>
                <td className="volume-cell-txt">{item.stock}</td>
                <td className="volume-cell-txt">{item.moq}</td>
                <td className="volume-cell-txt text-green" style={{ fontWeight: 700 }}>{item.price}</td>
                <td>
                  <span className="status-badge status-instock">{item.status}</span>
                </td>
                <td>
                  <div className="table-actions-flex">
                    <button className="edit-mini-btn"><Edit3 size={14} /></button>
                    <button className="edit-mini-btn delete-accent"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProductsTab;
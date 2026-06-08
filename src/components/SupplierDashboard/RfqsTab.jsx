import React from 'react';
import { Search, FileCheck, Eye } from 'lucide-react';

const RfqsTab = () => {
  const rfqDatabase = [
    { id: "RFQ-08215", material: "Premium Cocoa Beans", buyer: "Swiss Trust Bank", volume: "25 KG", date: "May 30, 2026", status: "New Request", statusClass: "rfq-new" },
    { id: "RFQ-08194", material: "Raw Cashew Nuts", buyer: "Global Foods Inc.", volume: "450 MT", date: "May 29, 2026", status: "New Request", statusClass: "rfq-new" },
    { id: "RFQ-07992", material: "High-Grade Copper Ore", buyer: "Shenzhen Metals Corp", volume: "2,000 MT", date: "May 25, 2026", status: "Negotiating", statusClass: "rfq-negotiating" },
    { id: "RFQ-07611", material: "Fine Organic Cotton Yarn", buyer: "Cairo Textiles Co.", volume: "15,000 KG", date: "May 18, 2026", status: "Closed", statusClass: "rfq-closed" }
  ];

  return (
    <div className="tab-pane-layout">
      <div className="view-action-header-row">
        <div>
          <h2>Requests for Quotes (RFQs)</h2>
          <p>Review requirements, inspect matching requests, and issue counter-offers.</p>
        </div>
      </div>

      <div className="filter-utilities-strip">
        <div className="util-search-input-box">
          <Search size={16} />
          <input type="text" placeholder="Search RFQ reference ID or material..." />
        </div>
      </div>

      <div className="inventory-list-table-container">
        <table className="rfq-dashboard-table">
          <thead>
            <tr>
              <th>RFQ Reference</th>
              <th>Target Material</th>
              <th>Buyer Entity</th>
              <th>Requested Volume</th>
              <th>Date Received</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rfqDatabase.map((rfq) => (
              <tr key={rfq.id}>
                <td style={{fontWeight: 700, color: '#1a33e6'}}>{rfq.id}</td>
                <td className="product-cell-bold-title">{rfq.material}</td>
                <td className="buyer-cell-txt">{rfq.buyer}</td>
                <td className="volume-cell-txt">{rfq.volume}</td>
                <td className="volume-cell-txt">{rfq.date}</td>
                <td>
                  <span className={`rfq-status-pill ${rfq.statusClass}`}>{rfq.status}</span>
                </td>
                <td>
                  {rfq.status === 'Closed' ? (
                    <button className="edit-mini-btn" disabled style={{opacity: 0.5}}><Eye size={14} /></button>
                  ) : (
                    <button className="rfq-action-respond-btn flex-btn">
                      <FileCheck size={14} />
                      <span>Respond</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RfqsTab;
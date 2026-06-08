import React from 'react';
import { ShieldCheck, TrendingUp, MessageSquare, Layers, Plus, Edit2 } from 'lucide-react';
import cocoaImg from '../../assets/LandingPage/cocoa.png';
import cashewImg from '../../assets/LandingPage/cashew.jpg';
import supplierAvatar from '../../assets/supplieravator.png';

const OverviewTab = () => {
  const productsPreview = [
    {
      id: 1,
      name: "Premium Cocoa Beans",
      moq: "500",
      price: "$8,200 / QTY",
      status: "In Stock",
      statusClass: "status-instock",
      img: cocoaImg
    },
    {
      id: 2,
      name: "Grade A millet",
      desc: "Grade A non-GMO millet",
      moq: "1,200",
      price: "$280 / QTY",
      status: "Low Stock",
      statusClass: "status-lowstock",
      img: cashewImg
    }
  ];

  const recentRfqs = [
    {
      id: "RFQ-08215",
      details: "Premium cocoa",
      time: "2h ago",
      buyer: "Swiss Trust Bank",
      volume: "25 KG",
      status: "New Request",
      statusClass: "rfq-new"
    },
    {
      id: "RFQ-08194",
      details: "Raw Cashew Nuts",
      time: "1h ago",
      buyer: "Global Foods Inc.",
      volume: "450 MT",
      status: "New Request",
      statusClass: "rfq-new"
    },
    {
      id: "RFQ-07992",
      details: "High-Grade Copper Ore",
      time: "3d ago",
      buyer: "Shenzhen Metals",
      volume: "2,000 MT",
      status: "NEGOTIATING",
      statusClass: "rfq-negotiating"
    }
  ];

  const mockChats = [
    {
      id: 1,
      name: "David Chen",
      company: "SHENZHEN METALS",
      text: "We are reviewing your last quote for the Copper Ore. Can you provide...",
      time: "14:22",
      badge: true
    },
    {
      id: 2,
      name: "Sarah Miller",
      company: "GLOBAL FOODS INC.",
      text: "Thank you for the document upload. We will process it within...",
      time: "Yesterday"
    }
  ];

  return (
    <div className="tab-content-wrapper">
      {/* 1. Verification Alert Banner */}
      <div className="verification-banner">
        <div className="banner-left">
          <ShieldCheck color="#FF3B30" size={32} strokeWidth={2.5} className="banner-verify-icon" />
          <div>
            <h4>Complete Your Verification</h4>
            <p>Unlock the "Verified" badge to build buyer trust and increase your bid visibility.</p>
          </div>
        </div>
        <button className="banner-upload-btn">Upload Documents</button>
      </div>

      {/* 2. Analytics Mini-Grid */}
      <div className="analytics-summary-grid">
        <div className="metric-card">
          <div className="metric-card-header">
            <span className="metric-title">Active RFQs</span>
            <TrendingUp size={20} className="text-green" />
          </div>
          <h3>14</h3>
          <span className="metric-trend text-green">↑ 12% from last month</span>
        </div>

        <div className="metric-card">
          <div className="metric-card-header">
            <span className="metric-title">Unread Messages</span>
            <MessageSquare size={20} className="text-orange" />
          </div>
          <h3>08</h3>
          <span className="metric-trend text-orange">New request from 3 buyers</span>
        </div>

        <div className="metric-card">
          <div className="metric-card-header">
            <span className="metric-title">Total Products</span>
            <Layers size={20} className="text-blue" />
          </div>
          <h3>32</h3>
          <span className="metric-trend text-red">4 items low on stock</span>
        </div>
      </div>

      {/* 3. Products + Chats Row */}
      <div className="overview-grid-row">
        <div className="grid-main-column">
          <section className="dashboard-block-section block-blue">
            <div className="block-section-header">
              <h3>My Products</h3>
              <button className="add-product-badge-btn">
                <Plus size={16} />
                <span>Add new product</span>
              </button>
            </div>

            <div className="products-preview-flex">
              {productsPreview.map((prod) => (
                <div key={prod.id} className="inventory-preview-card">
                  <div className="card-image-box">
                    <img src={prod.img} alt={prod.name} />
                  </div>
                  <div className="card-info-box">
                    <h4>{prod.name}</h4>
                    {prod.desc && <p className="product-desc-sub">{prod.desc}</p>}
                    <div className="card-pricing-row">
                      <div>
                        <span className="info-lbl">MOQ</span>
                        <span className="info-val">{prod.moq}</span>
                      </div>
                      <div>
                        <span className="info-lbl text-red">PRICE</span>
                        <span className="info-val text-green">{prod.price}</span>
                      </div>
                    </div>
                    <div className="card-footer-action-row">
                      <span className={`status-badge ${prod.statusClass}`}>{prod.status}</span>
                      <button className="edit-mini-btn"><Edit2 size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="block-section-footer">
              <button className="footer-view-all-btn">View All 32 Products</button>
            </div>
          </section>
        </div>

        <div className="grid-side-column">
          <div className="dashboard-block-section block-gray-chat">
            <div className="block-section-header">
              <div className="chat-header-title-row">
                <h3>Recent Chats</h3>
                <span className="chat-notification-count-badge">2 New</span>
              </div>
            </div>
            <div className="chats-widget-list-stack">
              {mockChats.map((chat) => (
                <div key={chat.id} className="widget-chat-row-item">
                  <div className="chat-item-avatar-wrapper">
                    <img src={supplierAvatar} alt={chat.name} className="chat-row-avatar" />
                    {chat.badge && <span className="active-online-dot"></span>}
                  </div>
                  <div className="chat-item-body-content">
                    <div className="chat-row-top-meta">
                      <h4>{chat.name}</h4>
                      <span className="chat-row-timestamp">{chat.time}</span>
                    </div>
                    <span className="chat-row-company-lbl">{chat.company}</span>
                    <p className="chat-row-snippet-text">{chat.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="block-section-footer">
              <button className="footer-view-all-btn chat-center-btn">Open Message Center</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Recent RFQs Section */}
      <section className="dashboard-block-section block-magenta">
        <div className="block-section-header">
          <h3>Recent RFQs</h3>
        </div>
        <div className="table-responsive-wrapper">
          <table className="rfq-dashboard-table">
            <thead>
              <tr>
                <th>Inquiry Details</th>
                <th>Buyer</th>
                <th>Volume</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentRfqs.map((rfq) => (
                <tr key={rfq.id}>
                  <td>
                    <div className="rfq-title-cell">
                      <span className="rfq-main-item">{rfq.details}</span>
                      <span className="rfq-sub-meta">{rfq.id} • {rfq.time}</span>
                    </div>
                  </td>
                  <td className="buyer-cell-txt">{rfq.buyer}</td>
                  <td className="volume-cell-txt">{rfq.volume}</td>
                  <td>
                    <span className={`rfq-status-pill ${rfq.statusClass}`}>{rfq.status}</span>
                  </td>
                  <td>
                    <button className="rfq-action-respond-btn">Respond</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;
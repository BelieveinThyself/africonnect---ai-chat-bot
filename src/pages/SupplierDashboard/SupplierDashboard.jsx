import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { LayoutDashboard, Box, FileText, MessageSquare, User, LogOut, Search, Bell, Settings } from 'lucide-react';
import './SupplierDashboard.css';

import logoImg from '../../assets/LandingPage/logo.png';
import supplierAvatar from '../../assets/supplieravator.png';

// Tab Sub-Components
import OverviewTab from '../../components/SupplierDashboard/OverviewTab';
import MyProductsTab from '../../components/SupplierDashboard/MyProductsTab';
import RfqsTab from '../../components/SupplierDashboard/RfqsTab';
import MessagesTab from '../../components/SupplierDashboard/MessagesTab';
import ProfileTab from '../../components/SupplierDashboard/ProfileTab';
// ✅ Import the specialized form component we are creating in Step 3
import NewProductFormTab from '../../components/SupplierDashboard/NewProductFormTab';

const SupplierDashboard = () => {
  const navigate = useNavigate(); 
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'products':
        // ✅ Pass a direct navigation function handler so the button switches views safely
        return <MyProductsTab onNavigateToCreate={() => setActiveTab('new-product')} />;
      case 'rfqu':
        return <RfqsTab />;
      case 'messages':
        return <MessagesTab />;
      case 'profile':
        return <ProfileTab />;
      case 'new-product':
        // ✅ New dedicated sub-page layout view instance frame block mapping link
        return <NewProductFormTab onCancel={() => setActiveTab('products')} />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="dashboard-app-frame">
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo-block" onClick={() => navigate('/')}>
          <img src={logoImg} alt="Africonnect Logo" className="sidebar-logo-img" />
          <h2 className="logo-text"><span className="text-green">FRI</span><span className="text-black">CONNECT</span></h2>
        </div>
        <span className="sidebar-subtitle">Supplier Dashboard</span>

        <nav className="sidebar-nav-tree">
          <button className={`nav-item-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}><LayoutDashboard size={18} /><span>Overview</span></button>
          <button className={`nav-item-link ${activeTab === 'products' || activeTab === 'new-product' ? 'active' : ''}`} onClick={() => setActiveTab('products')}><Box size={18} /><span>My Products</span></button>
          <button className={`nav-item-link ${activeTab === 'rfqu' ? 'active' : ''}`} onClick={() => setActiveTab('rfqu')}><FileText size={18} /><span>RFQs</span></button>
          <button className={`nav-item-link ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}><MessageSquare size={18} /><span>Messages</span></button>
          <button className={`nav-item-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><User size={18} /><span>Profile</span></button>
        </nav>

        <div className="sidebar-footer-block">
          <button className="sidebar-logout-btn" onClick={() => navigate('/login')}><LogOut size={18} /><span>Log out</span></button>
        </div>
      </aside>

      <div className="dashboard-viewport-right">
        <header className="viewport-top-header">
          <div className="header-search-wrapper"><Search className="search-box-icon" size={18} /><input type="text" placeholder="Search Category" className="header-search-input" /></div>
          <div className="header-actions-wrapper">
            <button className="icon-badge-btn"><Bell size={20} /><span className="badge-dot"></span></button>
            <button className="icon-badge-btn"><Settings size={20} /></button>
            <div className="header-profile-pill"><img src={supplierAvatar} alt="Profile" className="user-pill-avatar" /><span className="user-pill-name">Ghana Ecofarm Ltd.</span></div>
          </div>
        </header>

        <main className="viewport-main-content">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default SupplierDashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingPage.css';

// ✅ Import Modal
import SearchModal from '../../components/SearchModal/SearchModal';

// Image Imports
import heroImg from '../../assets/LandingPage/hero-image.jpeg';
import cottonImg from '../../assets/LandingPage/cotton.png';
import cocoaTree from '../../assets/LandingPage/cocoa-tree.png';
import sweater from '../../assets/LandingPage/sweater.jpeg';
import wool from '../../assets/LandingPage/wool.jpeg';
import woolTree from '../../assets/LandingPage/wool-tree.png';
import cashew from '../../assets/LandingPage/cashew.jpg';
import cocoa from '../../assets/LandingPage/cocoa.png';
// ✅ New Logo Import
import logoImg from '../../assets/LandingPage/logo.png';

const LandingPage = () => {
  const navigate = useNavigate(); // Hooks up your path router switcher
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (term) => {
    console.log("Search term:", term);
    setIsModalOpen(false);
  };

  const popularMaterials = [
    { name: 'cashew nuts', img: cashew },
    { name: 'cocoa', img: cocoa },
    { name: 'cotton', img: cottonImg }
  ];

  return (
    <>
      <div className="landing-container">
        <SearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSearchResults={handleSearch}
        />

        {/* 1. Navbar with Functional Navigation Links */}
        <nav className="navbar">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logoImg} alt="Africonnect Logo" className="logo-icon-img" />
            <h1 className="logo-text">
              <span className="text-green">FRI</span>
              <span className="text-black">CONNECT</span>
            </h1>
          </div>

          <div className="nav-links">
            <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
            
            {/* ✅ FIXED: "Product" and "Buy" now route seamlessly to /marketplace */}
            <span onClick={() => navigate('/marketplace')} style={{ cursor: 'pointer' }}>Product</span>
            <span onClick={() => navigate('/marketplace')} style={{ cursor: 'pointer' }}>Buy</span>
            
            {/* ✅ FIXED: Button matches Figma text label "Signup" and links to /signup */}
            <button className="nav-search-btn" onClick={() => navigate('/signup')}>
              Signup
            </button>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <header className="hero" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="hero-content">
            <h2 className="hero-title">Source Raw materials Across <span className="text-green">Africa,</span><br />Faster, Cheaper, And <span className="text-green">Smarter</span></h2>
            <p className="hero-subtitle">Connect with trusted suppliers, compare prices, and source raw materials across the continent.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Search Materials</button>
              
              {/* ✅ FIXED: Routes to your exact lowercase /signup path */}
              <button className="btn-primary btn-spacer" onClick={() => navigate('/signup')}>
                Become a supplier
              </button>
            </div>
          </div>
        </header>

        {/* 3. Statistics Section */}
        <section className="stats-grid">
          <div className="stat-card">5000+ Suppliers</div>
          <div className="stat-card">20+ African countries</div>
          <div className="stat-card">Verified Suppliers</div>
          <div className="stat-card">Transparent Pricing</div>
        </section>

        {/* 4. Sourcing Huddle (Mosaic) */}
        <section className="sourcing-huddle">
          <div className="huddle-text">
            <h3>Sourcing <span className="text-green">raw</span> materials shouldn't be a hurdle</h3>
          </div>
          <div className="huddle-grid">
            <img src={cocoaTree} alt="Cocoa tree" className="huddle-img" />
            <img src={sweater} alt="Sweater" className="huddle-img" />
            <img src={wool} alt="Wool" className="huddle-img" />
            <img src={woolTree} alt="Wool tree" className="huddle-img" />
          </div>
        </section>

        {/* 5. Popular Materials */}
        <section className="materials-section">
          <h3 className="section-title">Popular materials on Africonnect</h3>
          <div className="material-list">
            {popularMaterials.map((item) => (
              /* ✅ FIXED: Card clicks take users directly to your marketplace page */
              <div key={item.name} className="material-item" onClick={() => navigate('/marketplace')} style={{ cursor: 'pointer' }}>
                <img src={item.img} alt={item.name} className="material-thumb" />
                <span className="material-name">{item.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6 & 7. Info Sections */}
        <section className="info-section">
          <h3 className="section-title">About <span className="text-green">Africonnect</span></h3>
          <p className="lorem-text">Africonnect is revolutionizing how businesses source raw materials by leveraging geospatial machine learning to find the most efficient, cost-effective, and reliable suppliers across the African continent.</p>
        </section>

        <section className="info-section">
          <h3 className="section-title">Why choose <span className="text-green">Africonnect</span></h3>
          <ul className="check-list">
            <li>Verified supplier network</li>
            <li>Lower sourcing cost</li>
            <li>Cross-border access</li>
            <li>Faster procurement</li>
          </ul>
        </section>
      </div>

      {/* 8. Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <img src={logoImg} alt="Africonnect Logo" className="logo-icon-img-small" />
              <h2 className="logo-text">
                <span className="text-green">FRI</span>
                <span className="text-black">CONNECT</span>
              </h2>
            </div>
            <p>Connecting African businesses with verified raw material suppliers.</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><span onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>Search & Buy</span></li>
                <li><span onClick={() => navigate('/marketplace')} style={{ cursor: 'pointer' }}>Find Suppliers</span></li>
                <li><span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>List Your Products</span></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Africonnect</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#tos">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© AFRICONNECT 2026. All rights reserved.</p>
          
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
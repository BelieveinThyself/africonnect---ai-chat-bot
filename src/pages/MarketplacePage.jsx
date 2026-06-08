import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarketplaceGrid from '../components/MarketplaceGrid';

function MarketplacePage(){
  const navigate = useNavigate(); // ✅ Initializes the navigation engine

  return(
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Empowering African Industry through sustainable innovation & streamlined production.</h1>
        <p>The premium B2B gateway connecting global institutional buyers with verified, high-capacity African producers.</p>
        
        <div className="badge">
          <span>500+</span> Verified Industrial Suppliers
        </div>
        
        <div className="hero-img">
          <img src="/assets/hero-cocoa.jpg" alt="Cocoa farm"/>
        </div>
      </section>

      {/* MARKETPLACE GRID */}
      {/* ✅ Passing the function down as a prop named onInquiryClick */}
      <MarketplaceGrid onInquiryClick={() => navigate('/rfq')} />
    </div>
  );
}

export default MarketplacePage;
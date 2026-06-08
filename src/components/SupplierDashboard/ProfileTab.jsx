import React from 'react';
import { Save, Building, ShieldAlert } from 'lucide-react';
import supplierAvatar from '../../assets/supplieravator.png';

const ProfileTab = () => {
  return (
    <div className="tab-pane-layout max-width-form">
      <div className="view-action-header-row">
        <div>
          <h2>Supplier Professional Profile</h2>
          <p>Modify public company data parameters visible to verified procurement officers.</p>
        </div>
      </div>

      <div className="profile-dashboard-layout-grid">
        <form className="profile-settings-form-wrapper" onSubmit={(e) => e.preventDefault()}>
          <div className="form-input-group-row">
            <div className="form-field-item">
              <label>Company Legal Corporate Name</label>
              <input type="text" defaultValue="Ghana Ecofarm Ltd." />
            </div>
            <div className="form-field-item">
              <label>Registration Reference Code</label>
              <input type="text" defaultValue="CR-GH-2026-991A" disabled style={{backgroundColor: '#f1f5f9', cursor: 'not-allowed'}} />
            </div>
          </div>

          <div className="form-field-item">
            <label>Business Description Summary</label>
            <textarea rows={4} defaultValue="Connecting African commercial markets with organically sourced raw food supplies, verified agricultural products, grains, and premium local ingredients." />
          </div>

          <div className="form-input-group-row">
            <div className="form-field-item">
              <label>Primary Operational Email Address</label>
              <input type="email" defaultValue="procurement@ghanaecofarm.com" />
            </div>
            <div className="form-field-item">
              <label>Telephone Line / WhatsApp</label>
              <input type="text" defaultValue="+233 24 123 4567" />
            </div>
          </div>

          <button type="submit" className="rfq-action-respond-btn flex-btn large-action-btn">
            <Save size={16} />
            <span>Save Profile Modifications</span>
          </button>
        </form>

        <div className="profile-identity-card-sidebar">
          <div className="avatar-uploader-center">
            <img src={supplierAvatar} alt="Current Corporate Branding Mark" className="uploader-preview-avatar" />
            <button className="edit-mini-btn" style={{marginTop: '12px'}}>Change Branding Mark</button>
          </div>
          
          <div className="verification-status-sidebar-box">
            <div className="status-title-row">
              <ShieldAlert size={18} color="#ef4444" />
              <span style={{fontWeight: 700}}>Account Unverified</span>
            </div>
            <p>Your business verification pipeline is pending document clearance. Upload regional certification papers to acquire an absolute priority badge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
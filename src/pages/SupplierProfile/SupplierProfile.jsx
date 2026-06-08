import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierProfile.css';

const SupplierProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [profile, setProfile] = useState({
    name: 'Kelvin Daniels',
    email: 'Kelvin.Daniels@gmail.com',
    gender: '',
    phone: '',
    region: '',
    avatar: null
  });

  const [isSaving, setIsSaving] = useState(false);

  // Function to handle saving data to a backend/local storage
  const saveChanges = async (updatedProfile) => {
    setIsSaving(true);
    
    // Simulate an API call
    console.log("Saving to database:", updatedProfile);
    
    setTimeout(() => {
      setIsSaving(false);
      console.log("Changes saved successfully!");
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Trigger save when user clicks away from a field
  const handleBlur = () => {
    saveChanges(profile);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedProfile = { ...profile, avatar: imageUrl };
      setProfile(updatedProfile);
      saveChanges(updatedProfile); // Save immediately after photo upload
    }
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="back-nav" onClick={() => navigate(-1)}>
          <span className="back-arrow">‹</span>
          <h2>Profile</h2>
        </div>

        <div className="avatar-upload" onClick={handleImageClick} style={{ cursor: 'pointer', position: 'relative' }}>
          <div className="avatar-circle">
            {profile.avatar ? (
              <img 
                src={profile.avatar} 
                alt="Profile Preview" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
              />
            ) : (
              <span>Add Image</span>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            style={{ display: 'none' }} 
          />
        </div>
        
        {/* Subtle Saving Indicator */}
        {isSaving && <p className="saving-text">Saving changes...</p>}
      </header>

      {/* Form Fields */}
      <div className="profile-form">
        <div className="form-group">
          <label>Name</label>
          <span className="value-text">{profile.name}</span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <span className="value-text">{profile.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select 
            id="gender"
            name="gender" 
            value={profile.gender} 
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            placeholder="+234 12345678" 
            value={profile.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">Country/Region</label>
          <input 
            type="text" 
            id="region"
            name="region"
            placeholder="City, Country" 
            value={profile.region}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
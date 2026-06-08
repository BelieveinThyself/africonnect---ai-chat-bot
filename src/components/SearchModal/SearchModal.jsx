import React, { useState } from 'react';
import './SearchModal.css';
import {supabase} from '../../supabase/supabaseClient'


const SearchModal = ({ isOpen, onClose, onSearchResults, isSearching}) =>{

  if (!isOpen) return null;
  const[term, setTerm] = useState('');
  const[resultMsg, setResultMsg] = useState('')
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!term.trim()) return;

  const { data, error } = await supabase
    .rpc('search_suppliers_by_material', { search_term: term });

  if (error) console.error(error);

  if (!data || data.length === 0) {
    setResultMsg(`No suppliers found for "${term}" within 100km`);
    onSearchResults([]);
  } else {
    setResultMsg(`Found ${data.length} supplier${data.length > 1 ? 's' : ''} for "${term}"`);
    onSearchResults(data);
  }

  onClose();
};
  

  const handleNearestSearch = () => {
    if (!term.trim()) return;
   
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log("Search term:",term)
      console.log("Lat:", latitude, "Lng", longitude)
      const { data, error } = await supabase.rpc('get_smart_suppliers', {
        user_lng: longitude,
        user_lat: latitude,
        search_category: term,
        radius_km: 100
      });

      console.log("Error:",error)
      console.log("Data:", data)
     
      if (!data || data.length === 0) {
        setResultMsg(`No suppliers found for "${term}" within 100km`)
        onSearchResults([])  // send empty array so parent clears old results
      } else {
        setResultMsg(`Found ${data.length} supplier${data.length > 1 ? 's' : ''} for "${term}"`)
        onSearchResults(data)
      }

      setTimeout(() => onClose(), 2000);
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Search Materials</h2>
        <p>Enter the raw material you are looking for:</p>
        {resultMsg && (
        <div className="result-message">{resultMsg}</div>
)}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. Timber, Copper, Cotton..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            autoFocus
          />
          <button type="submit" className="search-confirm-btn" disabled={isSearching}>
            {isSearching ? 'Searching...' : 'Find Suppliers'}
          </button>
          <button 
            type="button" 
            className="search-nearby-btn" 
            onClick={handleNearestSearch}
            disabled={isSearching || !term.trim()}
          >
            Find Nearest
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;


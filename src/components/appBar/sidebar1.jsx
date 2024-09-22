import React from 'react';
import './Sidebar.css';
import { FaChartBar, FaGlobe, FaLock, FaGem, FaShoppingCart, FaBell, FaGift, FaClipboard, FaCogs } from 'react-icons/fa'; // Using react-icons for simplicity

const Side_bar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon active">
        <FaChartBar />
      </div>
      <div className="sidebar-icon">
        <FaGlobe />
      </div>
      <div className="sidebar-icon">
        <FaLock />
      </div>
      <div className="sidebar-icon">
        <FaGem />
      </div>
      <div className="sidebar-icon">
        <FaShoppingCart />
      </div>
      <div className="sidebar-icon">
        <FaGift />
      </div>
      <div className="sidebar-icon">
        <FaClipboard />
      </div>
    </div>
  );
};

export default Side_bar;

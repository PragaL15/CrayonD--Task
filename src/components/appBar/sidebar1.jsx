import React from 'react';
import './Sidebar.css';
import { FaChartBar, FaGlobe, FaLock, FaGem, FaShoppingCart, FaBell, FaGift, FaClipboard, FaCogs } from 'react-icons/fa'; // Using react-icons for simplicity
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import DvrIcon from '@mui/icons-material/Dvr';
import logo from '../../assets/Nestle.jpg'
import icon from '../../assets/mainicon.png'
import { alignProperty } from '@mui/material/styles/cssUtils';
const imgStyle = {
  width: '55px',
  height: '70px',
  borderRadius: '5px',
  marginTop: '17px',
 
};

const iconStyle = {
  width:'80px',
  height:'70px',
  marginRight: '50px',
  marginBottom: '25px',
  marginTop:'1px',
}
const Side_bar = () => {
  return (
    <div className="sidebar">
      <img src={icon} style={iconStyle}/>
      <div className="sidebar-icon" >
        <DvrIcon  />
        <p className="icon-label">Dashboard</p>
      </div>
      <div className="sidebar-icon active">
        <ShoppingCartIcon />
        <p className="icon-label">sales</p>
      </div>
      <div className="sidebar-icon">
        <DescriptionIcon />
        <p className="icon-label">orders</p>
      </div>
      <div className="sidebar-icon">
        <AccountBoxIcon />
        <p className="icon-label">Customer</p>
      </div>
      <div className="sidebar-icon">
        <AddBusinessIcon />
        <p className="icon-label">Items</p>
      </div>
      <div className="sidebar-icon">
        <Inventory2Icon />
        <p className="icon-label">Inventory</p>
      </div>
      <div className="sidebar-icon">
        <AddAlertIcon/>
        <p className="icon-label">Alerts</p>
      </div>
      <img src={logo} alt="Logo" style={imgStyle} />;
    </div>
  );
};

export default Side_bar;

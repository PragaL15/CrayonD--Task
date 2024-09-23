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
  width: '70px',
  height: '80px',
  borderRadius: '5px',
};

const iconStyle = {
  width:'85px',
  height:'70px',
  marginRight: '50px',
}
const Side_bar = () => {
  return (
    <div className="sidebar">
      <img src={icon} style={iconStyle}/>
      <div className="sidebar-icon" >
        <DvrIcon />
      </div>
      <div className="sidebar-icon active">
        <ShoppingCartIcon />
      </div>
      <div className="sidebar-icon">
        <DescriptionIcon />
      </div>
      <div className="sidebar-icon">
        <AccountBoxIcon />
      </div>
      <div className="sidebar-icon">
        <AddBusinessIcon />
      </div>
      <div className="sidebar-icon">
        <Inventory2Icon />
      </div>
      <div className="sidebar-icon">
        <AddAlertIcon/>
      </div>
      <img src={logo} alt="Logo" style={imgStyle} />;
    </div>
  );
};

export default Side_bar;

import React, { useState } from 'react';
import PaymentCard from '../../components/input/Payment.jsx';
import SearchInputBox from '../../components/appBar/TopHead';
import Sidebar1 from '../../components/appBar/sidebar1.jsx';
import DogCard from '../../components/input/card1.jsx';
import TableCard1 from '../../components/input/tableCard.jsx';
import Catalog from '../../components/input/catlog';  
import '../../styles/cardPage.css';  
import CatalogPage from '../../components/input/catalogPage.jsx';

const CartPage = () => {
  const [showCatalog, setShowCatalog] = useState(false); 
  const handleButtonClick = () => {
    setShowCatalog((prevState) => !prevState); 
  };

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar1 />
      </div>
      <div className="content-container">
        <SearchInputBox onButtonClick={handleButtonClick} />
        <TableCard1 />
        {!showCatalog ? <PaymentCard /> : <CatalogPage />}  
        <DogCard />
      </div>
     
    </div>
  );
};

export default CartPage;

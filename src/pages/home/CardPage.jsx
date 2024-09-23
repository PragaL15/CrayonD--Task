import React, { useState } from 'react';
import PaymentCard from '../../components/input/Payment.jsx';
import SearchInputBox from '../../components/appBar/TopHead';  // Assuming this is the right import
import Sidebar1 from '../../components/appBar/sidebar1.jsx';
import DogCard from '../../components/input/card1.jsx';
import TableCard1 from '../../components/input/tableCard.jsx';
import Catalog from '../../components/input/catlog';  // The other component to display
import '../../styles/cardPage.css';  // Ensure CSS is imported if needed

const CartPage = () => {
  const [showCatalog, setShowCatalog] = useState(false);  // State to toggle between components

  // This function will be passed down to SearchInputBox to handle the button click
  const handleButtonClick = () => {
    setShowCatalog((prevState) => !prevState);  // Toggle the state
  };

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar1 />
      </div>
      <div className="content-container">
        {/* Pass handleButtonClick as a prop to SearchInputBox */}
        <SearchInputBox onButtonClick={handleButtonClick} />
        
        {/* Conditionally render components based on showCatalog state */}
        <TableCard1 />
        {!showCatalog ? <PaymentCard /> : <Catalog />}  {/* Default: PaymentCard, Toggled: Catalog */}
        <DogCard />
      </div>
    </div>
  );
};

export default CartPage;

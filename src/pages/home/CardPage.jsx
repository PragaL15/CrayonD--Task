import PaymentCard from '../../components/input/Payment.jsx';
import SearchInputBox from '../../components/appBar/TopHead';
import Sidebar1 from '../../components/appBar/sidebar1.jsx';
import DogCard from '../../components/input/card1.jsx';
import TableCard1 from '../../components/input/tableCard.jsx';
import '../../styles/cardPage.css';  // Ensure CSS is imported if needed

const CartPage = () => {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar1 />
      </div>
      <div className="content-container">
        <SearchInputBox />
        <TableCard1 /> 
        <PaymentCard />
        <DogCard />
      </div>
    </div>
  );
};

export default CartPage;

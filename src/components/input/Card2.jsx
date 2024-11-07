import React, { useState } from 'react';
const Variants = () => (
  <div>
    <h3>Variants</h3>
    <div>
      <input type="radio" id="large" name="size" value="Large" defaultChecked />
      <label htmlFor="large">Pizza (Large) - SAR 800.00</label>
    </div>
    <div>
      <input type="radio" id="medium" name="size" value="Medium" />
      <label htmlFor="medium">Pizza (Medium) - SAR 500.00</label>
    </div>
    <div>
      <input type="radio" id="small" name="size" value="Small" />
      <label htmlFor="small">Pizza (Small) - SAR 300.00</label>
    </div>
  </div>
);

const AddOns = () => (
  <div>
    <h3>Add-ons</h3>
    <div>
      <input type="checkbox" id="cheese" name="addon" value="Cheese" />
      <label htmlFor="cheese">Extra Cheese - SAR 50.00</label>
    </div>
    <div>
      <input type="checkbox" id="pepperoni" name="addon" value="Pepperoni" />
      <label htmlFor="pepperoni">Pepperoni - SAR 100.00</label>
    </div>
  </div>
);

const ItemSelection1 = () => {
  const [activeTab, setActiveTab] = useState('variants');
  
  return (
    <div style={{ width: '400px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="pizza-image-url" alt="Pizza" style={{ width: '80px', height: '80px', borderRadius: '10px' }} />
        <div>
          <p><strong>Chicken BBQ pizza</strong> with Mexican flavoured toppings</p>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <button 
          onClick={() => setActiveTab('variants')} 
          style={{ 
            flex: 1, 
            backgroundColor: activeTab === 'variants' ? '#1976d2' : '#f0f0f0', 
            color: activeTab === 'variants' ? 'white' : 'black', 
            padding: '10px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Variants (2)
        </button>
        <button 
          onClick={() => setActiveTab('addons')} 
          style={{ 
            flex: 1, 
            backgroundColor: activeTab === 'addons' ? '#1976d2' : '#f0f0f0', 
            color: activeTab === 'addons' ? 'white' : 'black', 
            padding: '10px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Add-ons
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'variants' ? <Variants /> : <AddOns />}
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Item total</p>
          <p>SAR 4,100.00</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <button style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', marginRight: '10px' }}>-</button>
          <span>1</span>
          <button style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', marginLeft: '10px' }}>+</button>
        </div>
        <button 
          style={{ 
            width: '100%', 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#1976d2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer' 
          }}>
          Add to order
        </button>
      </div>
    </div>
  );
};

export default ItemSelection1;

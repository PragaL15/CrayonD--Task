import { useState } from 'react';
import { Table, Button } from 'antd';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Counter from '../../components/input/counter'; // Import the new Counter component
import '../../styles/cardPage.css'; // Ensure your CSS is imported

const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (_, record) => (
      <Counter />  
    ),
  },
  {
    title: 'Amount (SAR)',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => (
      <div style={{ fontWeight: 'bold' }}>
        {text}
      </div>
    ),
  },
  {
    key: 'action',
    render: (_, record) => (
      <Button
        type="link"
        icon= {<DeleteOutlinedIcon/>}
        onClick={() => handleDelete(record.key)}
      />
    ),
  },
];

const dataSource = [
  {
    key: '1',
    item: 'Chicken BBQ pizza with mexican flavoured toppings',
    quantity: 1,
    amount: '100.00',
  },
  {
    key: '2',
    item: 'Mushroom salad',
    quantity: 3,
    amount: '300.00',
  },
  {
    key: '3',
    item: 'Grape juice',
    quantity: 2,
    amount: '200.00',
  },
  {
    key: '4',
    item: 'Mushroom sandwich combo',
    quantity: 1,
    amount: '100.00',
  },
  {
    key: '5',
    item: 'Cappuccino',
    quantity: 2,
    amount: '200.00',
  },
];

const TableCard1 = () => {
  const [data, setData] = useState(dataSource);

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  return (
    <div className="table-card">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false} 
        rowClassName={() => 'custom-row'} 
      />
    </div>
  );
};

export default TableCard1;

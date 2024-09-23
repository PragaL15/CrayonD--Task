import { useState } from 'react';
import { Table, Button } from 'antd';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Counter from '../../components/input/counter';
import '../../styles/cardPage.css';

const TableCard1 = () => {
  const [data, setData] = useState([
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
  ]);

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns = [
    {
      title: (
        <span style={{ fontSize: '16px', color: '#7e7e80', padding: '1px' }}>
          Item
        </span>
      ),
      dataIndex: 'item',
      key: 'item',
      render: (text) => (
        <div style={{ fontWeight: '500', width: '220px',marginRight:'98px',fontWeight:'400', }}>{text}</div>
      ),
    },
    {
      title: (
        <span
          style={{
            fontSize: '16px',
            color: '#7e7e80',
            marginLeft: '32px',
            padding: '1px',
            fontWeight:'400',
          }}
        >
          Qty
        </span>
      ),
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => <Counter />,
    },
    {
      title: (
        <span
          style={{
            fontSize: '14px',
            color: '#7e7e80',
            marginLeft: '63px',
            padding: '1px',
            fontWeight:'400',
          }}
        >
          Amount (SAR)
        </span>
      ),
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => (
        <div style={{ fontWeight: 'bold', marginLeft: '87px' }}>{text}</div>
      ),
    },
    {
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          icon={<DeleteOutlinedIcon sx={{ color: 'black' }} />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

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

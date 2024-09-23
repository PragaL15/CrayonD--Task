import React, { useState, useEffect } from 'react';
import '../../styles/PaymentTab.css';

const TAX_RATE = 0.07;

// Function to format currency
function ccyFormat(num) {
  return `SAR ${num.toFixed(2)}`;
}

// Default rows representing Sub Total, Taxable Amount, and Total Tax
const defaultRows = [
  { desc: 'Sub Total', qty: 'SAR 0.00' },
  { desc: 'Taxable Amount', qty: 'SAR 0.00' },
  { desc: 'Total Tax', qty: 'SAR 0.00' },
];

export default function PaymentTable({ initialRows = defaultRows, name = 'Ashwin' }) {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  function subtotal(items) {
    return items.reduce((sum, { qty }) => {
      const value = parseFloat(qty.replace('SAR ', '')) || 0;
      return sum + value;
    }, 0);
  }

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const updatedRows = [
    { desc: 'Sub Total', qty: ccyFormat(invoiceSubtotal) },
    { desc: 'Taxable Amount', qty: ccyFormat(invoiceSubtotal) }, 
    { desc: 'Total Tax', qty: ccyFormat(invoiceTaxes) },
  ];

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1 className="para1">Payment Summary</h1>
        <p className="para2">{name}</p>
      </div>
      <table className="payment-table">
        <thead>
          <tr>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {updatedRows.map((row) => (
            <tr key={row.desc}>
              <td>{row.desc}</td>
              <td className="align-right">{row.qty}</td>
            </tr>
          ))}
          <tr>
            <td>Grand Total</td>
            <td className="align-right">{ccyFormat(invoiceTotal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

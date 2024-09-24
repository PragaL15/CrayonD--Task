import React, { useState, useEffect } from 'react';
import '../../styles/PaymentTab.css';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const TAX_RATE = 0.07;

// Helper class to handle payment calculations
class PaymentCalculator {
  constructor(items, taxRate) {
    this.items = items;
    this.taxRate = taxRate;
  }

  // Function to calculate subtotal
  calculateSubtotal() {
    return this.items.reduce((sum, { qty }) => {
      const value = parseFloat(qty.replace('SAR ', '')) || 0;
      return sum + value;
    }, 0);
  }

  static ccyFormat(num) {
    return `SAR ${num.toFixed(2)}`;
  }

  calculateTaxes(subtotal) {
    return subtotal * this.taxRate;
  }

  calculateTotal(subtotal, taxes) {
    return subtotal + taxes;
  }
}

export default function PaymentTable({ initialRows = defaultRows, name = 'Ashwin', icon = <ReceiptLongIcon /> }) {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  const paymentCalculator = new PaymentCalculator(rows, TAX_RATE);
  
  const invoiceSubtotal = paymentCalculator.calculateSubtotal();
  const invoiceTaxes = paymentCalculator.calculateTaxes(invoiceSubtotal);
  const invoiceTotal = paymentCalculator.calculateTotal(invoiceSubtotal, invoiceTaxes);

  const updatedRows = [
    { desc: 'Sub Total', qty: PaymentCalculator.ccyFormat(invoiceSubtotal) },
    { desc: 'Taxable Amount', qty: PaymentCalculator.ccyFormat(invoiceSubtotal) },
    { desc: 'Total Tax', qty: PaymentCalculator.ccyFormat(invoiceTaxes) },
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
            <td className='bold'>Grand Total</td>
            <th className="align-right">{PaymentCalculator.ccyFormat(invoiceTotal)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const defaultRows = [
  { desc: 'Sub Total', qty: 'SAR 0.00' },
  { desc: 'Taxable Amount', qty: 'SAR 0.00' },
  { desc: 'Total Tax', qty: 'SAR 0.00' },
];

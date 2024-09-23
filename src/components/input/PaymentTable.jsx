import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../styles/PaymentTab.css'; 

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `SAR ${num.toFixed(2)}`;
}

function createRow(desc, qty) {
  return { desc, qty };
}

function subtotal(items) {
  return items
    .map(({ qty }) => parseFloat(qty.replace('SAR ', '')) || 0)
    .reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Sub Total', 'SAR 0.00'),
  createRow('Taxable Amount', 'SAR 0.00'),
  createRow('Total Tax', 'SAR 0.00'),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function PaymentTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        position: 'absolute',
        top: '1px',
        left: '796px',
        width: '510px',
        height: '310px',
        background: '#e8eaf6',
        boxShadow: '0px 0px 0px 0px',
        padding: '10px 5px 10px 5px',
        overflow: 'hidden', 
      }}
    >
      <Table sx={{ minWidth: 510 }} aria-label="spanning table">
        <TableHead>
          <div className="para">
            <h1 className="para1">Payment Summary</h1>
            <p className="para2">Ashwin</p>
          </div>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.desc}
              className={`${
                index === 0
                  ? 'subtotal-row'
                  : index === 1
                  ? 'taxable-amount-row'
                  : 'total-tax-row'
              }`}
            >
              <TableCell
                sx={{
                  padding: '2px 3px',
                  marginLeft: '4px',
                }}
              >
                {row.desc}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  padding: '2px 6px', // Reduce padding for closeness
                }}
              >
                {row.qty}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} sx={{ padding: '2px 4px' }}>
              Grand Total
            </TableCell>
            <TableCell>{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

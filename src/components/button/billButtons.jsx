import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BillButtons() {
  return (
    <Stack spacing={2} direction="row" >
       <Button variant="outlined" sx={{padding:'3px 3px 3px 3px',fontSize:'10px'}}>PrintBill</Button>
      <Button variant="contained" sx={{padding:'7px 7px 7px 5px',fontSize:'8px', marginLeft:'20px',width:'160px'}}>Proceed to Payment</Button>
    
    </Stack>
  );
}

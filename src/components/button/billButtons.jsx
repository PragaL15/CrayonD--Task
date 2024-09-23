import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BillButtons() {
  return (
    <Stack spacing={2} direction="row" >
       <Button variant="outlined" sx={{padding:'0.35',fontSize:'10px',borderColor:'#2a2fbf',color:'#135eeb'}}>PrintBill</Button>
      <Button variant="contained" sx={{padding:'0.35',fontSize:'8px', marginLeft:'20px',width:'160px',backgroundColor:'#135eeb'}}>Proceed to Payment</Button>
    
    </Stack>
  );
}

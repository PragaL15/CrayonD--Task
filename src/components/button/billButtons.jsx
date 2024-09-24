import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BillButtons() {
  return (
    <Stack spacing={2} direction="row" >
       <Button variant="outlined" sx={{padding:'0.35',fontSize:'11px',borderColor:'#2a2fbf',color:'#135eeb',marginLeft:'10px'}}>PrintBill</Button>
      <Button variant="contained" sx={{padding:'0.35',fontSize:'11px', marginLeft:'26px',width:'240px',backgroundColor:'#135eeb',boxShadow:'0px 0px 0px 0px'}}>Proceed to Payment</Button>
    
    </Stack>
  );
}

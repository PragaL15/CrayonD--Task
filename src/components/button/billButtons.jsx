import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BillButtons() {
  return (
    <Stack spacing={2} direction="row" >
       <Button variant="outlined" sx={{padding:'3px 3px 3px 3px',fontSize:'10px',borderColor:'#2a2fbf',color:'#2a2fbf'}}>PrintBill</Button>
      <Button variant="contained" sx={{padding:'7px 7px 7px 5px',fontSize:'8px', marginLeft:'20px',width:'160px',backgroundColor:'#2a2fbf'}}>Proceed to Payment</Button>
    
    </Stack>
  );
}

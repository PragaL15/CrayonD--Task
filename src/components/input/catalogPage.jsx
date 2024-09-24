import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Catlog from './catlog'

export default function CatalogPage() {
return(
 
<Box sx={{ '& button': { m: 1 } ,position: 'absolute',left:'650px',top:'10px'}}>
<div >
  <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}} >
    All
  </Button>
  <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
   Favorite
  </Button>
  <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
   Juice
  </Button>
  <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
   Burger
  </Button>
  <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
   Sandwich
  </Button>
  <Catlog/>
</div>
</Box>
);
}
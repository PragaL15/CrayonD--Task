import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Catlog from './catlog'
import BillButtons from '../button/billButtons';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Buttons={
    marginLeft: '210px',
    marginTop: '10px',
    Width: '130px',

}
const cat={
 fontSize: '16px',
 fontWeight:'300',
 marginLeft:'230px',
 display: 'flex'
}
export default function CatalogPage() {

return(
 
<Box sx={{ '& button': { m: 1 } ,position: 'absolute',left:'650px',top:'10px'}}>
  <div style ={cat}>
    <p>Catalog</p>
    <CloseIcon sx={{ml:22}}/>
    <MoreVertIcon sx={{ml:2}}/>
  </div>
<div >
  <Button variant="outlined" size="small" sx={{borderColor: 'black',borderRadius:'3px',color:'black',ml:20}} >
    All
  </Button>
  <Button variant="outlined" size="small" sx={{borderColor: 'black',borderRadius:'3px',color:'black',width:'40px'}}>
   Favorite
  </Button>
  <Button variant="outlined" size="small" sx={{borderColor: 'black',borderRadius:'3px',color:'black'}}>
   Juice
  </Button>
  <Button variant="outlined" size="small" sx={{borderColor: 'black',borderRadius:'3px',color:'black'}}>
   Burger
  </Button>
  <Button variant="outlined" size="small" sx={{borderColor: 'black',borderRadius:'3px',color:'black'}}>
   Sandwich
  </Button>
  <Catlog/>
  <div style={Buttons}>
  <BillButtons/>
  </div>
</div>
</Box>
);
}
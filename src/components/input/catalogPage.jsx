import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Catlog from './catlog';
import BillButtons from '../button/billButtons';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const cat = {
  fontSize: '16px',
  fontWeight: '300',
  marginLeft: '230px',
  display: 'flex'
};

export default function CatalogPage() {
  return (
    <Box sx={{ '& button': { m: 1 }, position: 'absolute', left: '650px', top: '10px' }}>
      <div style={cat}>
        <p>Catalog</p>
        <CloseIcon sx={{ ml: 22 }} />
        <MoreVertIcon sx={{ ml: 2 }} />
      </div>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr:0.025 }}>
        <Button variant="outlined" size="small" sx={{ borderColor: 'black', borderRadius: '3px', color: 'black', ml: 1 ,padding:'2px 2px 2px 2px'}}>
          All
        </Button>
        <Button variant="outlined" size="small" sx={{ borderColor: 'black', borderRadius: '3px', color: 'black', ml: 1 }}>
          Favorite
        </Button>
        <Button variant="outlined" size="small" sx={{ borderColor: 'black', borderRadius: '3px', color: 'black', ml: 1 }}>
          Juice
        </Button>
        <Button variant="outlined" size="small" sx={{ borderColor: 'black', borderRadius: '3px', color: 'black', ml: 1 }}>
          Burger
        </Button>
        <Button variant="outlined" size="small" sx={{ borderColor: 'black', borderRadius: '3px', color: 'black', ml: 1 }}>
          Sandwich
        </Button>
      </Box>
      <Catlog />
      <Box sx={{ display: 'flex',mb:2,ml:30 }}>
        <BillButtons />
      </Box>
    </Box>
  );
}

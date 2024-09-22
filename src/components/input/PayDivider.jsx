import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BillButtons from '../button/billButtons'
import {Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CouponIcon from '@rsuite/icons/Coupon';
import TagIcon from '@rsuite/icons/Tag';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
const style = {
  p: 0,
  width: '200%',
  maxWidth: 410,
  position: 'absolute',
  borderRadius: 1,
  border: '0px solid none',
  borderColor: 'divider',
  top:'380px',
  left:'865px',
  backgroundColor: '#e8eaf6',
};

export default function ListDividers() {
  return (
    <List sx={style} aria-label="mailbox folders">
   
      <ListItem>
        <ListItemText  primary="Add Notes" sx={{color:'black',marginLeft:'150px'}} />
      </ListItem>
      <Divider component="li" />
      <ListItem sx={{padding:'7px 7px 7px 7px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', }}>
          <Button
            variant="outlined"
            size="medium"
            
            sx={{ borderColor: 'black', borderRadius: '4px', color: 'black',padding:'0.35',fontSize:'10px',marginLeft:'2px' }}>
            <Icon name='id badge outline'/>
            Customer
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<CouponIcon />}
            sx={{ borderColor: 'black', borderRadius: '4px', color: 'black',marginLeft: '30px',fontSize:'10px' }}
          >
            Coupon
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<TagIcon/>}
            sx={{ borderColor: 'black', borderRadius: '4px', color: 'black',marginLeft: '30px',fontSize:'10px' }}
          >
            Discount
          </Button>
        </Box>
      </ListItem>

      <Divider component="li" />
      <ListItem sx={{padding:'15px 15px 15px 15px'}}>
        <BillButtons/>
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

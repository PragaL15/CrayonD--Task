import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import '../../styles/Card.css';
const DogCard = () => {
  return (
    <Card sx={{ maxWidth: 720, boxShadow: 0 , width:'720px',marginLeft:'20px',top:'50px',position:'absolute',backgroundColor:'transparent'}}>
        <div className="both">
        <Typography variant="h5" component="div">
          Cart Summary
          <p className='os'>order id:0001</p>
        </Typography>
        <Typography variant="body2" color="text.primary">
          <div className='imp'>
          <AssignmentIndIcon sx={{
          border: 1,
          borderColor: 'black',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 51,
          borderRadius: 1,
          cursor: 'pointer',
          color:'black'

        }} />
          <TableRestaurantIcon sx= {{
          border: 1,
          borderColor: 'black',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 2.4,
          borderRadius: 1,
          cursor: 'pointer',
          color:'black'

        }}/>
          <MoreVertOutlinedIcon sx={{
          border: 1,
          borderColor: 'black',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 2.05,
          borderRadius: 1,
          cursor: 'pointer',
          color:'black'

        }}/>
          </div>
        </Typography>
        </div>
   
    </Card>
  );
};

export default DogCard;

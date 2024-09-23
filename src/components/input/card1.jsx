import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import '../../styles/Card.css';
const DogCard = () => {
  return (
    <Card sx={{ maxWidth: 720, boxShadow: 0 , width:'680px',marginLeft:'20px',top:'80px',position:'absolute' }}>
      <CardContent>
        <div className="both">
        <Typography variant="h5" component="div">
          Cart Summary
          <p className='os'>order id:0001</p>
        </Typography>
        <Typography variant="body2" color="text.primary">
          <div className='imp'>
          <AssignmentIndIcon sx={{ ml: 43 ,width:28,height:28,borderRadius:1,border:1,borderColor:'black',padding:0.35 }} />
          <TableRestaurantIcon sx={{ ml: 5 ,width:28,height:28,borderRadius:1,border:1,borderColor:'black',padding:0.35 }}/>
          <PhoneAndroidOutlinedIcon sx={{ ml: 5 ,width:28,height:28,borderRadius:1,border:1,borderColor:'black',padding:0.35 }}/>
          </div>
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default DogCard;

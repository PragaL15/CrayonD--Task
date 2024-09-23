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
        <Typography variant="h5" component="div" >
          <div className="go">
          Cart summary
          </div>
          <div className='flex'>
          <p className='os'>Order ID:</p>
          <p className='os1'>000001</p>
          </div>
        </Typography>
        <Typography variant="body2" color="text.primary">
          <div className='imp'>
          <AssignmentIndIcon sx={{
          border: 1,
          borderColor: 'rgb(185, 183, 183)',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 52.7,
          borderRadius: 1,
          cursor: 'pointer',
          color:'#6d6d6e'

        }} />
          <TableRestaurantIcon sx= {{
          border: 1,
          borderColor: 'rgb(185, 183, 183)',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 2.4,
          borderRadius: 1,
          cursor: 'pointer',
          color:'#6d6d6e'

        }}/>
          <MoreVertOutlinedIcon sx={{
          border: 1,
          borderColor: 'rgb(185, 183, 183)',
          padding: 1,
          marginTop: 1.13,
          width: 39,
          height: 39,
          marginLeft: 2.05,
          borderRadius: 1,
          cursor: 'pointer',
          color:'#6d6d6e'

        }}/>
          </div>
        </Typography>
        </div>
   
    </Card>
  );
};
export default DogCard;

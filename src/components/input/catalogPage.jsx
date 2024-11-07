import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Chicken from '../../assets/chicken.jpg'
import frenchFries from '../../assets/frenchFries.jpg';
import pizza from '../../assets/pizza.jpg';
import sandwich from '../../assets/sandwich.jpg';
import watermelon from '../../assets/watermelon.jpg';
import nachos from '../../assets/nachos.jpeg';
import mexicanNachos from '../../assets/mexicannachos.jpg';
import grape from '../../assets/grape.jpg';
import mango from '../../assets/mango.jpeg';

const itemData = [
  {
    img: Chicken,
    title: 'Chicken',
    author: '@nolanissac',
  },
  {
    img: frenchFries,
    title: 'Fries',
    author: '@hjrc33',
  },
  {
    img: pizza,
    title: 'Pizza',
    author: '@arwinneil',
  },
  {
    img: sandwich,
    title: 'Mushroom Sandwich',
    author: '@tjdragotta',
  },
  {
    img: watermelon,
    title: 'Watermelon',
    author: '@katie_wasserman',
  },
  {
    img: nachos,
    title: 'Nachos',
    author: '@silverdalex',
  },
  {
    img: mexicanNachos,
    title: 'Mexican Nachos',
    author: '@shelleypauls',
  },
  {
    img: grape,
    title: 'Grape Juice',
    author: '@peterlaster',
  },
  {
    img: mango,
    title: 'Mango Juice',
    author: '@southside_customs',
  },
];

export default function CatalogPage() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const id = 1; 
    navigate(`/target-component/${id}`); 
  };

  return (
    <Grid container spacing={2}>
      {itemData.map((item) => (
        <Grid item xs={4} key={item.title}>
          <Button
            variant="outlined"
            onClick={() => handleClick(item.title)} 
            style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
            {item.title}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

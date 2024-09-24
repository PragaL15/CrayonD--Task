import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Chicken from '../../assets/chicken.jpg'
import frenchFries from '../../assets/frenchFries.jpg';
import pizza from '../../assets/pizza.jpg';
import sandwich from '../../assets/sandwich.jpg';
import watermelon from '../../assets/watermelon.jpg';
import nachos from '../../assets/nachos.jpeg';
import mexicanNachos from '../../assets/mexican nachos.jpg';
import grape from '../../assets/grape.jpg';
import mango from '../../assets/mango.jpeg';

export default function TitlebarBelowImageList() {
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

  return (
    <ImageList
      sx={{
        width: 420,
        height: 430,
        ml: 20,
        overflow: 'hidden',
      }}
      cols={3}
      gap={8} 
      rowHeight={120}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
              borderRadius: '3px', // Rounded corners
            }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

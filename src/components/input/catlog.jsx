import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { BiBorderRadius } from 'react-icons/bi';

export default function TitlebarBelowImageList() {
  
const itemData = [
  {
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftheallnaturalvegan.com%2Fwp-content%2Fuploads%2F2023%2F08%2Fmango-juice-featured-image.jpg&tbnid=nnlUYQA8FWbeQM&vet=12ahUKEwiu0Ifz89qIAxUUkmMGHUhODBsQMygCegQIARBt..i&imgrefurl=https%3A%2F%2Ftheallnaturalvegan.com%2Fcold-pressed-golden-mango-juice%2F&docid=DZB4BuvB0uNNtM&w=1200&h=1200&q=mango%20juice&ved=2ahUKEwiu0Ifz89qIAxUUkmMGHUhODBsQMygCegQIARBt',
    title: 'Chicken',
    author: '@nolanissac',
  },
  {
    img: '../../assets/frenchFries.jpg',
    title: 'fries',
    author: '@hjrc33',
  },
  {
    img: '../../assets/pizza.jpg',
    title: 'Pizza',
    author: '@arwinneil',
  },
  {
    img: '../../assets/sandwich.jpg',
    title: 'Mushroom sandwich',
    author: '@tjdragotta',
  },
  {
    img: '../../assets/watermelon.jpg',
    title: 'watermelon',
    author: '@katie_wasserman',
  },
  {
    img: '../../assets/nachos.jpeg',
    title: 'Nachos',
    author: '@silverdalex',
  },
  {
    img: '../../assets/mexican nachos.jpg',
    title: 'Mexican Nachos',
    author: '@shelleypauls',
  },
  {
    img: '../../assets/grape.jpg',
    title: 'Grape juice',
    author: '@peterlaster',
  },
  {
    img: '../../assets/mango.jpeg',
    title: 'Mango juice',
    author: '@southside_customs',
  },
];

  return (
    <ImageList sx={{ width: 430, height: 450, ml: 23,overflow:'hidden' }} cols={3} rowHeight={120}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
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

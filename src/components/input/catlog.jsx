import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Chicken BBQ pizza',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'French fries combo',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Pan pizza',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Mushroom Sandwich',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Watermelon juice',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Plain Nachos',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Mexican Nachos with salsa',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Grape juice',
    variants: '2 variants',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mango juice with salad',
    variants: '2 variants',
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function FoodCatalog() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'inline' }}>
      {/* AppBar with Tabs for different categories */}
      <Box sx={{ width: '10%', position: 'fixed', top: 0,ml:89,display:'inline' }}>
        <AppBar position="static" color="default" elevation={0}>
 

        </AppBar>
      </Box>
      <Box sx={{ ml: '20%', p: 3, width: '80%' }}>
        <TabPanel value={value} index={0}>
          <Typography variant="h6" gutterBottom>
            Catalog
          </Typography>
          <Divider />
          <ImageList sx={{ width: '55%', height: 'auto', mt: 2 ,ml:59}} cols={3} gap={10}>
            {itemData.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: '10px' }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>{item.variants}</span>}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </TabPanel>

        {/* Other tabs for different categories */}
        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            Favourites
          </Typography>
          <Divider />
          {/* You can add the favorite items logic */}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            Burgers
          </Typography>
          <Divider />
          {/* You can add the burger items logic */}
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h6" gutterBottom>
            Sandwiches
          </Typography>
          <Divider />
          {/* You can add the sandwich items logic */}
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h6" gutterBottom>
            Juices
          </Typography>
          <Divider />
        
        </TabPanel>
      </Box>
    </Box>
  );
}
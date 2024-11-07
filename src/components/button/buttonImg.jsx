import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ButtonImg.css'; // Import your CSS file

export default function ButtonImg() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    const id = 'your-id'; // Replace with your dynamic id
    navigate(`/target-component/${id}`); // Navigate to the target component with the id
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        onClick={handleClick} 
        style={{ width: '150px', height: '50px' }} 
      >
        <img src="/path/to/your/image.jpg" alt="Button Icon" style={{ marginRight: '8px' }} />
        Link
      </Button>
    </Stack>
  );
}

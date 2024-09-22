import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import PaymentTable from '../input/PaymentTable';
import ListDividers from '../input/PayDivider'
export default function PaymentCard() {
  return (
    <div className="Pay" style={{ position: 'static' }}> {/* Added relative position */}
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: '#e8eaf6',
              dark: '#e8eaf6',
            },
          },
        }}
      >
        <Box
          sx={{
            width: 490,
            height: 538,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            ml: 94,
          }}
        />
      </ThemeProvider>
      <PaymentTable /> 
      <ListDividers/>

    </div>
  );
}

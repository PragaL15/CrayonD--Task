import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import PaymentTable from '../input/PaymentTable';
import ListDividers from '../input/PayDivider'
export default function PaymentCard() {
  return (
    <div className="Pay" style={{ position: 'static' }}>
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: '#f1f3f6',
              dark: '#f1f3f6',
            },
          },
        }}
      >
        <Box
          sx={{
            width: 485,
            height: 540,
            borderRadius: 0,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            ml: 92,
            paddingLeft: 0.5,
          }}
        />
      </ThemeProvider>
      <PaymentTable /> 
      <ListDividers/>

    </div>
  );
}

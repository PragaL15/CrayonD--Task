import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '#052d54' , marginTop:'10px',height:'30px'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        
      </div>
    </MDBFooter>
  );
}
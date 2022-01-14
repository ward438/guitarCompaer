import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function MartinMenuButton() {
  return (
    <Stack direction="row" spacing={2}>
        <Link 
      href={'/martin_guitars'}
      >
         <Button variant="contained" color="success">
        Martin Guitars
      </Button>
      </Link>
     

    </Stack>
  );
}
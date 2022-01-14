import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function GibsonButton() {
    return (
        <Stack direction="row" spacing={2}>
        <Link 
      href={'/gibson_guitars'}
      >
         <Button variant="contained" color="success">
        Gibson Guitars
      </Button>
      </Link>
     

    </Stack>
    );
}
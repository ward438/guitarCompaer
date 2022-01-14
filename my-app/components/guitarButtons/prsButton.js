import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function PaulReedSmithButton() {
    return (
        <Stack direction="row" spacing={2}>
        <Link 
      href={'/prs_guitars'}
      >
         <Button variant="contained" color="success">
        Paul Reed Smith Guitars
      </Button>
      </Link>
     

    </Stack>
    );
}
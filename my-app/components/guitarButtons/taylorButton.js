import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function TaylorMenuButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Link 
      href={'/taylor_guitars'}
      >
        <Button variant="contained" color="success">
          Taylor Guitars
        </Button>

      </Link>

    </Stack>
  );
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function FenderButton() {



    return (
        <Stack direction="row" spacing={2}>
            <Link
                href={'/fender_guitars'}
            >
                <Button variant="contained" color="success">
                    Fender Guitars
                </Button>
            </Link>


        </Stack>
    );
}
import { Box } from '@mui/material';
import { Spinner } from '..';

export function Loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Spinner size={48} />
        </Box>
    );
}

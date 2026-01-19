import { Box, CircularProgress } from '@mui/material';

type PropsType = {
    size?: number;
};

export function Spinner({ size = 32 }: PropsType) {

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress size={size} />
        </Box>
    );
};
import { paths } from '@/config/paths';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

export function Errors() {

    // ルーティング用
    const navigate = useNavigate();
    // ErrorBoundaryリセット用
    const { resetBoundary } = useErrorBoundary();

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                p: 2,
                boxSizing: "border-box",
                color: "text.primary",
                textAlign: "center",
            }}
        >
            <Box
                sx={{
                    height: "87%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <ErrorOutlineIcon sx={{ fontSize: 40 }} color="error" />
                    <Typography variant="h5" component="div">
                        エラーが発生しました
                    </Typography>
                    <Typography variant="body1">
                        ホームに戻るか、時間をおいて再試行してください。
                    </Typography>
                </Stack>
            </Box>

            <Box
                sx={{
                    height: "13%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    color: "primary.main",
                }}
            >
                <HomeIcon />
                <Link
                    component="button"
                    variant="body1"
                    onClick={() => {
                        resetBoundary();
                        navigate(`${paths.home.path}`);
                    }}
                    sx={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: 20,
                        "&:hover": { opacity: 0.8 },
                    }}
                >
                    ホームに戻る
                </Link>
            </Box>
        </Box>
    );
}

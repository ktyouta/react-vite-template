import { paths } from "@/config/paths";
import HomeIcon from '@mui/icons-material/Home';
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { Box, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotFound() {

    // ルーティング用
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
            }}
        >
            <ReportProblemOutlinedIcon sx={{ fontSize: 72, color: "grey.400" }} />
            <Typography variant="h3" fontWeight="bold">
                404
            </Typography>
            <Typography color="text.secondary">
                お探しのページは存在しないか、移動しました。
            </Typography>
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

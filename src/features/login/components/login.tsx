import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type PropsType = {
    errMessage: string,
    isLoading: boolean,
    register: UseFormRegister<{
        userName: string;
        password: string;
    }>,
    errors: FieldErrors<{
        userName: string;
        password: string;
    }>,
    clickLogin: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

export function Login(props: PropsType) {

    const {
        errMessage,
        isLoading,
        register,
        errors,
        clickLogin,
    } = props;

    return (
        <Container maxWidth="sm">
            <Backdrop
                open={isLoading}
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
                <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                    ログイン
                </Typography>
                {
                    errMessage &&
                    <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                        {errMessage}
                    </Typography>
                }
                <Stack spacing={3}>
                    {/* ユーザー名 */}
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>ユーザー名</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="UserName"
                            autoComplete="off"
                            {...register("userName")}
                            error={!!errors.userName}
                            helperText={errors.userName?.message}
                        />
                    </Box>
                    {/* パスワード */}
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>パスワード</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type="password"
                            autoComplete="off"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </Box>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'black', '&:hover': { bgcolor: '#333' }, minWidth: 100, borderRadius: '20px' }}
                            onClick={() => { }}
                        >
                            戻る
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'black', '&:hover': { bgcolor: '#333' }, minWidth: 100, borderRadius: '20px' }}
                            onClick={clickLogin}
                        >
                            ログイン
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}
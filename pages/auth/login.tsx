import { useContext, useState } from 'react';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

//mui
import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';

//components
import { AuthLayout } from '../../components/layouts';
import { isEmail } from '../../utils/validations';
import { validations } from '@/utils';
import { cvApi } from '@/api';
import { ErrorOutline } from '@mui/icons-material';
import { set } from 'mongoose';
import { AuthContext } from '@/context';
import router, { useRouter } from 'next/router';

//interfaces
interface formData {
    email: string;
    password: string;
}

const LoginPage = () => {

    //router
    const router = useRouter()

    //login del context
    const { loginUser } = useContext(AuthContext)

    const [showError, setShowError] = useState(false)

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<formData>();

    const onLoginUser = async ({ email, password }: formData) => {

        setShowError(false)

        const isValidLogin = await loginUser(email, password);

        if (!isValidLogin) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000);
            return;
        }


        //TODO - navegar a la pagina del curriculum y cargar los datos del usuario buscando por el email
        router.push(`/user/profile`)



    }


    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={handleSubmit(onLoginUser)}>
                <Box sx={{ width: '50vw', padding: '10px 20px', marginTop: '28vw', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Grid container spacing={2} display={'flex'} alignContent={'center'} sx={{ width: { xs: '80vw', sm: '60vw' } }}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component="h3" alignContent={'center'}>Log In</Typography>
                            {/* Mensaje de error si no se puede logear */}

                            <Chip
                                label="User or password incorrect"
                                color="error"
                                variant="outlined"

                                icon={<ErrorOutline />}
                                className='fadeIn '
                                sx={{ display: showError ? 'flex' : 'none' }}


                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type='email'
                                label="Email"
                                variant="filled"
                                fullWidth
                                color='secondary'
                                {...register('email', {
                                    required: 'Email required',
                                    validate: (value) => validations.isEmail(value),
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type='password'
                                variant="filled"
                                fullWidth
                                color='secondary'
                                {...register('password', {
                                    required: 'Password required',
                                    minLength: { value: 6, message: 'Min 6 characteres' }

                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                type='submit' //para que el boton haga submit
                                color="secondary"
                                fullWidth
                            >
                                Log in
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <Link href="/auth/register"  >
                                ¿Do not have account?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage
import { use, useContext, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';


import { validations } from '@/utils';

import { FormContext } from '@/context/form';
import { AuthContext } from '@/context';
//Styles
import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Input, TextField, Typography, styled } from '@mui/material';
import { set } from 'mongoose';

interface Prueba {
    img: string;
}

//Interface
interface formCurriculumData {
    img: string;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FormCurriculumPrueba = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext)


    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors }, watch } = useForm<Prueba>();
    const { createCurriculum } = useContext(FormContext)


    //manejar el submit del formulario
    const onSubmitCurriculumForm = async ({ img,
    }: Prueba) => {
        console.log(img[0])


    };


    return (
        <Box >
            <form onSubmit={handleSubmit(onSubmitCurriculumForm)}>

                <Grid item >
                    <Typography variant='h1' component="h1" sx={{ fontSize: "2rem", }}>Curriculum Form</Typography>
                </Grid>

                {/* Box del Perfil, Nombre y Ocupacion, Tambien tel,email,country */}
                <Grid display={'flex'} direction={{ sm: 'row', xs: 'column' }} >
                    {/* Img Profile*/}
                    <Grid item xs={12} height={"50px"}>
                        <Button
                            variant='contained'
                            component="label"

                        >
                            Upload File
                            <VisuallyHiddenInput
                                type="file"
                                {...register('img', {
                                    required: false,

                                })} />
                        </Button>
                    </Grid>
                </Grid>

                {/* Register Button */}
                <Grid item xs={12}>
                    <Button
                        type='submit'
                        variant="contained"
                        color="secondary"
                        className='circular-btn'
                        size='large'
                        fullWidth
                    >
                        Register
                    </Button>
                </Grid>
            </form>
        </Box >
    )
}



export default FormCurriculumPrueba;
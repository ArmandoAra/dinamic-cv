import { use, useContext, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';


import { validations } from '@/utils';

import { FormContext } from '@/context/form';
import { AuthContext } from '@/context';
//Styles
import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, FormLabel, Grid, Input, TextField, Typography, styled } from '@mui/material';
import { styles } from './formStyles';
import { set } from 'mongoose';


//Da error en el nombre y el email, no se porque
// hacer que funcione correctamente como esta configurada y que guarde todo correctamente en la base de datos
//ver carpeta donde se van a guardar las imagenes y como se van a guardar(Comprobar trayendo todos los datos y rellenarlos en el curriculo)
//Hacer las imagenes mas pequeñas para que no pesen tanto(Buscar libreria para reducir las imagenes antes de guardarlas)

//Interface
interface formCurriculumData {
    name: string;
    surname: string;
    profession: string;
    age: number;
    img: string;
    telephone: number;
    email: string;
    country: string;
    acts: string[];
    images: string[];
    formation: string;
    description: string;
    skills: string[];
    workExperience: string[];
    actualWorkPlace: string;
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

const FormCurriculum = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext)


    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors }, watch } = useForm<formCurriculumData>();
    const { createCurriculum, updateCurriculum } = useContext(FormContext)

    //manejar el submit del formulario
    const onSubmitCurriculumForm = async ({
        name, surname, profession, age, telephone, email,
        country, acts, images, formation, img,
        description, skills, workExperience, actualWorkPlace
    }: formCurriculumData) => {
        setShowError(false)

        // if (!user) {
        //     const { hasError, message } = await createCurriculum(
        //         name, surname, profession, age, telephone, email, img,
        //         country, acts, images, formation,
        //         description, skills, workExperience, actualWorkPlace
        //     );
        // }

        const { hasError, message } = await updateCurriculum(
            name, surname, profession, age, telephone, email, img,
            country, acts, images, formation,
            description, skills, workExperience, actualWorkPlace
        );


        if (hasError) {
            setShowError(true)
            setErrorMessage(message ?? 'Error al crear el curriculum')
            setTimeout(() => {
                setShowError(false)
            }, 5000);
            return;
        }

        router.replace('/user/profile');

    };


    useEffect(() => {
        console.log(watch('images'))
    }, [watch('images')])

    return (
        <Box sx={styles.formContainer} >
            <form style={{ width: '60vw' }} onSubmit={handleSubmit(onSubmitCurriculumForm)}>

                <Grid item >
                    <Typography variant='h1' component="h1" sx={{ fontSize: "2rem", textAlign: "center", padding: '35px 10px' }}>Curriculum Form</Typography>
                </Grid>

                {/* Box del Perfil, Nombre y Ocupacion, Tambien tel,email,country */}
                <Grid display={'flex'} direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-around'} padding={'40px 0'} gap={1}>
                    {/* Img Profile*/}
                    <Grid item xs={12} width={"50%"} >
                        <Button
                            component="label"
                            variant="contained"
                        >
                            <img alt="profile" width="100%" height="100%" />
                            <VisuallyHiddenInput
                                type="file"
                                {...register('img', {
                                    required: false,

                                })}
                            />
                        </Button>
                    </Grid>

                    <Grid item display={'flex'} gap={1} direction={'column'}>
                        {/* Box del nombre y Profesion */}
                        {/* Profession */}
                        <Grid item xs={12} width={'100%'} >
                            <TextField
                                label="Profession"
                                fullWidth
                                multiline
                                {...register('profession', {
                                    required: 'Profession required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.profession}
                                helperText={errors.profession?.message}
                            />
                        </Grid>

                        {/* Name (debe ser autorellenado con los datos que tenemos del login) */}
                        <Grid item xs={12} width={'100%'}>
                            <Chip
                                label="Choose another User or Email"
                                color="error"
                                variant="outlined"
                                icon={<ErrorOutline />}
                                className='fadeIn '
                                sx={{ display: showError ? 'flex' : 'none' }}


                            />
                            <TextField
                                label="Name"
                                fullWidth
                                {...register('name', {
                                    required: 'Name required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>

                        {/* Surname */}
                        <Grid item xs={12} width={'100%'}>
                            <TextField
                                label="Surname"
                                fullWidth
                                {...register('surname', {
                                    required: 'Surname required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.surname}
                                helperText={errors.surname?.message}
                            />
                        </Grid>

                        {/* Box de edad, telefono, email, country */}
                        <Grid display={'flex'} width={'100%'} flexDirection={'column'} gap={1}>
                            {/* Age */}
                            <Grid item xs={12} display={'flex'} direction={'row'}>
                                <Typography width={"50%"} margin={'auto 0'}>
                                    Age
                                </Typography>
                                <TextField
                                    label="Age"
                                    fullWidth
                                    {...register('age', {
                                        required: 'Age required',
                                        minLength: { value: 2, message: 'Min 2 characteres' }
                                    })}
                                    error={!!errors.age}
                                    helperText={errors.age?.message}
                                />
                            </Grid>
                            {/* Telephone */}
                            <Grid item xs={12} display={'flex'} direction={'row'}>
                                <Typography width={"50%"} margin={'auto 0'}>
                                    Tel.
                                </Typography>
                                <TextField
                                    label="Telephone"
                                    fullWidth
                                    {...register('telephone', {
                                        required: 'Telephone required',
                                        minLength: { value: 2, message: 'Min 2 characteres' }
                                    })}
                                    error={!!errors.telephone}
                                    helperText={errors.telephone?.message}
                                />
                            </Grid>

                            {/* Country */}
                            <Grid item xs={12} display={'flex'} direction={'row'}>
                                <Typography width={"50%"} margin={'auto 0'}>
                                    Country
                                </Typography>
                                <TextField
                                    label="Country"
                                    fullWidth
                                    {...register('country', {
                                        required: 'Country required',
                                        minLength: { value: 2, message: 'Min 2 characteres' }
                                    })}
                                    error={!!errors.country}
                                    helperText={errors.country?.message}
                                />
                            </Grid>

                            {/* Email (debe ser autorellenado con los datos que tenemos del login) */}
                            <Grid item xs={12} display={'flex'} direction={'row'}>
                                <Typography width={"50%"} margin={'auto 0'}>
                                    Email
                                </Typography>
                                <TextField
                                    label="Email"
                                    fullWidth

                                    {...register('email', {
                                        required: 'Email required',
                                        validate: (value) => validations.isEmail(value),
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                {/* Box About me e imagenes(array) */}
                <Grid display={'flex'} direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-around'} padding={'40px 0'} gap={2}>
                    {/* Description(About me) */}
                    <Grid item xs={12} width={{ xs: '100%', sm: '32%' }} >
                        <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>About me</Typography>
                        <TextField
                            label="Description"
                            multiline
                            minRows={4}
                            fullWidth
                            {...register('description', {
                                required: 'Description required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />
                    </Grid>

                    {/* Images (Array) */}
                    <Grid item xs={12} width={{ xs: '100%', sm: '32%' }}>
                        <Button
                            component="label"
                            variant="contained"
                            fullWidth
                        >
                            <img alt="Imagen 1" width="100%" height="100%" />
                            <VisuallyHiddenInput
                                type="file"
                                multiple
                                accept="image/jpeg"

                                {...register('images', {
                                    required: false,

                                })}
                            />
                        </Button>
                    </Grid>

                </Grid>

                {/*Box de Actos y formacion */}
                <Grid display={'flex'} direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-around'} padding={'40px 0'}>
                    {/* Acts (Array) */}
                    <Grid item xs={12} display={'flex'} direction={'column'} width={{ xs: '100%', sm: '32%' }} gap={3}>
                        <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>One or More Acts</Typography>

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Acts"
                            multiline
                            minRows={4}
                            fullWidth
                            {...register('acts', {
                                required: 'Acts required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.acts}
                            helperText={errors.acts?.message}
                        />
                    </Grid>

                    {/* Formation (Array) */}
                    <Grid item xs={12} display={'flex'} direction={'column'} width={{ xs: '100%', sm: '32%' }} gap={3} justifyContent={'space-between'}>
                        <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>I did learn in: </Typography>

                        <TextField
                            label="Formation"
                            fullWidth
                            multiline
                            minRows={4}
                            {...register('formation', {
                                required: 'Formation required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.formation}
                            helperText={errors.formation?.message}
                        />
                    </Grid>
                </Grid>

                {/* Box de Habilidades, de experiencia laboral y de Actual sitio donde trabaja
                            Condicionar el el curriculo para que no sean obligatorios los datos que pidamos
                        */}
                <Grid display={'flex'} direction={{ sm: 'column', xs: 'column' }} justifyContent={'space-around'} padding={'40px 0'} gap={2}>
                    {/* Skills */}
                    <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>Skills</Typography>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Skills"
                            minRows={4}
                            multiline
                            fullWidth
                            {...register('skills', {
                                required: 'Skills required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.skills}
                            helperText={errors.skills?.message}
                        />
                    </Grid>

                    {/* WorkExperience */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>Work Experience</Typography>

                        <TextField
                            label="WorkExperience"
                            multiline
                            fullWidth
                            minRows={4}
                            {...register('workExperience', {
                                required: 'WorkExperience required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.workExperience}
                            helperText={errors.workExperience?.message}
                        />
                    </Grid>

                    {/* ActualWorkPlace */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h3' component="h3" sx={{ fontSize: "1rem", textAlign: "center", padding: '10px 10px' }}>Actual Work Place</Typography>

                        <TextField
                            label="ActualWorkPlace"
                            multiline
                            fullWidth
                            minRows={4}
                            {...register('actualWorkPlace', {
                                required: 'ActualWorkPlace required',
                                minLength: { value: 2, message: 'Min 2 characteres' }
                            })}
                            error={!!errors.actualWorkPlace}
                            helperText={errors.actualWorkPlace?.message}
                        />
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



export default FormCurriculum;
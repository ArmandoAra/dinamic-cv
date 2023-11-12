import { useContext, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';

import { validations } from '@/utils';
import { useForm } from 'react-hook-form';

import { ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { FormContext } from '@/context/form';


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

interface PropsCallback {
    onSubmit: (data: formCurriculumData) => void;
}

const FormCurriculum = () => {
    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<formCurriculumData>();
    const { createCurriculum } = useContext(FormContext)

    const onSubmitCurriculumForm = async ({
        name, surname, profession, age, telephone, email,
        country, acts, images, formation, img,
        description, skills, workExperience, actualWorkPlace
    }: formCurriculumData) => {
        setShowError(false)
        const { hasError, message } = await createCurriculum(
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

        router.replace('/');

    };



    return (
        <Grid item sm={6}>
            <form onSubmit={handleSubmit(onSubmitCurriculumForm)}>

                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Curriculum Form</Typography>
                        </Grid>

                        {/* Name */}
                        <Grid item xs={12}>
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
                                variant="filled"
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
                        <Grid item xs={12}>
                            <TextField
                                label="Surname"
                                variant="filled"
                                fullWidth
                                {...register('surname', {
                                    required: 'Surname required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.surname}
                                helperText={errors.surname?.message}
                            />
                        </Grid>

                        {/* Profession */}
                        <Grid item xs={12}>
                            <TextField
                                label="Profession"
                                variant="filled"
                                fullWidth
                                {...register('profession', {
                                    required: 'Profession required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.profession}
                                helperText={errors.profession?.message}
                            />
                        </Grid>

                        {/* Age */}
                        <Grid item xs={12}>
                            <TextField
                                label="Age"
                                variant="filled"
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
                        <Grid item xs={12}>
                            <TextField
                                label="Telephone"
                                variant="filled"
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
                        <Grid item xs={12}>
                            <TextField
                                label="Country"
                                variant="filled"
                                fullWidth
                                {...register('country', {
                                    required: 'Country required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.country}
                                helperText={errors.country?.message}
                            />
                        </Grid>

                        {/* Acts */}
                        <Grid item xs={12}>
                            <TextField
                                label="Acts"
                                variant="filled"
                                fullWidth
                                {...register('acts', {
                                    required: 'Acts required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.acts}
                                helperText={errors.acts?.message}
                            />
                        </Grid>

                        {/* Images */}
                        <Grid item xs={12}>
                            <TextField
                                label="Images"
                                variant="filled"
                                fullWidth
                                {...register('images', {
                                    required: 'Images required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.images}
                                helperText={errors.images?.message}
                            />
                        </Grid>

                        {/* Formation */}
                        <Grid item xs={12}>
                            <TextField
                                label="Formation"
                                variant="filled"
                                fullWidth
                                {...register('formation', {
                                    required: 'Formation required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.formation}
                                helperText={errors.formation?.message}
                            />
                        </Grid>

                        {/* Description */}
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                variant="filled"
                                fullWidth
                                {...register('description', {
                                    required: 'Description required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.description}
                                helperText={errors.description?.message}
                            />
                        </Grid>

                        {/* Skills */}
                        <Grid item xs={12}>
                            <TextField
                                label="Skills"
                                variant="filled"
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
                        <Grid item xs={12}>
                            <TextField
                                label="WorkExperience"
                                variant="filled"
                                fullWidth
                                {...register('workExperience', {
                                    required: 'WorkExperience required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.workExperience}
                                helperText={errors.workExperience?.message}
                            />
                        </Grid>

                        {/* ActualWorkPlace */}
                        <Grid item xs={12}>
                            <TextField
                                label="ActualWorkPlace"
                                variant="filled"
                                fullWidth
                                {...register('actualWorkPlace', {
                                    required: 'ActualWorkPlace required',
                                    minLength: { value: 2, message: 'Min 2 characteres' }
                                })}
                                error={!!errors.actualWorkPlace}
                                helperText={errors.actualWorkPlace?.message}
                            />
                        </Grid>

                        {/* Img */}
                        <Grid item xs={12}>
                            <TextField
                                label="Img"
                                variant="filled"
                                fullWidth
                                {...register('img', {
                                    required: false,

                                })}
                                error={!!errors.img}
                                helperText={errors.img?.message}
                            />
                        </Grid>


                        {/* Email */}
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="filled"
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
                </Box>
            </form>
        </Grid>


    )
}



export default FormCurriculum;
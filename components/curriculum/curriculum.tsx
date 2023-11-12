import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'


import Image from 'next/image';

//Icons
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { AuthContext, FormContext } from '@/context';
import { ICurriculumForm } from '@/interfaces';
import { set } from 'mongoose';

//interface
interface CurriculumData {
    data: ICurriculumForm;
}

//Datos de contacto
function createData(
    data: string,
    info: string,
) {
    return { data, info };
}


//Styles
const styles = {
    head_text: {
        'width': { xs: '80vw', sm: '50vw' },
        'fontFamily': 'sans-serif',
        'fontSize': { xs: '4vw', sm: '1.4vw' },
        'display': 'flex',
        'alignItems': 'flex-end',
        'padding': { xs: '2rem', sm: '0px' },

    },
    typography_title: {
        'display': 'flex',
        'margin': '0',
        'justifyContent': 'center',
        'fontSize': { xs: '6vw', sm: '2vw' },
        'boxShadow': '0px 4px 0px #ff9551',
        'width': { xs: '80vw', sm: 'inherit' }
    }
}


const Curriculum = () => {

    const { user, isLoggedIn } = useContext(AuthContext);
    const { getCurriculum, curriculum } = useContext(FormContext)

    useEffect(() => {
        if (isLoggedIn) {
            getCurriculum(user.email)
        }
        // eslint-disable-next-line
    }, [])

    const { name, surname, profession, age, telephone, email, img, country, acts, images, formation, description, skills, workExperience, actualWorkPlace, } = curriculum;


    const rows = [
        createData('Tel.', telephone.toString()),
        createData('Email', email),
        createData('From', country),

    ];

    return (
        <Box display='flex' flexDirection={'column'}  >
            {/* Primer nivel Imagen de perfil y datos de contacto */}
            <Grid container sx={{ width: '100vw', padding: '0px 40px', paddingTop: '90px', justifyContent: 'center', margin: '60px 0px' }} >
                <Grid item xs={12} sm={6} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-end' }, marginBottom: '15px' }}>
                    <Image priority={true} src={'/../../static/user/profile.jpg'} alt='User Profile Image'
                        style={{
                            width: '32vw',
                            height: '35vw',
                            objectFit: 'contain',
                        }}
                        width={300}
                        height={300}
                    />
                </Grid>

                <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'initial' }, display: 'flex', justifyContent: { xs: 'center', sm: 'initial' }, alignItems: 'center' }}  >
                    <Grid width={'80vw'}>
                        {/* Profession */}
                        <Typography variant="h5" component="h5" gutterBottom>
                            {profession}
                        </Typography>

                        {/* Name */}
                        <Typography variant="h3" component="h3" >
                            {name}
                        </Typography>

                        {/* Surname */}
                        <Typography variant="h3" component="h3" gutterBottom>
                            {surname}
                        </Typography>
                        <TableContainer  >
                            <Table aria-label="simple table">
                                <TableBody sx={{ display: { xs: 'flex', sm: 'table-row-group' }, flexDirection: { xs: 'column' }, alignItems: { xs: 'center ' }, marginTop: { xs: '10px', sm: '50px' } }}>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.data}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell scope="row">
                                                {row.data}
                                            </TableCell>
                                            <TableCell sx={{ marginLeft: '3vw', fontSize: '1.2rem' }} >{row.info}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Grid>

                </Grid>
            </Grid>

            {/* Segundo nivel About me e Imagenes */}
            <Grid container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', width: '100vw', padding: '0px 6vw', margin: '60px 0px' }} >
                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Typography sx={{ display: 'flex', margin: '0', justifyContent: 'center', fontSize: { xs: '6vw', sm: '2vw' }, boxShadow: '0px 4px 0px #ff9551', width: '80%' }} >
                        About me
                    </Typography>
                    <Typography padding={'45px'} >
                        {description}
                    </Typography>
                </Grid>
                <Grid item xs={12} gap={'5px'} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '0px' }}  >

                    <Grid item display={'flex'} gap={'5px'} >
                        <Grid item xs={6} ><Image src={'/../../static/user/profile.jpg'} alt='User Profile Image'
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '100% 0% 0% 0%',
                                boxShadow: '0px 0px 0px 5px #ff9551',
                            }}
                            width={300}
                            height={300}
                        />
                        </Grid>

                        <Grid item xs={6} ><Image src={'/../../static/user/profile.jpg'} alt='User Profile Image'
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '0% 100% 0% 0%',
                                boxShadow: '0px 0px 0px 5px #ff9551',
                            }}
                            width={300}
                            height={300}
                        />
                        </Grid>
                    </Grid>

                    <Grid display={'flex'} gap={'5px'}>
                        <Grid item xs={6} ><Image src={'/../../static/user/profile.jpg'} alt='User Profile Image'
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '0% 0% 0% 100%',
                                boxShadow: '0px 0px 0px 5px #ff9551',
                                objectFit: 'cover',
                            }}
                            width={300}
                            height={300}
                        />
                        </Grid>
                        <Grid item xs={6} ><Image src={'/../../static/user/profile.jpg'} alt='User Profile Image'
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '0% 0% 100% 0%',
                                boxShadow: '0px 0px 0px 5px #ff9551',
                                objectFit: 'cover',
                            }}
                            width={300}
                            height={300}
                        />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Tercer nivel Skills y Estudios */}
            {/* Hacer o buscar iconos que se ajusten al tipo de abilidad */}
            <Grid container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '50px 0px', sm: '0px' }, alignContent: 'center', width: '100vw', padding: '0px 6vw', margin: '60px 0px' }} >
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: { xs: '6vw', sm: '2vw' }, boxShadow: '0px 4px 0px #ff9551', width: '40%' }} >
                        Skills
                    </Typography>
                    <List >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={6} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    <Typography sx={styles.typography_title} >
                        I have studied at
                    </Typography>
                    <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '80vw', sm: 'inherit' } }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="On internet, some plataform, udemy youtube" sx={{ width: { xs: '80vw', sm: 'inherit' } }} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Oxford university, i did three years " sx={{ width: { xs: '80vw', sm: 'inherit' } }} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="En otro sitio que ahora no me acuerdo" sx={{ width: { xs: '80vw', sm: 'inherit' } }} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            {/* Cuarto nivel Last worked places y calendario */}
            <Grid container sx={{ width: '100vw', background: 'none', margin: '20px 0px', padding: '0px 6vw', gap: { xs: '20px 0px', sm: '0px' } }} >
                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} sx={{ flexDirection: 'column' }}>
                    <Typography sx={{ display: 'flex', margin: '0', justifyContent: 'center', alignItems: 'center', fontSize: { xs: '6vw', sm: '2vw' }, boxShadow: '0px 4px 0px #ff9551', width: 'inherit', flexDirection: { xs: 'column' } }} >
                        Last Worked Places
                    </Typography>
                    <List >
                        <ListItem>
                            <ListItemText
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                primary="2023"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                primary="2023"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                primary="2023"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} flexDirection={'column'} >
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Grid  >
                            <DateCalendar defaultValue={dayjs('2022-04-17')} readOnly />
                        </Grid>
                    </LocalizationProvider>
                </Grid>
            </Grid>

        </Box >

    )

}



export default Curriculum;

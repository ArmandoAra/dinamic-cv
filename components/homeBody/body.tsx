import React from 'react'
//Next
import Image from 'next/image';

//Mui
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




//Styles
const Item = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
}));

//Grid for the body left side
function createData(
    name: string,
    calories: string,
) {
    return { name, calories };
}

const rows = [
    createData('{', 'lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur.'),
    createData('{', 'lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur.'),
    createData('{', 'lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur.'),
];

//Styles
const body_Styles = {
    item_container: {
        'display': 'flex',
        'flexDirection': { xs: 'column', sm: 'row' },
        'alignContent': { xs: 'center' },
        'marginLeft': '0px',
        'width': '100vw',
        'gap': { xs: '30px', sm: '0px' },
        'padding': { xs: '40px 36px', sm: '40px 60px' },
        'alignItems': 'center',
    },
    grid_container: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'width': '80vw',
        'maxWidth': '100%',
        'boxShadow': { xs: '-27px 64px 500px #ff955178', sm: '23px -147px 300px #ff955178' },
    },
    tableCell_symbol: {
        'fontSize': { xs: '15.5vw', sm: '5.5vw' },
        'borderBottom': 'none',
        'padding': '0px',
        'color': '#FF9551',
    },
    tableCell_text: {
        'width': '100%',
        'fontSize': { xs: '4vw', sm: '1.3vw' },
        'textAlign': { xs: 'center', sm: 'left' },
        'borderBottom': 'none',
        'padding': '10px',
        'border': 'none',
    },
}

const HomeBody = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Item container columnSpacing={{ xs: 1, sm: 2 }} sx={body_Styles.item_container}  >
                <Grid xs={6} sx={body_Styles.grid_container}>
                    <TableContainer >
                        <Table >
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} >
                                        <TableCell sx={body_Styles.tableCell_symbol}>{row.name}</TableCell>
                                        <TableCell sx={body_Styles.tableCell_text}>{row.calories}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={6} display={'flex'} justifyContent={'center'} width={'40vw'}>
                    <Image src={'/../../static/images/example.png'} alt='Curriculum example'
                        style={{
                            width: '36vw',
                            height: 'inherit',
                            boxShadow: ' 0px 0px 5px #FF9551',
                        }}
                        width={500}
                        height={500}
                    />
                </Grid>
                <Button variant="contained" color="secondary" href='/user/form' >
                    Create
                </Button>
            </Item>
        </Box>
    )
}

export default HomeBody;
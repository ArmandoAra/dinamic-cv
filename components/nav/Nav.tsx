import React, { useContext, useState } from 'react'

//Next
import Image from 'next/image'
import router, { useRouter } from 'next/router';
import Link from 'next/link';

//Context
import { UIContext } from '@/context/ui';

//Styles
import '../../styles/nav.module.css';

//Components
import { ClearOutlined, SearchOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, Box, Button, Input, InputAdornment, IconButton } from '@mui/material';
import { AuthContext } from '@/context';

const Nav = () => {

    //Obteniendo la ruta actual
    const { asPath } = useRouter()

    //Manejando el menu lateral
    const { openSideBar } = useContext(UIContext)
    const { sideMenuOpen, closeSideBar } = useContext(UIContext)

    // Manejando el estado de autenticacion
    const { isLoggedIn, logoutUser } = useContext(AuthContext)

    //Buscador
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    //Funcion para navegar a una pagina(cuando hagamos la api de busqueda)
    const navigateTo = (url: string) => { router.push(url); closeSideBar(); }


    return (
        <AppBar>
            <Toolbar >

                <Link href='/' >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', textDecoration: 'none' }}>
                        <Image src='/../../static/logo/DCV_Negro.png' alt='logo' width={50} height={50} />
                    </Box>
                </Link>


                <Box flex={1} />

                <Box sx={{
                    display: isSearchVisible ? 'none' : { xs: 'none', sm: 'flex' },
                    flexDirection: 'row',
                    alignContent: 'center',
                    textDecoration: 'none'
                }}
                    className='fade'
                >
                    {/* Home */}
                    <Link href='/' >
                        <Button
                            color={(asPath === '/') ? 'primary' : 'secondary'}
                            className='fade'
                        >
                            Home
                        </Button>
                    </Link>

                    {isLoggedIn ?
                        <>
                            <Link href='/user/profile'>
                                <Button
                                    color={(asPath === '/user/profile') ? 'primary' : 'secondary'}
                                    className='fadeIn'
                                >
                                    My CV
                                </Button>
                            </Link>
                            {/* Log out */}
                            <Link href='/'>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => logoutUser()}
                                >
                                    Log out
                                </Button>
                            </Link>
                        </>

                        :
                        <>
                            <Link href='/auth/login'>
                                <Button
                                    color={(asPath === '/auth/login') ? 'primary' : 'secondary'}
                                    className='fade'
                                >
                                    Login
                                </Button>
                            </Link>


                            <Link href='/auth/register'>
                                <Button
                                    color={(asPath === '/auth/register') ? 'primary' : 'secondary'}
                                    className='fade'
                                >
                                    Register
                                </Button>
                            </Link>
                        </>


                    }





                </Box>


                <Box flex={1} />

                {/* Small Screens */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={openSideBar}
                >
                    <SearchOutlined />
                </IconButton>



                <Button
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={openSideBar}
                >
                    Menú
                </Button>

            </Toolbar>

        </AppBar>
    )
};

export default Nav;
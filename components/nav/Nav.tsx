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

const Nav = () => {

    //Obteniendo la ruta actual
    const { asPath } = useRouter()

    //Manejando el menu lateral
    const { openSideBar } = useContext(UIContext)
    const { sideMenuOpen, closeSideBar } = useContext(UIContext)

    //Buscador
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    //Funcion para navegar a una pagina(cuando hagamos la api de busqueda)
    const navigateTo = (url: string) => { router.push(url); closeSideBar(); }
    //Implementar cuando tengamos la api lista con los datos
    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return; //Evaluamos que no este vacio el campo de busqueda
        navigateTo(`/search/${searchTerm}`);
    }

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

                    <Link href='/' >
                        <Button
                            color={(asPath === '/') ? 'primary' : 'secondary'}
                            className='fade'
                        >
                            Home
                        </Button>
                    </Link>


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


                    <Link href='/user/profile'>
                        <Button
                            color={(asPath === '/user/profile') ? 'primary' : 'secondary'}
                            className='fadeIn'
                        >
                            My CV
                        </Button>
                    </Link>

                </Box>


                <Box flex={1} />
                {/* Pantallas  grandes */}
                {
                    isSearchVisible
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        :
                        (
                            <IconButton
                                onClick={() => setIsSearchVisible(true)}
                                className="fadeIn"
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                            >
                                <SearchOutlined />
                            </IconButton>
                        )
                }
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
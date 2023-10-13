import React, { useContext, useState } from 'react'

//Next
import Image from 'next/image'
import router, { useRouter } from 'next/router';

//Context
import { UIContext } from '@/context/ui';

//Components
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, Box, Typography, Button, Input, InputAdornment, IconButton, Badge } from '@mui/material';
import Link from 'next/link';

const Nav = () => {

    // Haciendo que los botones se modifiquen dependiendo en la url que estamos
    const { asPath } = useRouter()

    //Manejando el menu lateral
    const { openSideBar } = useContext(UIContext)


    const { sideMenuOpen, closeSideBar } = useContext(UIContext)


    const navigateTo = (url: string) => {
        router.push(url);
        closeSideBar();
    }

    //value y onChange del input respectivamete para ir controlando el valor del input
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false); //Para mostrar el input de busqueda en pantallas grandes

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
                    className='fadeIn'
                >

                    <Link href='/' >
                        <Button color={(asPath === '/') ? 'primary' : 'info'} >Home</Button>
                    </Link>


                    <Link href='/login'>
                        <Button color={(asPath === '/login') ? 'primary' : 'info'} >Login</Button>
                    </Link>


                    <Link href='/register'>
                        <Button color={(asPath === '/register') ? 'primary' : 'info'}>Register</Button>
                    </Link>


                    <Link href='/user/profile'>
                        <Button color={(asPath === '/user/profile') ? 'primary' : 'info'}>My CV</Button>
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
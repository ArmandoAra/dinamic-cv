import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import Nav from '../nav/Nav';
import Menu from '../nav/Menu';

interface Props extends PropsWithChildren {
    title: string;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                {/* NavBar and Sidebar */}
                <nav>
                    <Nav />
                </nav>
                <aside>
                    <Menu />
                </aside>
                <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
                    {children}
                </Box>
            </main>

        </>
    )
}
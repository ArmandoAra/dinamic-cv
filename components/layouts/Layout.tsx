import { FC } from "react"

//Next
import Head from "next/head"

//Components
import Nav from "../nav/Nav"
import Menu from '../nav/Menu';
import { Box } from "@mui/material";
import { IUser } from "@/interfaces";




//Interface
interface LayoutProps {
    title?: string,
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title : 'Dinamic CV'}</title>
                <meta name="description" content="Dinamic Create Curriculum Vitae" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* NavBar and Sidebar */}
            <nav>
                <Nav />
            </nav>
            <aside>
                <Menu />
            </aside>

            {/* TODO: Quitar el estilo en linea */}
            <main style={{
                display: 'flex',
                height: '100vh',
                marginTop: '15vh',
            }}>
                {children}
            </main>
        </>
    )
}

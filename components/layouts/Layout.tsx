import { FC } from "react"

//Next
import Head from "next/head"

//Components
import Nav from "../nav/Nav"
import Menu from '../nav/Menu';


//Interface
interface LayoutProps {
    title?: string,
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (

        <div>
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
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>
        </div>
    )
}

import { useContext, useEffect, useState } from 'react';

//Context
import { AuthContext, FormContext } from '@/context';


//Components
import { Layout } from '@/components/layouts/Layout';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';
import Curriculum from '@/components/curriculum/curriculum';




const Profile = () => {

    const { user, isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <Layout title={isLoggedIn ? user.name : "User required"}>
                <Nav />
                {isLoggedIn ?
                    <Curriculum />
                    : (<h1>Login or register</h1>)}
                <Footer />
            </Layout>
        </>
    )
}



export default Profile;

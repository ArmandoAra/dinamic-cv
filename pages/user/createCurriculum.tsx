
import React from 'react'
import { FormProvider } from '@/context/form';

//Components
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Form from '@/components/form/form';

const CreateCurriculum = () => {



    return (
        <div>
            <FormProvider>
                <Nav />
                <Form />
                <Footer />
            </FormProvider>
        </div>
    )
}

export default CreateCurriculum;
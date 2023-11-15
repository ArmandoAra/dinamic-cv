
import React from 'react'
import { FormProvider } from '@/context/form';

//Components
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Form from '@/components/form/form';
import FormCurriculumPrueba from '@/components/pruebaForm/pruebaform';

const CreateCurriculum = () => {



    return (
        <div>
            <FormProvider>
                <Nav />
                <Form />
                {/* <FormCurriculumPrueba /> */}
                <Footer />
            </FormProvider>
        </div>
    )
}

export default CreateCurriculum;
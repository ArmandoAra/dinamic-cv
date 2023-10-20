import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FormContext } from '@/context/form';
import CurriculumForm from '@/components/curriculum/curriculumForm';

interface formCurriculumData {
    name: string;
    surname: string;
    age: number;
    telephone: number;
    email: string;
    country: string;
    acts: string[];
    images: string[];
    formation: string;
    description: string;
    skills: string[];
    workExperience: string[];
    actualWorkPlace: string;
}

const Form = () => {
    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<formCurriculumData>();
    const { createCurriculum } = useContext(FormContext)

    const onSubmitCurriculumForm = async ({
        name, surname, age, telephone, email,
        country, acts, images, formation,
        description, skills, workExperience, actualWorkPlace
    }: formCurriculumData) => {

        setShowError(false)
        const { hasError, message } = await createCurriculum(
            name, surname, age, telephone, email,
            country, acts, images, formation,
            description, skills, workExperience, actualWorkPlace
        );

        if (hasError) {
            setShowError(true)
            setErrorMessage(message || 'Error al crear el curriculum')
            setTimeout(() => {
                setShowError(false)
            }, 5000);
            return;
        }

        router.replace('/');

    };


    return (
        <div>
            <CurriculumForm />
        </div>
    )
}

export default Form;
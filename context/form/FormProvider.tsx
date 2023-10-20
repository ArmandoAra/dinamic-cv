
import { FC, use, useEffect, useReducer } from 'react';
import { FormContext, formReducer } from './';

import Cookies from 'js-cookie';
import { ICurriculumForm } from '@/interfaces';
import { cvApi } from '@/api';
import axios from 'axios';


interface CurriculumProviderProps {
    children: React.ReactNode;
}

export interface CurriculumState {
    curriculums: ICurriculumForm[];
}

const CURRICULUM_INITIAL_STATE: CurriculumState = {
    curriculums: []
}

export const FormProvider = ({ children }: CurriculumProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, CURRICULUM_INITIAL_STATE);

    // Methods
    const createCurriculum = async (
        name: string, surname: string, age: number,
        telephone: number, email: string, country: string,
        acts: string[], images: string[], formation: string,
        description: string, skills: string[],
        workExperience: string[], actualWorkPlace: string,): Promise<{ hasError: boolean; message?: string; }> => {

        try {

            const { data } = await cvApi.post<ICurriculumForm>('/curriculum', {
                name, surname, age, telephone, email,
                country, acts, images, formation,
                description, skills, workExperience, actualWorkPlace
            })
            dispatch({
                type: 'ADD-CURRICULUM',
                payload: data,
            })
            return {
                hasError: false,
                message: 'Curriculum creado correctamente'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: 'Error al registrar el usuario'
                }
            }
            return {
                hasError: true,
                message: 'Error al registrar el usuario'
            }
        }

    }






    return (
        <FormContext.Provider value={{
            ...state,
            // methods
            createCurriculum,
        }}>
            {children}
        </FormContext.Provider>
    )

}

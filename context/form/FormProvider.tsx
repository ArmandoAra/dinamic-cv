
import { FC, use, useEffect, useReducer } from 'react';
import { FormContext, formReducer } from './';


import { ICurriculumForm } from '@/interfaces';
import { cvApi } from '@/api';
import axios from 'axios';


interface CurriculumProviderProps {
    children: React.ReactNode;
}

export interface CurriculumState {
    curriculum: ICurriculumForm;
}

const CURRICULUM_INITIAL_STATE: CurriculumState = {
    curriculum: {
        name: '',
        surname: '',
        profession: '',
        age: 0,
        telephone: 0,
        email: '',
        country: '',
        acts: [],
        images: [],
        formation: '',
        description: '',
        img: '',
        skills: [],
        workExperience: [],
        actualWorkPlace: '',
    }
}

export const FormProvider = ({ children }: CurriculumProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, CURRICULUM_INITIAL_STATE);

    // Methods
    const createCurriculum = async (
        name: string, surname: string, profession: string, age: number,
        telephone: number, email: string, country: string,
        acts: string[], images: string[], formation: string,
        description: string, skills: string[],
        workExperience: string[], actualWorkPlace: string,): Promise<{ hasError: boolean; message?: string; }> => {


        try {

            const { data } = await cvApi.post<ICurriculumForm>('/curriculum', {
                name, surname, profession, age, telephone, email,
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
                    message: 'Error al crear el curriculum'
                }
            }
            return {
                hasError: true,
                message: 'Error al crear el curriculum'
            }
        }

    }

    const getCurriculum = async (email: string) => {
        try {
            const { data } = await cvApi.get<ICurriculumForm>(`/curriculum?email=${email}`)
            dispatch({
                type: 'GET-CURRICULUM',
                payload: data,
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: 'Error al obtener el curriculum'
                }
            }
            return {
                hasError: true,
                message: 'Error al obtener el curriculum'
            }
        }
    }




    return (
        <FormContext.Provider value={{
            ...state,
            // methods
            createCurriculum,
            getCurriculum,
        }}>
            {children}
        </FormContext.Provider>
    )

}

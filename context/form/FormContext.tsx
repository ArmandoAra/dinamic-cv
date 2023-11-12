
import { createContext } from 'react';
import { ICurriculumForm } from '@/interfaces';

interface ContextProps {
    curriculum: ICurriculumForm;

    //Methods
    createCurriculum: (name: string, surname: string, profession: string, age: number, telephone: number, email: string, img: string, country: string, acts: string[], images: string[], formation: string, description: string, skills: string[], workExperience: string[], actualWorkPlace: string,) => Promise<{ hasError: boolean, message?: string }>;
    getCurriculum: (email: string) => Promise<{ hasError: boolean, message?: string, data: ICurriculumForm }>;
}

export const FormContext = createContext({} as ContextProps);
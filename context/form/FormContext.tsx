
import { createContext } from 'react';
import { ICurriculumForm } from '@/interfaces';

interface ContextProps {
    curriculums: ICurriculumForm[];

    //Methods
    createCurriculum: (name: string, surname: string, age: number, telephone: number, email: string, country: string, acts: string[], images: string[], formation: string, description: string, skills: string[], workExperience: string[], actualWorkPlace: string,) => Promise<{ hasError: boolean, message?: string }>;
}

export const FormContext = createContext({} as ContextProps);
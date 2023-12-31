
import { ICurriculumForm } from '@/interfaces';
import { CurriculumState } from '.';

type AuthActionType =
    | { type: 'ADD-CURRICULUM', payload: ICurriculumForm }
    | { type: 'GET-CURRICULUM', payload: ICurriculumForm }
    | { type: 'UPDATE-CURRICULUM', payload: ICurriculumForm }


export const formReducer = (state: CurriculumState, action: AuthActionType): CurriculumState => {

    switch (action.type) {
        case 'ADD-CURRICULUM':
            // regresar un nuevo estado
            return {
                ...state,
                curriculum: action.payload
            }
        case 'UPDATE-CURRICULUM':
            // regresar un nuevo estado
            return {
                ...state,
                curriculum: action.payload
            }
        case 'GET-CURRICULUM':
            // regresar un nuevo estado
            return {
                ...state,
                curriculum: action.payload
            }

        default:
            // regresar el estado sin modificar
            return state;
    }
}

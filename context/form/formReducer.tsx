
import { ICurriculumForm } from '@/interfaces';
import { CurriculumState } from '.';

type AuthActionType =
    | { type: 'ADD-CURRICULUM', payload: ICurriculumForm }


export const formReducer = (state: CurriculumState, action: AuthActionType): CurriculumState => {

    switch (action.type) {
        case 'ADD-CURRICULUM':
            // regresar un nuevo estado
            return {
                ...state,
                curriculums: [...state.curriculums, action.payload]
            }

        default:
            // regresar el estado sin modificar
            return state;
    }
}

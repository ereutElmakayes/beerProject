import { RESET_MODAL, SET_MODAL_CHILD, SET_MODAL_STATE } from "../actions/modalActions";


const initialState: ModalReducerState = {
    isOpen: false,
    child: undefined
}

const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MODAL_STATE:
            return {
                ...state,
                isOpen: action.value
            }
        case SET_MODAL_CHILD:
            return {
                ...state,
                child: action.value
            }
        case RESET_MODAL:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export interface ModalReducerState {
    isOpen: boolean;
    child: any;
}

export default modalReducer;
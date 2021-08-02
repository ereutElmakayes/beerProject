export const SET_MODAL_STATE = "SET_MODAL_STATE";
export const SET_MODAL_CHILD = "SET_MODAL_CHILD";
export const RESET_MODAL = "RESET_MODAL";

export const setModalState = (isOpen: boolean) => {
    return { type: SET_MODAL_STATE, value: isOpen }
}

export const setModalChild = (child: any) => {
    return { type: SET_MODAL_CHILD, value: child }
}

export const resetModal = () => {
    return { type: RESET_MODAL }
}

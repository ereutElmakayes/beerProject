import './Modal.scss';
import ModalProps from './ModalProps';
import { Modal as BSModal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from '../../../store/actions/modalActions';
import { IoMdClose as CloseIcon } from "react-icons/io";
const Modal = (props: ModalProps) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(resetModal())
    }
    const { isOpen, child } = useSelector((state: any) => state.modal);
    return (
        <BSModal show={isOpen}  size={'xl'} centered>
            <div className="modal-header">
                     <CloseIcon className="close-icon" onClick={closeModal} />
                </div>
                <div className="modal-body">
                    {child}
                </div>
        </BSModal>
    )
}

export default Modal;
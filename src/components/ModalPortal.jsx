
import { createPortal } from "react-dom";
/**
 * Portal for rendering modals outside DOM hierarchy.
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
const ModalPortal = ({ children }) => {
    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
        console.error("Modal root not found!");
        return null;
    }

    return createPortal(children, modalRoot);
};

export default ModalPortal;
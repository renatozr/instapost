import PropTypes from "prop-types";
import styles from "../styles/Modal.module.css";

function Modal({ isOpen, onClose, children }) {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div onClick={handleOutsideClick} className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Modal;

import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ setOpen, heading, children }) => {
  const handleClose = () => {
    setOpen(false);
  };

  
    return (
      <div className="modal-container">
        <div className="modal__wrapper">
          <div className="modal-content">
            <div className="modal__heading">
              <h2>{heading}</h2>
              <span className="close__icon" onClick={handleClose}>
                &#9747;
              </span>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    );

};

Modal.propTypes = {
  heading: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

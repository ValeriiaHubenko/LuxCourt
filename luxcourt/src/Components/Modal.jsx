import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PropTypes from 'prop-types';

const CustomModal = ({ show, handleClose, handleSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setIsSubmitted(true);
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content py-3" >
          <div className="modal-header">
            <h3 className="modal-title fw-bold text-center mx-auto">{isSubmitted ? 'Thank You!' : 'Join our Tennis Club 🎾'}</h3>
            <button type="button" className="btn-close custom-close-btn" aria-label="Close" onClick={() => { handleClose(); setIsSubmitted(false); }}></button>
          </div>
          <div className="modal-body m-2">
            {isSubmitted ? (
              <p className="text-center m-1">Welcome to our <b>LuxCourt</b> Tennis Club!🎾 <br></br>
                We will stay in touch with you soon!</p>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" name="fullName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                  <input type="number" className="form-control" id="mobileNumber" name="mobileNumber" required />
                </div>
                <button type="submit" className="btn btn-success px-4 fw-bold">Send</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CustomModal;

import { useState } from 'react';
import CustomModal from '/src/Components/Modal.jsx';

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Define your submit logic here
    console.log('Form submitted');
  };

  return (
    <>
      <section className="py-lg-3 mt-lg-5 mb-lg-3 mb-sm-0 py-sm-4 mt-sm-5">
        <div className="bg-image container-fluid d-flex justify-content-center my-lg-5 mb-sm-5">
          <div className="d-block text-center">
            <h1 className="text-center display-5 fw-bold text-light mx-sm-3 mx-lg-0">Interested in becoming a member of our Club?</h1>
            <button
              className="btn btn-success btn-style border-light btn-lg px-lg-5 px-sm-4 mt-3 fw-bold"
              onClick={handleShow}
              type="button"
            >
              Join us now
            </button>
          </div>
        </div>
      </section>
      <CustomModal handleClose={handleModalClose} show={showModal} handleSubmit={handleSubmit} />
    </>
  );
};


export default Banner;

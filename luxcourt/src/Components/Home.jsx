import { useEffect } from "react";
import PropTypes from "prop-types";

const Home = ({ handleShow }) => {
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector(".bgimage");
      const offset = window.scrollY;
      bg.style.backgroundPositionY = offset * 0.1 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home">
      <div className="bgimage container-fluid mt-0">
        <div className="herotext p-lg-5 my-lg-5 ms-lg-5 mx-sm-5 mt-sm-5 d-sm-flex flex-sm-column col-sm-10 justify-content-center align-items-sm-center align-items-lg-start">
          <h1 className="display-5 fw-bold text-light mb-3 text-sm-center text-lg-start ms-lg-4">
            Welcome to <span className="fst-italic">LuxCourt</span> Club
          </h1>
          <h2 className="col-lg-8 col-sm-9 fs-4 text-light fw-medium mb-3 text-center text-lg-start ms-lg-4">
            Experience Tennis with us like never before at our Exclusive Club
          </h2>
          <button
            className="btn btn-success btn-style border-light btn-lg px-lg-5 px-sm-4 mt-3 mt-lg-3 fw-bold ms-lg-4"
            onClick={handleShow}
            type="button"
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default Home;

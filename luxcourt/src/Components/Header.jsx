import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleShow }) => {
  return (
    <>
    <header className="fixed-top bg-light">
        <nav className="navbar navbar-expand-md navbar-light bg-white py-lg-3 py-sm-3 border-bottom border-light-subtle">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fst-italic" href="#home">
              <img
                src="/src/images/tennis-ball-310082_640.png"
                alt=""
                width="24"
                height="24"
                className="d-inline-block align-text-top mx-2 ms-lg-3"
              />
              LuxCourt
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav"
              aria-controls="nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav me-4 mb-2 mb-md-0 ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-dark link-success me-1 ms-sm-2 mt-sm-1 mt-md-0 mt-lg-0"
                    href="#about"
                  >
                    About
                  </a>
                </li>

                 <li className="dropdown">
                  <div
                    className="nav-item"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span
                      className="fw-bold nav-link dropdown-toggle text-dark link-success ms-sm-2 ms-md-1"
                    >
                      Programs
                    </span>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#programs">
                        Private coaching
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#programs">
                        Group lessons
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#programs">
                        Tournaments
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-dark link-success ms-md-1 ms-lg-1 me-lg-1 ms-sm-2"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-dark link-success ms-sm-2 ms-md-1 ms-lg-1"
                    href="#gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold text-dark link-success ms-sm-2 ms-md-1"
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>

              <div className="d-none d-md-block">
                <button
                  className="btn btn-success me-4 ms-lg-1 me-sm-3 fw-bold"
                  type="button"
                  onClick={handleShow}
                >
                  Join us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default Header;

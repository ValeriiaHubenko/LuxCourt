const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto pt-lg-5 pt-sm-4 pb-lg-3 pb-sm-2 bg-light d-flex">
        <div className="container-fluid ms-lg-3 mt-sm-2 mt-md-3 mt-lg-0">
          <a className="navbar-brand fw-bold fst-italic fs-5" href="#home">
            <img
              src="/src/images/tennis-ball-310082_640.png"
              alt=""
              width="22"
              height="22"
              className="d-inline-block align-text-top mx-2 ms-lg-3"
            />
            LuxCourt
          </a>

          <p className="ms-lg-3 ms-sm-2 mt-lg-1 mt-md-2 mt-sm-3 fs-lg-3 fs-sm-2">
            2024. All rights reserved.
          </p>
        </div>

        <ul className="navbar-nav ms-auto d-flex flex-sm-row flex-md-row flex-sm-wrap col-sm-6 col-md-5 col-lg-4 justify-content-center flex-lg-row mt-lg-0 mt-md-1 mt-sm-0 mb-sm-3 mb-md-3">
          <li className="nav-item">
            <a
              className="nav-link fw-bold text-dark me-lg-3 link-success"
              href="#about"
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-bold text-dark link-success ms-lg-3 me-lg-3 ms-sm-4"
              href="#programs"
            >
              Programs
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-bold text-dark link-success ms-lg-3 me-lg-3 ms-sm-4"
              href="#features"
            >
              Features
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-bold text-dark link-success ms-lg-3 me-lg-3 ms-sm-3 me-sm-4 pt-sm-1  pt-md-1 pt-lg-2"
              href="#gallery"
            >
              Gallery
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-bold text-dark link-success ms-lg-3 ms-sm-3 me-md-4 me-sm-4 pt-lg-2 pt-md-1 pt-sm-1 "
              href="#blog"
            >
              Blog
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;

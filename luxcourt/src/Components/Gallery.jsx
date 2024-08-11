import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Gallery = () => {
  return (
    <section id="gallery">
      <section className="container mb-5 pb-lg-5 pb-sm-4 component-container">
        <h1 className="display-5 fw-bold text-center text-dark mb-lg-5 mb-sm-4">
          Gallery
        </h1>

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img
                src="/src/images/moises-alex-WqI-PbYugn4-unsplash.jpg"
                className="d-block w-100 h-140"
                alt="Slide 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/src/images/samuel-elias-nadler--JzHSIzNYnU-unsplash.jpg"
                className="d-block w-100 h-140"
                alt="Slide 2"
              />
            </div>

            <div className="carousel-item" data-bs-interval="1000">
              <img
                src="/src/images/chino-rocha-ryhFixPDncY-unsplash (1).jpg"
                className="d-block w-100 h-140"
                alt="Slide 3"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/src/images/chino-rocha-v8pTbZ88OXI-unsplash.jpg"
                className="d-block w-100 h-140"
                alt="Slide 4"
              />
            </div>

          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Gallery;

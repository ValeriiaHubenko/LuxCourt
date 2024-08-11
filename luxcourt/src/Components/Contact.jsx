
const Contact = () => {
  
  return (
    <div className="mb-5 pb-2 text-center">
    <h1 className="display-5 fw-bold text-center text-dark mb-4">Contact </h1>
    <div className="d-flex flex-row align-items-start justify-content-center mb-4 pt-1">

          <div className="col">
          <div className="bg-success align-items-center rounded-circle mx-auto mb-3" style={{ width: "18px", height: "18px" }}></div>
            <h4 className="fw-bold">Mobile phone:</h4>
            <p>+49 334 8103040</p>
            </div>

          <div className="col">
            <div className="bg-success align-items-center rounded-circle mx-auto mb-3" style={{ width: "18px", height: "18px" }}></div>
            <h4 className="fw-bold">E-mail:</h4>
            <p>luxcourt@gamil.com</p>
            </div>
          <div className="col">
            <div className="bg-success align-items-center rounded-circle mx-auto mb-3" style={{ width: "18px", height: "18px" }}></div>
            <h4 className="fw-bold">Address:</h4>
            <p>123 Hauptstraße, 20095 Hamburg</p>
          </div>
          <div className="col">
            <div className="bg-success align-items-center rounded-circle mx-auto mb-3" style={{ width: "18px", height: "18px" }}></div>
            <h4 className="fw-bold">Open Hours:</h4>
            <p>Every day: 9am - 9pm</p>
            </div>  
    </div>
    </div>
  );
};

  

export default Contact;

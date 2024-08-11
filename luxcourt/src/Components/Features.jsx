import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          fill="currentColor"
          className="bi bi-stack text-light m-2"
          viewBox="0 0 16 16"
        >
          <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/>
          <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/>
        </svg>
      ),
      title: "Unique Courts State",
      description: "Immerse yourself in the game on our meticulously maintained courts equipped with the latest technology.",
      link: "#"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-house-heart-fill text-light m-2"
          viewBox="0 0 16 16"
        >
          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
          <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
        </svg>
      ),
      title: "Clubhouse Retreat",
      description: "Relax and unwind in our luxurious clubhouse, complete with a sophisticated lounge and bar.",
      link: "#"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-person-arms-up text-light m-2"
          viewBox="0 0 16 16"
        >
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
        </svg>
      ),
      title: "Fitness Center",
      description: "Stay in top shape with access to our fully equipped fitness center, designed to complement your tennis training.",
      link: "#"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-cart3 text-light m-2"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      ),
      title: "Pro Shop",
      description: "The LuxCourt Tennis Club Pro Shop offers top-quality tennis gear, apparel, accessories, expert guidance, exclusive offers, and convenient accessibility.",
      link: "#"
    }
  ];

  return (
    <section id="features">
    <div className="container pt-lg-4 pt-sm-3 mt-5 mb-lg-4 mb-sm-5 component-container" id="featured-4">
      <h1 className="fw-bold text-center pb-sm-2 pb-lg-3" id="features">Our Features</h1>
      <div className="row g-lg-4 pt-2 pb-lg-4 row-cols-1 row-cols-lg-4">
        {features.map((feature, index) => (
           <div key={index} className="feature col d-flex flex-column align-items-center text-center p-3">
           <div className="feature-icon bg-success bg-gradient mb-3 d-flex justify-content-center align-items-center rounded-circle" style={{ width: "65px", height: "65px" }}>
             {feature.icon}
           </div>
            <h3 className="fw-bold mb-1">{feature.title}</h3>
            <hr className="w-75 my-3"/>
            <p className="mb-lg-3 mb-sm-1 mx-sm-5 mx-lg-0">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Features;

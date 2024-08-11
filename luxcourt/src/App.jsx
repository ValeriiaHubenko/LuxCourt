import Header from "/src/Components/Header.jsx";
import Home from "/src/Components/Home.jsx";
import About from "/src/Components/About.jsx";
import Footer from "/src/Components/Footer.jsx";
import Program from "/src/Components/Program.jsx";
import Gallery from "/src/Components/Gallery.jsx";
import CustomModal from "/src/Components/Modal.jsx";
import Features from "/src/Components/Features.jsx";
import Banner from "/src/Components/Banner.jsx";
import Blog from "/src/Components/Blog.jsx";
import Contact from "/src/Components/Contact.jsx";
import { useState } from "react";
import "/src/styles/Home.scss";

function App() {
  const [showCustomModal, setShowCustomModal] = useState(false);

  const handleShowCustomModal = () => setShowCustomModal(true);
  const handleCloseCustomModal = () => setShowCustomModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
  };

  return (
    <>
      <Header handleShow={handleShowCustomModal} />
      <main data-bs-spy="scroll" data-bs-target="#nav" className="App">
        <CustomModal
          show={showCustomModal}
          handleClose={handleCloseCustomModal}
          handleSubmit={handleSubmit}
        />
        <Home handleShow={handleShowCustomModal} />
        <About />
        <Program />
        <Features />
        <Gallery />
        <Blog />
        <Banner handleShow={handleShowCustomModal} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

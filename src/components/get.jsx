import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Get = () => {

  const handleTabClick = (tab) => {
    window.scrollTo(0, 0);
};
  return (
    <>
      <section className="get position-relative py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="get-menu col-12 d-flex justify-content-center justify-content-lg-between flex-wrap rounded-5">
              <div
                className="get-box col-md-12 col-lg-4 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0 wow animate__animated animate__fadeInLeft"
              >
                <div className="get-icon me-0 me-lg-3 mb-2 mb-xl-0">
                  <Link to="tel:+918200845977" className="d-flex justify-content-center align-items-center">
                    <FaPhoneAlt className='text-light' />
                  </Link>
                </div>
                <div className="get-icon-center text-center text-lg-start">
                  <Link to="tel:+918200845977" className="text-white text-decoration-none">
                    GET A FREE CONSULTATION
                  </Link>
                  <p className="mb-0 text-white">+91 82008 45977</p>
                </div>
              </div>
              <div className="get-icon col-md-12 col-lg-4 text-center mb-4 mb-lg-0 wow animate__animated animate__fadeInDown">
                <p className="mb-3 mb-sm-0">
                We’re here to answer your questions, discuss your ideas, and help your business grow. Reach out to us anytime we’d love to hear from you!
                </p>
              </div>
              <div
                className="get-button col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center wow animate__animated animate__fadeInRight"
              >
                <div className="get_encar">
                  <Link onClick={handleTabClick} to="/contact" className=" d-flex align-items-center text-decoration-none">Make Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;

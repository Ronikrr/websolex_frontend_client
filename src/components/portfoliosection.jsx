import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import FeedbackMessage from "./feedback";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PortfolioSection = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [activeTab, setActiveTab] = useState("web design");
  const [categories, setCategories] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(4);
  const [feedback, setFeedback] = useState({ message: "", type: "" })
  const handleClear = () => {
    setFeedback({ message: "", type: "" })
  }
  setDisplayLimit();
  // Fetch portfolio data from the API
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch("https://websolex-admin.vercel.app/api/lastworkadd");
        const data = await response.json();
        setPortfolios(data);
        setCategories([...new Set(data.map((item) => item.category))]);
      } catch (error) {
        setFeedback({
          message: `Error :Failed to fetch team data  ${error.message}`,
          type: "error",
        })
      }
    };

    fetchPortfolios();
  }, []);

  const filteredPortfolios = portfolios
    .filter((portfolio) => portfolio.category === activeTab)
    .slice(0, displayLimit);
  return (
    <>
      {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
      <section className="portfolio-section pt-100 py-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section_title portfolio_title text-center mt-3 mb-4">
                <div className="section_main_title">
                  <h1 className="fw-bold wow animate__animated animate__fadeInDown">
                    Our Latest Works For Your Business
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs justify-content-lg-center pt-3 pt-lg-4 border-0">
            {categories.map((category) => (
              <li
                className="nav-item px-1 px-lg-3 mb-1 mb-lg-0 wow animate__animated animate__fadeInUp"
                key={category}
              >
                <button
                  className={`nav-link text-capitalize ${activeTab === category ? "active" : ""}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div className="portfolio-tab-content">
              <div className="row">
                {filteredPortfolios.map((image) => (
                  <div
                    className="col-6 col-md-3 mb-4 d-flex images_data justify-content-center justify-content-md-start wow animate__animated animate__fadeInUp"
                    key={image.id}
                  >
                    <div className="card w-100 position-relative border-0 m-2">
                      <Link
                        to={`/portfolio/${image._id}`}
                        onClick={scrollToTop}
                        className="card_img w-100  overflow-hidden z-1 rounded-3 position-relative"
                      >
                        <img
                          src={image.image}
                          alt={image.alt}
                          className="img-fluid portfolio-image"
                        />
                        <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center h-100 bg-primary rounded-3">
                          <div className="overlay_content text-center text-light">
                            <h2 className="pt-lg-3 pt-xxl-5 text-capitalize">{image.category}</h2>
                          </div>
                        </div>
                        <div className="all_icon position-absolute  d-flex align-items-center justify-content-start gap-3">
                          <Link
                            to={`/portfolio/${image._id}`}
                            onClick={scrollToTop}
                            className="text-bg-light rounded-5 d-flex align-items-center justify-content-center"
                          >
                            <FaSearchPlus />
                          </Link>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" text-center">
            <Link to={'/portfolio'} onClick={scrollToTop} className="text-capitalize bg-primary text-light  border-0 rounded-2 px-3 py-2 text-white text-decoration-none" >see more</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;

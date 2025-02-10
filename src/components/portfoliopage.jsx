import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetLastWorkAddQuery } from '../redux/apiSlice'
import FeedbackMessage from './feedback';
import Loader from './loader';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PortfolioSection = () => {
  const { data: portfolios = [], loading, error } = useGetLastWorkAddQuery();
  const [activeTab, setActiveTab] = useState("web design");
  const [feedback, setFeedback] = useState({ message: "", type: "" })
  const handleClear = () => {
    setFeedback({ message: "", type: "" })
  }
  const categories = [...new Set(portfolios.map((item) => item.category))]

  // Fetch portfolio data from the API
  useEffect(() => {
    if (error) {
      setFeedback({
        message: `Error : ${error.message}`,
        type: "error",
      })
    }
  }, [error])

  if (loading) {
    return <Loader />
  }

  const filteredPortfolios = portfolios.filter(
    (portfolio) => portfolio.category === activeTab
  );

  return (
    <section className="portfolio-section pt-100 py-50">
      {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
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
                  key={image?.id}
                >
                  <div className="card w-100 position-relative border-0 m-2">
                    <Link
                      to={`/portfolio/${image?._id}`}
                      onClick={scrollToTop}
                      className="card_img w-100  overflow-hidden z-1 rounded-3 position-relative"
                    >
                      <img
                        src={image?.image}
                        alt={image?.alt}
                        className="img-fluid portfolio-image"
                      />
                      <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center h-100 bg-primary rounded-3">
                        <div className="overlay_content text-center text-light">
                          <h2 className="pt-lg-3 pt-xxl-5 text-capitalize ">{image?.category}</h2>
                        </div>
                      </div>
                      <div className="all_icon position-absolute  d-flex align-items-center justify-content-start gap-3">
                        <Link
                          to={`/portfolio/${image?._id}`}
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
      </div>
    </section>
  );
};

export default PortfolioSection;


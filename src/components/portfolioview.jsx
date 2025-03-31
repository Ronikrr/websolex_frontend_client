import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackMessage from "./feedback";
import { useGetLastWorkAddByIdQuery } from '../redux/apiSlice'
import Loader from './loader';
const Portfolioview = () => {
  const { portfolioid } = useParams();
  const { data: portfolioData, error, loading } = useGetLastWorkAddByIdQuery(portfolioid);
  const [feedback, setFeedback] = useState({ message: "", type: "" })
  const handleClear = () => {
    setFeedback({ message: "", type: "" })
  }
  useEffect(() => {
    if (error) {
      setFeedback({
        message: `Error fetching : ${error.Message}`,
        type: "error",
      })
    }
  }, [error])
  if (loading) return <Loader />

  if (!portfolioData) {
    return <div>No portfolio found for "{portfolioid}"</div>;
  }

  return (
    <>
      {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
      <section className=" data ">
        <div className="container ">
          {/* <h2 className="mt-4">{portfolioData.category} Portfolio</h2> */}
          <div className="row justify-content-center">
            <div className=" d-flex align-items-center justify-content-center col-12 flex-column flex-lg-row" >
              <div className="mb-4 col-12 col-md-6 ">
                <h1 className="heading text-capitalize" >{portfolioData.name}</h1>
                <h4 className="text-capitalize" >{portfolioData.category}</h4>
                <p className="text-capitalize" >{portfolioData.work}</p>
                <p>{portfolioData.description}</p>
              </div>
              <div className="mb-4 col-12 col-md-6 ">
                <img loading='lazy'
                  src={portfolioData.image}
                  className="PortfolioImage"
                  alt={portfolioData.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolioview;

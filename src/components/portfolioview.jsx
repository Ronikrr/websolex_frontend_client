import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackMessage from "./feedback";
const Portfolioview = () => {
  const { portfolioid } = useParams(); // Extract 'portfolioid'
  const [portfolioData, setportfolioData] = useState([])
  const [feedback, setFeedback] = useState({ message: "", type: "" })
  const handleClear = () => {
    setFeedback({ message: "", type: "" })
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`https://websolex-admin.vercel.app/api/lastworkadd/${portfolioid}`);
        if (!response.ok) {
          setFeedback({
            message: `Error :Failed to fetch team data  ${response.message}`,
            type: "error",
          })
        }
        const data = await response.json();
        setportfolioData(data);
      } catch (error) {
        setFeedback({
          message: `Error :Failed to fetch team data  ${error.message}`,
          type: "error",
        })
      }
    }
    fetchdata();
  }, [portfolioid])


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
                <img
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

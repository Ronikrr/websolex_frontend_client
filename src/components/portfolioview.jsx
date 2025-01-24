import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolioview = () => {
  const { portfolioid } = useParams(); // Extract 'portfolioid'
  console.log(portfolioid)
  const [portfolioData, setportfolioData] = useState([])
  

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`https://websolex-admin.vercel.app/api/lastworkadd/${portfolioid}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setportfolioData(data);
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchdata();
  }, [portfolioid])
  // Convert portfolioid to an integer and find the corresponding portfolio data


  if (!portfolioData) {
    return <div>No portfolio found for "{portfolioid}"</div>;
  }

  return (
    <>
      <section className=" data ">
        <div className="container ">
          {/* <h2 className="mt-4">{portfolioData.category} Portfolio</h2> */}
          <div className="row justify-content-center">
            <div className=" d-flex align-align-items-center justify-content-center col-12" >
              <div className="mb-4 col-12 col-md-6 ">
                <h1 className="heading" >{portfolioData.name}</h1>
                <h4>{portfolioData.category}</h4>
                <p>{portfolioData.work}</p>
                <p>{portfolioData.description}</p>
              </div>
              <div className="mb-4 col-12 col-md-6 ">
                <img
                  src={portfolioData.image}
                  className="PortfolioImage "
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

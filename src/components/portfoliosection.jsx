

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearchPlus } from "react-icons/fa";
// import { CiLink } from "react-icons/ci";
// import { Link } from "react-router-dom";

// import image1 from "../Assets/Rectangle 11.png";
// import image2 from "../Assets/Rectangle 12.png";
// import image3 from "../Assets/Rectangle 13.png";
// import image4 from "../Assets/Rectangle 14.png";
// import image5 from "../Assets/Rectangle 15.png";
// import image6 from "../Assets/Rectangle 16.png";
// import image7 from "../Assets/Rectangle 17 (2).png";
// import image8 from "../Assets/Rectangle 18.png";
// import image9 from "../Assets/Rectangle 19.png";
// import image10 from "../Assets/Rectangle 20.png";
// import image11 from "../Assets/Rectangle 21.png";
// import image12 from "../Assets/Rectangle 22.png";
// import image13 from "../Assets/Rectangle 23.png";
// import image14 from "../Assets/Rectangle 24.png";
// import image15 from "../Assets/Rectangle 25.png";
// import image16 from "../Assets/Rectangle 26.png";
// import image17 from "../Assets/Rectangle 27.png";
// import image18 from "../Assets/Rectangle 28.png";
// import image19 from "../Assets/Rectangle 29.png";
// import image20 from "../Assets/Rectangle 30.png";

// const portfolios = [
//   { id: 1, category: "Web Design", src: image1, alt: "Rectangle 11.png" },
//   { id: 2, category: "Web Design", src: image2, alt: "Rectangle 12.png" },
//   { id: 3, category: "Web Design", src: image3, alt: "Rectangle 13.png" },
//   { id: 4, category: "Web Design", src: image4, alt: "Rectangle 14.png" },
//   { id: 5, category: "App Design", src: image5, alt: "Rectangle 15.png" },
//   { id: 6, category: "App Design", src: image6, alt: "Rectangle 16.png" },
//   { id: 7, category: "App Design", src: image7, alt: "Rectangle 17 (2).png" },
//   { id: 8, category: "App Design", src: image8, alt: "Rectangle 18.png" },
//   { id: 9, category: "Graphic Design", src: image9, alt: "Rectangle 19.png" },
//   { id: 10, category: "Graphic Design", src: image10, alt: "Rectangle 20.png" },
//   { id: 11, category: "Graphic Design", src: image11, alt: "Rectangle 21.png" },
//   { id: 12, category: "Graphic Design", src: image12, alt: "Rectangle 22.png" },
//   { id: 13, category: "Web Development", src: image13, alt: "Rectangle 23.png" },
//   { id: 14, category: "Web Development", src: image14, alt: "Rectangle 24.png" },
//   { id: 15, category: "Web Development", src: image15, alt: "Rectangle 25.png" },
//   { id: 16, category: "Web Development", src: image16, alt: "Rectangle 26.png" },
//   { id: 17, category: "App Development", src: image17, alt: "Rectangle 27.png" },
//   { id: 18, category: "App Development", src: image18, alt: "Rectangle 28.png" },
//   { id: 19, category: "App Development", src: image19, alt: "Rectangle 29.png" },
//   { id: 20, category: "App Development", src: image20, alt: "Rectangle 30.png" },
// ];

// const scrollToTop = () => {
//   window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//       });
//     };

// const PortfolioSection = () => {
//   const [activeTab, setActiveTab] = useState("Web Design");

//   const categories = [
//     ...new Set(portfolios.map((portfolio) => portfolio.category)),
//   ];

//   const filteredPortfolios = portfolios.filter(
//     (portfolio) => portfolio.category === activeTab
//   );

//   return (
//     <section className="portfolio-section pt-100 py-50">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center">
//             <div className="section_title portfolio_title text-center mt-3 mb-4">
//               <div className="section_main_title">
//                 <h1 className="fw-bold wow animate__animated animate__fadeInDown">
//                   Our Latest Works For Your Business
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="nav nav-tabs justify-content-lg-center pt-3 pt-lg-4 border-0">
//           {categories.map((category) => (
//             <li
//               className="nav-item px-1 px-lg-3 mb-1 mb-lg-0 wow animate__animated animate__fadeInUp"
//               key={category}
//             >
//               <button
//                 className={`nav-link ${activeTab === category ? "active" : ""}`}
//                 onClick={() => setActiveTab(category)}
//               >
//                 {category}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="tab-content">
//           <div className="portfolio-tab-content">
//             <div className="row">
//               {filteredPortfolios.map((image) => (
//                 <div
//                   className="col-6 col-md-3 mb-4 d-flex justify-content-center justify-content-md-start wow animate__animated animate__fadeInUp"
//                   key={image.id}
//                 >
//                   <div className="card position-relative border-0 m-2">
//                     <Link
//                       to={`/portfolio/${image.id}`} onClick={scrollToTop}
//                       className="card_img overflow-hidden z-1 rounded-3 position-relative"
//                     >
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="img-fluid portfolio-image"
//                       />
//                       <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center h-100 bg-primary rounded-3">
//                         <div className="overlay_content text-center text-light">
//                           <h2 className="pt-lg-3 pt-xxl-5">{image.category}</h2>
//                         </div>
//                       </div>
//                       <div className="all_icon position-absolute  d-flex align-items-center justify-content-start gap-3">
//                         <Link
//                           to={`/portfolio/${image.id}`} onClick={scrollToTop}
//                           className="text-bg-light rounded-5 d-flex align-items-center justify-content-center"
//                         >
//                           <FaSearchPlus />
//                         </Link>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearchPlus } from "react-icons/fa";
// import { CiLink } from "react-icons/ci";
// import { Link } from "react-router-dom";

// import image1 from "../Assets/Rectangle 11.png";
// import image2 from "../Assets/Rectangle 12.png";
// import image3 from "../Assets/Rectangle 13.png";
// import image4 from "../Assets/Rectangle 14.png";
// import image5 from "../Assets/Rectangle 15.png";
// import image6 from "../Assets/Rectangle 16.png";
// import image7 from "../Assets/Rectangle 17 (2).png";
// import image8 from "../Assets/Rectangle 18.png";
// import image9 from "../Assets/Rectangle 19.png";
// import image10 from "../Assets/Rectangle 20.png";
// import image11 from "../Assets/Rectangle 21.png";
// import image12 from "../Assets/Rectangle 22.png";
// import image13 from "../Assets/Rectangle 23.png";
// import image14 from "../Assets/Rectangle 24.png";
// import image15 from "../Assets/Rectangle 25.png";
// import image16 from "../Assets/Rectangle 26.png";
// import image17 from "../Assets/Rectangle 27.png";
// import image18 from "../Assets/Rectangle 28.png";
// import image19 from "../Assets/Rectangle 29.png";
// import image20 from "../Assets/Rectangle 30.png";

// const portfolios = [
//   { id: 1, category: "Web Design", src: image1, alt: "Rectangle 11.png" },
//   { id: 2, category: "Web Design", src: image2, alt: "Rectangle 12.png" },
//   { id: 3, category: "Web Design", src: image3, alt: "Rectangle 13.png" },
//   { id: 4, category: "Web Design", src: image4, alt: "Rectangle 14.png" },
//   { id: 5, category: "App Design", src: image5, alt: "Rectangle 15.png" },
//   { id: 6, category: "App Design", src: image6, alt: "Rectangle 16.png" },
//   { id: 7, category: "App Design", src: image7, alt: "Rectangle 17 (2).png" },
//   { id: 8, category: "App Design", src: image8, alt: "Rectangle 18.png" },
//   { id: 9, category: "Graphic Design", src: image9, alt: "Rectangle 19.png" },
//   { id: 10, category: "Graphic Design", src: image10, alt: "Rectangle 20.png" },
//   { id: 11, category: "Graphic Design", src: image11, alt: "Rectangle 21.png" },
//   { id: 12, category: "Graphic Design", src: image12, alt: "Rectangle 22.png" },
//   { id: 13, category: "Web Development", src: image13, alt: "Rectangle 23.png" },
//   { id: 14, category: "Web Development", src: image14, alt: "Rectangle 24.png" },
//   { id: 15, category: "Web Development", src: image15, alt: "Rectangle 25.png" },
//   { id: 16, category: "Web Development", src: image16, alt: "Rectangle 26.png" },
//   { id: 17, category: "App Development", src: image17, alt: "Rectangle 27.png" },
//   { id: 18, category: "App Development", src: image18, alt: "Rectangle 28.png" },
//   { id: 19, category: "App Development", src: image19, alt: "Rectangle 29.png" },
//   { id: 20, category: "App Development", src: image20, alt: "Rectangle 30.png" },
// ];

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// const PortfolioSection = () => {
//   const [activeTab, setActiveTab] = useState("Web Design");
//   const [portfolios, setportfolios] = useState([])
//   const [categories, setcategories] = useState([])

//   useEffect(() => {
//     const fetchapi = async () => {
//       try {
//         const res = await fetch(`https://websolex-admin.vercel.app/api/lastworkadd`,
//           {
//             method: "GET"
//           }
//         )
//         const data = await res.json();
//         console.log(data)
//         setportfolios(data)
//         setcategories([...new Set(data.map((item) => item.category))])
//       } catch (error) {
//         console.log('error', error)
//       }
//     }
//     fetchapi()
//   }, [])
//   const filteredPortfolios = portfolios.filter(
//     (portfolio) => portfolio.category === activeTab
//   );

//   return (
//     <section className="portfolio-section pt-100 py-50">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center">
//             <div className="section_title portfolio_title text-center mt-3 mb-4">
//               <div className="section_main_title">
//                 <h1 className="fw-bold wow animate__animated animate__fadeInDown">
//                   Our Latest Works For Your Business
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ul className="nav nav-tabs justify-content-lg-center pt-3 pt-lg-4 border-0">
//           {categories.map((category) => (
//             <li
//               className="nav-item px-1 px-lg-3 mb-1 mb-lg-0 wow animate__animated animate__fadeInUp"
//               key={category}
//             >
//               <button
//                 className={`nav-link ${activeTab === category ? "active" : ""}`}
//                 onClick={() => setActiveTab(category)}
//               >
//                 {category}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="tab-content">
//           <div className="portfolio-tab-content">
//             <div className="row">
//               {filteredPortfolios.map((image) => (
//                 <div
//                   className="col-6 col-md-3 mb-4 d-flex justify-content-center justify-content-md-start wow animate__animated animate__fadeInUp"
//                   key={image.id}
//                 >
//                   <div className="card position-relative border-0 m-2">
//                     <Link
//                       to={`/portfolio/${image.id}`} onClick={scrollToTop}
//                       className="card_img overflow-hidden z-1 rounded-3 position-relative"
//                     >
//                       <img
//                         src={image.image}
//                         alt={image.name}
//                         width={360} height={360}
//                         className=" portfolio-image"
//                       />
//                       <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center h-100 bg-primary rounded-3">
//                         <div className="overlay_content text-center text-light">
//                           <h2 className="pt-lg-3 pt-xxl-5">{image.category}</h2>
//                         </div>
//                       </div>
//                       <div className="all_icon position-absolute  d-flex align-items-center justify-content-start gap-3">
//                         <Link
//                           to={`/portfolio/${image.id}`} onClick={scrollToTop}
//                           className="text-bg-light rounded-5 d-flex align-items-center justify-content-center"
//                         >
//                           <FaSearchPlus />
//                         </Link>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;
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
  const [activeTab, setActiveTab] = useState("Graphic Design");
  const [categories, setCategories] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(4);
  const [feedback, setFeedback] = useState({ message: "", type: "" })
  const handleClear = () => {
    setFeedback({ message: "", type: "" })
  }
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
                            <h2 className="pt-lg-3 pt-xxl-5">{image.category}</h2>
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

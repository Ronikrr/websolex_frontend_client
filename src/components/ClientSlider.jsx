// import React, { useEffect, useState } from 'react';
// import '../App.css';
// import { useGetOurWorkQuery } from '../redux/apiSlice'
// import Loader from './loader';
// import FeedbackMessage from './feedback';
// function Clientside() {
//     const { data: logos, isLoading, error: seterror } = useGetOurWorkQuery();
//     const [feedback, setFeedback] = useState({ message: "", type: "" })
//     const handleClear = () => {
//         setFeedback({ message: "", type: "" })
//     }
//     useEffect(() => {

//         if (seterror) return setFeedback({
//             message: `Error fetching : ${seterror.Message}`,
//             type: "error",
//         });
//     }, [seterror]);

//     if (isLoading) return <Loader />;
//     return (
//         <div className="container px-md-5 py-5">
//             {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
//             <div className="row mb-md-4 align-items-center justify-content-center">
//                 <div className="section_main_title text-center mb-3 mb-md-5">
//                     <h1 className="fw-bold wow animate__animated animate__fadeInDown">Valued Clients</h1>
//                 </div>
//                 <div className="clients col-12 text-center mb-md-3">
//                     <div className="col-12 d-flex flex-wrap justify-content-center">
//                         {logos?.slice(0, 4)?.map((logo, index) => (
//                             <div key={index} className="box col-md-6 col-xl-3">
//                                 <div className="box_body m-2 rounded-1 border-bottom">
//                                     <img
//                                         src={logo?.image}
//                                         className="img-fluid image_shadow wow animate__animated animate__fadeIn "
//                                         alt={logo?.altText || 'Client Logo'}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="col-12 d-flex flex-wrap justify-content-center">
//                         {logos?.slice(4, 8)?.map((logo, index) => (
//                             <div key={index} className="box col-md-6 col-xl-3">
//                                 <div className="box_body m-2 rounded-1 border-bottom">
//                                     <img
//                                         src={logo?.image}
//                                         className="img-fluid image_shadow wow animate__animated animate__fadeIn "
//                                         alt={logo?.altText || 'Client Logo'}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="col-12 d-flex flex-wrap justify-content-center">
//                         {logos?.slice(8, 10)?.map((logo, index) => (
//                             <div key={index} className="box col-md-6 col-xl-3">
//                                 <div className="box_body m-2 rounded-1 border-bottom">
//                                     <img
//                                         src={logo?.image}
//                                         className="img-fluid image_shadow wow animate__animated animate__fadeIn "
//                                         alt={logo?.altText || 'Client Logo'}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Clientside;
"use client";

import React, { useEffect, useState } from "react";
import { useGetOurWorkQuery } from "../redux/apiSlice";
import Loader from "./loader";
import FeedbackMessage from "./feedback";

export default function Clientside({ }) {
    const { data: logos, isLoading, error: seterror } = useGetOurWorkQuery();
    const [feedback, setFeedback] = useState({ message: "", type: "" });

    const handleClear = () => {
        setFeedback({ message: "", type: "" });
    };
    const logosPerRow = 4
    const maxLogos = Array.isArray(logos) ? logos.length : 0

    useEffect(() => {
        if (seterror) {
            setFeedback({
                message: `Error fetching : ${seterror.Message}`,
                type: "error",
            });
        }
    }, [seterror]);

    if (isLoading) return <Loader />;
    console.log(logos)
    // Create rows of logos based on logosPerRow
    const createLogoRows = (logos) => {
        // Limit total logos to maxLogos
        const limitedLogos = logos?.slice(0, maxLogos) || [];

        // Calculate how many rows we need
        const rows = Math.ceil(limitedLogos.length / logosPerRow);

        return Array.from({ length: rows }, (_, rowIndex) => {
            const start = rowIndex * logosPerRow;
            const end = start + logosPerRow;
            return limitedLogos.slice(start, end);
        });
    };
    const distributeLogos = (logos, rowDistribution) => {
        let index = 0;
        return rowDistribution.map((count) => {
            const row = logos.slice(index, index + count);
            index += count;
            return row;
        });
    };

    const rowDistribution = [5, 4, 3, 2, 1]; // Example: First row has 5, second 4, third 3


    return (
        <div className="container px-md-5 py-5">
            {feedback.message && (
                <FeedbackMessage
                    message={feedback.message}
                    type={feedback.type}
                    onClear={handleClear}
                />
            )}

            <div className="row mb-md-4 align-items-center justify-content-center">
                <div className="section_main_title text-center mb-3 mb-md-5">
                    <h1 className="fw-bold wow animate__animated animate__fadeInDown">
                        Valued Clients
                    </h1>
                </div>

                <div className="clients col-12 text-center mb-md-3">
                    {distributeLogos(logos || [], rowDistribution).map((row, rowIndex) => (
                        <div key={rowIndex} className="col-12 d-flex flex-wrap justify-content-center">
                            {row.map((logo, index) => (
                                <div
                                    key={index}
                                    className="box col-md-6 col-xl-2"
                                >
                                    <div className="box_body m-2 rounded-1 border-bottom">
                                        <img
                                            src={logo?.image || "/placeholder.svg"}
                                            className="img-fluid image_shadow wow animate__animated animate__fadeIn"
                                            alt={logo?.altText || "Client Logo"}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}





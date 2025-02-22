import React, { useEffect, useState } from "react";
import { useGetOurWorkQuery } from "../redux/apiSlice";
import FeedbackMessage from "./feedback";

export default function Clientside() {
    const { data: logos, error: seterror } = useGetOurWorkQuery();
    const [feedback, setFeedback] = useState({ message: "", type: "" });

    const handleClear = () => {
        setFeedback({ message: "", type: "" });
    };


    useEffect(() => {
        if (seterror) {
            setFeedback({
                message: `Error fetching : ${seterror.Message}`,
                type: "error",
            });
        }
    }, [seterror]);


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





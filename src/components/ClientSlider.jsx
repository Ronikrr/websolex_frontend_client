import React, { useEffect, useState, useMemo } from "react";
import { useGetOurWorkQuery } from "../redux/apiSlice";
import FeedbackMessage from "./feedback";

export default function Clientside() {
    const { data: logos = [], error } = useGetOurWorkQuery();
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        if (error) {
            setFeedback({ message: `Error fetching: ${error.message}`, type: "error" });
        }
    }, [error]);

    const rowDistribution = [5, 4, 3, 2, 1];

    const distributedLogos = useMemo(() => {
        let index = 0;
        return rowDistribution.map(count => {
            const row = logos.slice(index, index + count);
            index += count;
            return row;
        });
    }, [logos]);

    return (
        <div className="container px-md-5 py-5">
            {feedback && (
                <FeedbackMessage
                    message={feedback.message}
                    type={feedback.type}
                    onClear={() => setFeedback(null)}
                />
            )}

            <div className="row align-items-center justify-content-center mb-md-4">
                <div className="text-center mb-3 mb-md-5 section_main_title">
                    <h1 className="animate__animated animate__fadeInDown fw-bold wow">
                        Valued Clients
                    </h1>
                </div>
                <div className="col-12 text-center clients mb-md-3">
                    {/* Desktop View */}
                    {logos.length > 0 && (
                        <div className="d-lg-block d-none">
                            {distributedLogos.map((row, rowIndex) => (
                                <div key={rowIndex} className="d-flex flex-wrap justify-content-center">
                                    {row.map((logo, index) => (
                                        <div key={index} className="col-6 col-xl-2 box">
                                            <div className="border-bottom m-2 rounded-1 box_body">
                                                <img
                                                    loading='lazy'
                                                    src={logo.image || "/placeholder.svg"}
                                                    className="w-75 logos animate__animated animate__fadeIn image_shadow img-fluid wow"
                                                    alt={logo.altText || "Client Logo"}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Mobile View */}
                    <div className="d-flex d-lg-none flex-wrap">
                        {logos.map((logo, index) => (
                            <div key={index} className="col-6 col-xl-2 box">
                                <div className="border-bottom m-2 rounded-1 box_body">
                                    <img
                                        loading='lazy'
                                        src={logo.image || "/placeholder.svg"}
                                        className="w-75 logos animate__animated animate__fadeIn image_shadow img-fluid wow"
                                        alt={logo.altText || "Client Logo"}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

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

            <div className="row align-items-center justify-content-center mb-md-4">
                <div className="text-center mb-3 mb-md-5 section_main_title">
                    <h1 className="animate__animated animate__fadeInDown fw-bold wow">
                        Valued Clients
                    </h1>
                </div>

                <div className="col-12 text-center clients mb-md-3">
                    <div className="d-lg-block d-none">
                        {distributeLogos(logos || [], rowDistribution).map((row, rowIndex) => (
                            <div key={rowIndex} className="col-12 d-flex flex-wrap justify-content-center">
                                {row.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="col-6 col-xl-2 box"
                                    >
                                        <div className="border-bottom m-2 rounded-1 box_body">
                                            <img
                                                src={logo?.image || "/placeholder.svg"}
                                                className="w-75 animate__animated animate__fadeIn image_shadow img-fluid wow"
                                                alt={logo?.altText || "Client Logo"}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="d-flex d-lg-none flex-wrap">

                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="col-6 col-xl-2 box"
                            >
                                <div className="border-bottom m-2 rounded-1 box_body">
                                    <img
                                        src={logo?.image || "/placeholder.svg"}
                                        className="w-75 animate__animated animate__fadeIn image_shadow img-fluid wow"
                                        alt={logo?.altText || "Client Logo"}
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





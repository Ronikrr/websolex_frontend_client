import React, { useEffect, useState } from 'react';
import '../App.css';
import { useGetOurWorkQuery } from '../redux/apiSlice'
import Loader from './loader';
import FeedbackMessage from './feedback';
function Clientside() {
    const { data: logos, isLoading, error: seterror } = useGetOurWorkQuery();
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {

        if (seterror) return setFeedback({
            message: `Error fetching : ${seterror.Message}`,
            type: "error",
        });
    }, [seterror]);

    if (isLoading) return <Loader />;
    return (
        <div className="container px-md-5 py-5">
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <div className="row mb-md-4 align-items-center justify-content-center">
                <div className="section_main_title text-center mb-3 mb-md-5">
                    <h1 className="fw-bold wow animate__animated animate__fadeInDown">Valued Clients</h1>
                </div>
                <div className="clients col-12 text-center mb-md-3">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        {logos?.slice(0, 4).map((logo, index) => (
                            <div key={index} className="box col-md-6 col-xl-3">
                                <div className="box_body m-2 rounded-1 border-bottom">
                                    <img
                                        src={logo?.image}
                                        className="img-fluid image_shadow wow animate__animated animate__fadeIn "
                                        alt={logo?.altText || 'Client Logo'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        {logos?.slice(4, 7).map((logo, index) => (
                            <div key={index} className="box col-md-6 col-xl-3">
                                <div className="box_body m-2 rounded-1 border-bottom">
                                    <img
                                        src={logo?.image}
                                        className="img-fluid image_shadow wow animate__animated animate__fadeIn "
                                        alt={logo?.altText || 'Client Logo'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        {logos?.slice(7, 9).map((logo, index) => (
                            <div key={index} className="box col-md-6 col-xl-3">
                                <div className="box_body m-2 rounded-1 border-bottom">
                                    <img
                                        src={logo?.image}
                                        className="img-fluid image_shadow wow animate__animated animate__fadeIn "
                                        alt={logo?.altText || 'Client Logo'}
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

export default Clientside;




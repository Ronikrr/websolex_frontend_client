import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import FeedbackMessage from './feedback';
import { useGetTeamQuery } from '../redux/apiSlice'
import Loader from './loader';
function MeetOurTeam() {
    const { data: teamMembers, error, isLoading } = useGetTeamQuery();
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {
        if (error) {
            setFeedback({
                message: `Error :Failed to fetch team data  ${error.message}`,
                type: "error",
            })
        }
    }, [error]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className="meet_our_team pb-100">
                <div className="container ">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-12 text-center py-5">
                            <div className="section_title portfolio_title text-center mt-3 mb-4">
                                <div className="section_main_title">
                                    <h1 className="text-capitalize">Meet Our Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center team_class w-75">
                        {teamMembers?.map((member, index) => (
                            <div
                                key={index}
                                className={`col-xl-4 col-lg-4 col-md-6 mb-7 d-flex align-items-center wow animate__animated ${index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight '
                                    }`}
                            >
                                <div className="position-relative card_options mg-10 mx-md-3 w-100 ">
                                    <div className="card">
                                        <div className="card-img-top h-auto">
                                            <img
                                                src={member?.image}
                                                alt={`${member?.name}'s Profile`}
                                                className="img-fluid profile_image"
                                            />
                                        </div>
                                        <div className="card-body px-lg-0 p-md-4 text-center">
                                            <h4 className="mb-1 text-capitalize ">{member?.name}</h4>
                                            <p className="mb-1 fs-14 text-capitalize">{member?.post}</p>
                                            <div className="social d-flex mt-2 justify-content-center gap-1">
                                                <Link
                                                    to={member?.linkedin}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member?.name}'s LinkedIn`}
                                                >
                                                    <FaLinkedinIn />
                                                </Link>
                                                <Link
                                                    to={member?.insta}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member?.name}'s Instagram`}
                                                >
                                                    <PiInstagramLogoFill />
                                                </Link>
                                                <Link
                                                    to={member?.facebook}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member?.name}'s Facebook`}
                                                >
                                                    <FaFacebookF />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MeetOurTeam;

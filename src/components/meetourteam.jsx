// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import harshbhai from '../Assets/Harsh 1.png';
// import parthbhai from '../Assets/parthbhai.png';
// import baktesh from '../Assets/Bhaktesh.png';

// const teamMembers = [
//     {
//         name: "Harsh Vegad",
//         title: "Founder & CFO",
//         img: harshbhai,
//         linkedin: "https://www.linkedin.com/in/harsh-vegad-499166251/",
//         instagram: "https://www.instagram.com/vegad_harsh_84/",
//         facebook: "https://www.facebook.com/harsh.vegad.779",
//     },
//     {
//         name: "Parth Vaghani",
//         title: "Founder & CEO",
//         img: parthbhai,
//         linkedin: "https://www.linkedin.com/in/parth-vaghani-ui-ux-graphics-design-websolex-infotech/",
//         instagram: "https://www.instagram.com/_parth_vaghani/",
//         facebook: "https://www.facebook.com/vaghani.parth.129",
//     },
//     {
//         name: "Bhaktesh Gadhiya",
//         title: "Founder & CTO",
//         img: baktesh,
//         linkedin: "https://www.linkedin.com/in/bhaktesh-gadhiya-213b28235/",
//         instagram: "https://www.instagram.com/bhaktesh_gadhiya_",
//         facebook: "https://www.facebook.com/bhakatesh.gadhiya",
//     },
// ];

// function MeetOurTeam() {
//     return (
//         <section className="meet_our_team pb-100">
//             <div className="container">
//                 <div className="row justify-content-center mb-4">
//                     <div className="col-lg-12 text-center py-5">
//                         <div className="section_title portfolio_title text-center mt-3 mb-4">
//                             <div className="section_main_title">
//                                 <h1 className="text-capitalize">Meet Our Team</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center ">
//                     {teamMembers.map((member, index) => (
//                         <div
//                             key={index}
//                             className={`col-xl-3 col-lg-4 col-md-6 mb-7 d-flex  align-items-stretch wow animate__animated ${index % 2 === 0 ? 'animate__fadeInLeft ' : 'animate__fadeInRight classdata'
//                                 }`}
//                         >
//                             <div className="position-relative card_options mg-10 mx-md-3">
//                                 <div className="card">
//                                     <div className="card-img-top h-auto">
//                                         <img
//                                             src={member.img}
//                                             alt={`${member.name}'s Profile`}
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                     <div className="card-body px-lg-0 p-md-4 text-center">
//                                         <h4 className="mb-1">{member.name}</h4>
//                                         <p className="mb-1 fs-14">{member.title}</p>
//                                         <div className="social d-flex mt-2 justify-content-center gap-1">
//                                             <Link
//                                                 to={member.linkedin}
//                                                 target="_blank"
//                                                 className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
//                                                 aria-label={`${member.name}'s LinkedIn`}
//                                             >
//                                                 <FaLinkedinIn />
//                                             </Link>
//                                             <Link
//                                                 to={member.instagram}
//                                                 target="_blank"
//                                                 className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
//                                                 aria-label={`${member.name}'s Instagram`}
//                                             >
//                                                 <PiInstagramLogoFill />
//                                             </Link>
//                                             <Link
//                                                 to={member.facebook}
//                                                 target="_blank"
//                                                 className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
//                                                 aria-label={`${member.name}'s Facebook`}
//                                             >
//                                                 <FaFacebookF />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default MeetOurTeam;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import FeedbackMessage from './feedback';
function MeetOurTeam() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await fetch('https://websolex-admin.vercel.app/api/teampage');
                if (!response.ok) {
                    setFeedback({
                        message: `Error :Failed to fetch team data  ${response.message}`,
                        type: "error",
                    })
                }
                const data = await response.json();
                setTeamMembers(data);
            } catch (err) {
                setFeedback({
                    message: `Error :Failed to fetch team data  ${err.message}`,
                    type: "error",
                })
            } 
        };

        fetchTeamData();
    }, []);

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
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`col-xl-4 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch wow animate__animated ${index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight classdata'
                                    }`}
                            >
                                <div className="position-relative card_options mg-10 mx-md-3">
                                    <div className="card">
                                        <div className="card-img-top h-auto">
                                            <img
                                                src={member.image}
                                                alt={`${member.name}'s Profile`}
                                                className="img-fluid profile_image"
                                            />
                                        </div>
                                        <div className="card-body px-lg-0 p-md-4 text-center">
                                            <h4 className="mb-1 text-capitalize ">{member.name}</h4>
                                            <p className="mb-1 fs-14 text-capitalize">{member.post}</p>
                                            <div className="social d-flex mt-2 justify-content-center gap-1">
                                                <Link
                                                    to={member.linkedin}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member.name}'s LinkedIn`}
                                                >
                                                    <FaLinkedinIn />
                                                </Link>
                                                <Link
                                                    to={member.instagram}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member.name}'s Instagram`}
                                                >
                                                    <PiInstagramLogoFill />
                                                </Link>
                                                <Link
                                                    to={member.facebook}
                                                    target="_blank"
                                                    className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2"
                                                    aria-label={`${member.name}'s Facebook`}
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

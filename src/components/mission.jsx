import React, { useEffect, useState } from 'react';
import lineimg from '../Assets/line.png';
import FeedbackMessage from './feedback';
import { useGetProjectQuery } from '../redux/apiSlice'
import Loader from './loader';
const missionData = {
    'mission': [
        { id: 1, name: 'Mission', discription: 'At Websolex Infotech, our mission is to deliver exceptional digital solutions that drive business growth and enhance user experiences. We are committed to providing top-quality website design, development, application development, UI/UX design, graphics design, and digital marketing services. Our goal is to help businesses navigate the digital landscape with innovative, reliable, and tailored solutions that meet their unique needs. We strive to exceed client expectations through our dedication to quality, creativity, and customer satisfaction, all while fostering a collaborative and inclusive work environment.' },

        { id: 2, name: 'Vision', discription: 'To be a global leader in digital solutions, empowering businesses with innovative and cutting-edge web and application technologies. At Websolex Infotech, we envision a world where every business has the digital tools to achieve unprecedented growth and success.' }
    ],
    'image': [
        { id: 1, src: lineimg, alt: 'lineimg.png' }
    ]
};

function Mission() {
    const { data: project, error, isLoading } = useGetProjectQuery();

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
    }, [error])
    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className="mission_section py-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section_title portfolio_title text_center mt-3 wow fadeInDown mb-4">
                                <div className="col-12 mission d-flex flex-column flex-lg-row align-items-center">
                                    <div className="col-12 col-lg-8">
                                        <div className="mission_data_section bg-light rounded-5 p-5">
                                            <div className="mission_title col-12 py-5">
                                                <h2 className="mb-3 fw-bold fs-1 text-capitalize wow animate__animated animate__fadeInDown">mission & vision</h2>
                                            </div>
                                            <div className="vision_paragraph col-12 text-center d-flex flex-column flex-lg-row align-items-center align-items-lg-start wow animate__animated animate__fadeInLeft">
                                                <div className="headings col-12 col-lg-4 text-center text-lg-start">
                                                    <h3 className="mb-3 text-uppercase fw-bold">
                                                        {missionData.mission[1].name}
                                                    </h3>
                                                </div>
                                                <div className="mission_text col-12 col-lg-8 text-center text-lg-start">
                                                    <p>{missionData.mission[1].discription}</p>
                                                </div>
                                            </div>
                                            <div className="mission_paragraph col-12 text-center d-flex flex-column flex-lg-row align-items-center align-items-lg-start wow animate__animated animate__fadeInRight">
                                                <div className="headings col-12 col-lg-4 text-center text-lg-start">
                                                    <h3 className="mb-3 text-uppercase fw-bold">
                                                        {missionData.mission[0].name}
                                                    </h3>
                                                </div>
                                                <div className="mission_text col-12 col-lg-8 text-center text-lg-start">
                                                    <p>{missionData.mission[0].discription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 col-xl-4 d-flex mt-3 mt-lg-0">
                                        <div className="mission_img_section col-6 d-flex justify-content-end  flex-row wow animate__animated animate__fadeInUp">
                                            <img src={missionData.image[0].src} height="500" className="" alt={missionData.image[0].alt} />
                                        </div>
                                        <div className="col-9 d-flex flex-column justify-content-start position-relative wow animate__animated animate__fadeInRight">
                                            <div className="line_box line_1 position-absolute text-start">
                                                <div className="counts ">
                                                    <h1 className="m-0 fw-bold" >Since 2022</h1>
                                                </div>
                                                <p>Founded</p>
                                            </div>
                                            <div className="line_box line_2 position-absolute text-start">
                                                <div className="counts">
                                                    <h1 className="m-0 fw-bold" >{project?.totalClients}+</h1>
                                                </div>
                                                <p>Client</p>
                                            </div>
                                            <div className="line_box line_3 position-absolute text-start">
                                                <div className="counts">
                                                    <h1 className="m-0 fw-bold" >{project?.completedProjects}+</h1>
                                                </div>
                                                <p>Completed Project</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mission;

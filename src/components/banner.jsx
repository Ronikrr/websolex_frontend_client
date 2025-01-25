import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner_img from "../Assets/banner_section.jpg"
import review_img1 from '../Assets/client-1.jpg'
import review_img2 from '../Assets/client-2.jpg'
import review_img3 from '../Assets/client-3.jpg'
import review_img4 from '../Assets/client-4.jpg'
import { FaStar } from "react-icons/fa";
import report_graf from '../Assets/sale-report-removebg-preview.png'
import graf2 from '../Assets/garf.png'
import { convertToK } from './convertto';
import FeedbackMessage from './feedback';
function Banner() {
    const [project, setproject] = useState([]);
    const [statics, setstatic] = useState([]);

    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }

    useEffect(() => {
        const fetchprojectdata = async () => {
            const res = await fetch('https://websolex-admin.vercel.app/api/project',
                { method: 'GET' }
            )
            if (!res.ok) {
                setFeedback({
                    message: `Error : ${res.message}`,
                    type: "error",
                })
            }
            const data = await res.json();
            if (data && data.length > 0) {
                setproject(data[0].completedProjects)
            }

        }
        fetchprojectdata()
        const fetchprojectstatic = async () => {
            const res = await fetch('https://websolex-admin.vercel.app/api/setstatic',
                { method: 'GET' }
            )
            if (!res.ok) {
                setFeedback({
                    message: `Error : ${res.message}`,
                    type: "error",
                })
            } 
            const data = await res.json();
            if (data && data.length > 0) {
                setstatic(data[0])
            }

        }
        fetchprojectdata()
        fetchprojectstatic()
    }, [])
    

    const handleTabClick = (tab) => {
        window.scrollTo(0, 0);
    };
    return (
        <>

            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className='banner2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-7 col-xl-6 mb-5 mb-lg-0">
                                <div className="banner_content2 mt-5  text-center text-lg-start wow animate__animated animate__fadeInLeft">
                                    <h2 className='text-light fs-1'>Empowering Your Digital Transformation</h2>
                                    <p className='text-light'>At WebSolex Infotech, we specialize in delivering cutting-edge technology solutions that drive innovation and efficiency. From website development to application design, UI/UX services, graphics design, and digital marketing, we provide a full suite of IT services tailored to your needs. Let's build your digital future together.</p>
                                    <div className="banner_button2 d-flex pb-5 border-bottom justify-content-center justify-content-lg-start">

                                        <Link onClick={handleTabClick} to="/contact" className='text-decoration-none text-light bg-light text-dark rounded-pill  me-3 border hover_button1'>Get Started</Link>
                                    </div>
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-center  text-center text-sm-start text-md-center text-lg-start mt-3 mt-md-0">
                                        <div className="col-6 col-sm-4">
                                            <div className="banner_number_sub  pt-md-3 pt-xxl-4 px-md-3 px-xxl-4 text-light">
                                                <div className="border-right">
                                                    <div className="">
                                                        <h2>{statics?.successfulproject}%</h2>
                                                        <p>Successful Project</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner_number_sub  pt-md-3 pt-xxl-4  text-light">
                                            <div className="border-right">
                                                <div className="px-md-3 px-xxl-4">
                                                    <h2>{convertToK(statics?.joiningcomparies || 0)}</h2>
                                                    <p>Joining Companies</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7 col-sm-4 mt-3 mt-md-0">
                                            <div className="banner_number_sub pt-md-3 pt-xxl-4 px-md-2 px-xxl-4 text-light">
                                                <h2>{statics?.registeredcustomers}+</h2>
                                                <p>Registered Customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-6">
                                <div className="image_sub_box d-flex justify-content-center position-relative wow animate__animated animate__fadeInRight">
                                    <img src={banner_img} alt="" className='col-12 col-md-9 col-xl-8 rounded-4' />
                                    <div className="review_main_box position-absolute bg-light p-3 d-flex align-items-center justify-content-between rounded-pill col-sm-8 col-md-6 col-lg-10 col-xl-7 col-xxl-6">
                                        <div className="review_image">
                                            <div
                                                class="note-images d-flex position-relative justify-content-center justify-content-md-start me-3">
                                                <div class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light"
                                                    id="review_1">
                                                    <Link to={'#'}> <img src={review_img1} alt="" className='border-0' /></Link>
                                                </div>
                                                <div class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light"
                                                    id="review_2">
                                                    <a href="#review_2"><img src={review_img2} alt="" className='border-0' /></a>
                                                </div>
                                                <div
                                                    class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light">
                                                    <img src={review_img3} alt="" className='border-0' />
                                                </div>
                                                <div
                                                    class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light">
                                                    <img src={review_img4} alt="" className='border-0' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review_contentt">
                                            <h6 className='mb-0'>10+ Relings</h6>
                                            <ul className='d-flex ps-0 mb-0'>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="view_sec d-flex flex-wrap align-items-center justify-content-between  col-10 col-md-6 col-lg-9 col-xl-7 col-xxl-6 position-absolute bg-light p-3  rounded-4">
                                        <div className=" col-6 view_content text-center text-md-start">
                                            <span className='fw-semibold'>Total Project</span>
                                            <h2 className='mb-0'>{project}+</h2>
                                        </div>
                                        <div className=" col-6 ">
                                            <img src={graf2} alt="" className='col-9' />
                                        </div>
                                    </div>
                                    <div className="sale_report  d-sm-flex position-absolute justify-content-between bg-light p-3 rounded-4 col-7 col-md-6  col-lg-10 col-xl-7 col-xxl-6 ">
                                        <div className="me-sm-3 mb-3">
                                            <span className='px-2 py-1 text-light rounded-pill d-flex align-items-center justify-content-center col-5'>New</span>
                                            <h6 className='mb-0 mt-2'>Sale Report</h6>
                                            <p className='mb-0'>Real-Time Sales Analytics</p>
                                        </div>
                                        <div className="col-9 col-sm-5">
                                            <img src={report_graf} alt="" className='col-12 border-0 h-100' />
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

export default Banner;

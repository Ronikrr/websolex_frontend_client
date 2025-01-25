
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaRegStar, FaStar } from "react-icons/fa";
import img4 from '../Assets/quotation-mark.png'; // Default quotation image
import FeedbackMessage from './feedback';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <BsChevronLeft size="30px" style={{ marginRight: '10px', cursor: 'pointer' }} />,
        nextArrow: <BsChevronRight size="30px" style={{ cursor: 'pointer' }} />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`https://websolex-admin.vercel.app/api/clientrate`);
                if (!res.ok) {
                    setFeedback({
                        message: `Error :Failed to fetch team data  ${res.message}`,
                        type: "error",
                    })
                }
                const data = await res.json();
                setTestimonials(data);
            } catch (err) {
                setFeedback({
                    message: `Error :Failed to fetch team data  ${err.message}`,
                    type: "error",
                })
            } 
        };
        fetchTestimonials();
    }, []);
    const renderStars = (rate) => {
        const totalStars = 5;
        let stars = [];

        // Render filled stars
        for (let i = 0; i < Math.floor(rate); i++) {
            stars.push(<FaStar key={`filled-${i}`} className="icon_color" />);
        }

        // Render empty stars
        for (let i = Math.floor(rate); i < totalStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-white" />);
        }

        return stars;
    };



    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className="review_section pb-100 py-50">
                <div className="container">
                    <div className="row">
                        <div className="section_main_title text-center mb-3 mb-md-5">
                            <h1 className="fw-bold wow animate__animated animate__fadeInDown">
                                Clients Testimonial
                            </h1>
                        </div>
                        <Slider {...settings}>
                            {testimonials.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="review_sub_box d-block d-md-flex rounded-2 m-2 col-11 ">
                                        <div className="review_content_2 rounded-2 bg-light p-4 wow animate__animated animate__fadeInUp col-12 ">
                                            <ul className="d-flex mb-3 ">
                                                {renderStars(item?.rate)}
                                            </ul>
                                            <p className="mb-0">{item.description}</p>
                                            <div className="d-flex align-items-center mt-5 justify-content-between">
                                                <div className="testimonials_sub_box1 d-flex align-items-center">
                                                    <div className="image col-4">
                                                        <img
                                                            src={item.image || img4} // Fallback to a default image
                                                            alt={item.name}
                                                            className="testimonial_img "
                                                        />
                                                    </div>
                                                    <div className="content col-9 ps-2">
                                                        <h5 className="mb-2">{item.name}</h5>
                                                        <p className="p-0">{item.business}</p>
                                                    </div>
                                                </div>
                                                <div className="testimonials_sub_box2">
                                                    <img src={img4} alt="Quotation mark" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;

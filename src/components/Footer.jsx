import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import logo from '../Assets/Logo.png';
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import FeedbackMessage from './feedback';
import { useGetContactDetailsQuery, useGetSocialDetailsQuery } from '../redux/apiSlice'
import Loader from './loader';
const Footer = () => {
    const { data: number, loading: contactloading, error: contacterror } = useGetContactDetailsQuery()
    const { data: social, loading: socialloading, error: socialerror } = useGetSocialDetailsQuery()
    const navigate = useNavigate()
    const [data, setdata] = useState({ email: "" });
    const handleTabClick = (tab) => {
        window.scrollTo(0, 0);

    };
    const [feedback, setFeedback] = useState({ message: "", type: "" })
    const handleClear = () => {
        setFeedback({ message: "", type: "" })
    }
    useEffect(() => {

        if (contacterror) {
            setFeedback({
                message: `Error fetching : ${contacterror.Message}`,
                type: "error",
            })
        }
        if (socialerror) {
            setFeedback({
                message: `Error fetching : ${socialerror.Message}`,
                type: "error",
            })
        }


    }, [contacterror, socialerror])

    const onhange = (e) => {
        const { name, value } = e.target;
        setdata(prevdata => ({
            ...prevdata,
            [name]: value
        }));
    }
    if (socialloading && contactloading) {
        return <Loader />
    }


    const onubmit = async (e) => {
        e.preventDefault();
        const emailParams = {
            email: data.email,
        }
        emailjs.send("service_csia6iy", 'template_confirmation', emailParams, "NuQv9XskxV05oXLmu")
            .then(async (response) => {
                try {
                    // Call your API to save the email to the server (backend)
                    const apiResponse = await fetch('https://websolex-admin.vercel.app/subscribe', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: data.email }),
                    });

                    // Check if the API call was successful
                    if (apiResponse.ok) {

                        navigate('/thankyou');
                    } else {
                        alert('Failed to save subscription data. Please try again.');
                    }
                } catch (error) {
                    alert(`Error in API call: ${error.message}`);
                }
            }, (error) => {
                alert(`FAILD... ${error}`);
            });
        setdata({ email: "" })
    }




    return (
        <>
            {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
            <section className="d-lg-block d-none footer-area pt-100 pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-lg-4 animate__animated animate__fadeInUp footer-cms wow">
                                <div className="text-md-left animated fadeInLeft footer-left single-footer-widget title wow">
                                    <div className="footer-toggle">
                                        <div className="footer-logo-main-black mb-3">
                                            <Link to="/" onClick={handleTabClick}>
                                                <img loading='lazy' src={logo} alt="Logo" />
                                            </Link>
                                        </div>
                                        <p>Your Ideas, Our Innovation</p>
                                        <ul className="contact-link ps-0">
                                            <li className='pt-3'>
                                                <div className="footer-info-contact">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Phone :-</p>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            <Link to={`tel:${number?.phoneno}`} alt="">{number?.phoneno}</Link>
                                                        </span><br />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='pt-3'>
                                                <div className="footer-info-email">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Email :-</p>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            <Link target='_blank' to={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQZxkVtVqSvHXSTtpJPrVqqmWMgGdgTrFRrkzBcXRNXcKLkkmjKWWbPSmQXnKcMrTdPgbZ`}> {number?.email} </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='pt-3'>
                                                <div className="footer-info-address">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Address :-</p>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            <Link target='_blank' to={`https://maps.app.goo.gl/JDB2mofwcDgjNEic8`} >
                                                                {number?.address}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 animate__animated animate__fadeInUp footer-cms wow">
                                <div className="text-md-left animated fadeInDown single-footer-widget wow">
                                    <div className="single-title-wrapper title">
                                        <div className="title-footer">
                                            <h3 className="footer-block__heading mb-4">Pages</h3>
                                        </div>
                                        <ul className="footer-quick-links footer-toggle ps-0 pt-10">
                                            <li className='mb-3'>
                                                <Link to="/portfolio" onClick={handleTabClick} className='px-0'>Portfolio</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/Career" onClick={handleTabClick} className='px-0'>Career</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='px-0'>Contact</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/blog" onClick={handleTabClick} className='px-0'>Blog</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='px-0'>Company</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 animate__animated animate__fadeInUp wow">
                                <div className="text-md-left animated fadeInUp single-footer-widget wow">
                                    <div className="single-title-wrapper title">
                                        <div className="title-footer">
                                            <h3 className="footer-block__heading mb-4">Services</h3>
                                        </div>
                                        <ul className="footer-quick-links footer-toggle ps-0 pt-10">
                                            <li className='mb-3'>
                                                <Link to="#" className='px-0'>Web Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='px-0'>Graphic Design</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='px-0'>App Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='px-0'>Game Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 animate__animated animate__fadeInUp wow">
                                <div className="d-flex flex-column text-md-left animated fadeInRight single-footer-widget wow">
                                    <div className="single-title-wrapper title">
                                        <div className="title-footer">
                                            <h3 className="footer-block__heading mb-4">Subscribe</h3>
                                        </div>
                                        <div className="footer-toggle">
                                            <p>Accompany us on our growth journey to glean insights from our experiences</p>
                                            <form onSubmit={onubmit} className='emailForm'>
                                                <input
                                                    type="email"
                                                    id='email'
                                                    name='email'
                                                    placeholder="Enter Your Email"
                                                    value={data.email}
                                                    onChange={onhange}
                                                    required
                                                />
                                                <button className="mil-accent-bg mil-button mil-fw" type="submit">
                                                    <span className="text-light fw-normal">Subscribe</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-top footer-bottom py-3">
                            <div className="containerr">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 animate__animated animate__fadeInLeft wow">
                                        <div className="footer-bottom-content">
                                            <div className="footer-bottom-content-copy">
                                                <p className='mb-0'>Copyright © 2024 Websolex Infotech. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 animate__animated animate__fadeInRight wow">
                                        <ul className="d-flex flex-row align-items-right float-right justify-content-center justify-content-lg-end p-0 footer-social mb-0 ps-lg-3">
                                            <li>
                                                <Link to={social?.facebook} target="_blank">
                                                    <LuFacebook />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={social?.instagram} target="_blank">
                                                    <IoLogoInstagram />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={social?.linkedin} target="_blank">
                                                    <FiLinkedin />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.behance.net/unityinfotech" target="_blank">
                                                    <SlSocialBehance />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='d-block d-lg-none footer-area'>
                <div className="container">
                    <div className="row justify-content-center">
                        <Accordion defaultActiveKey="0" className='bg-transparent mb-5 px-0'>
                            <Accordion.Item eventKey="0" className='border-0'>
                                <div className="title-footer">
                                    <Accordion.Header className="footer-block__heading fw-bold">Contact</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <div className="footer-toggle">
                                        <div className="footer-logo-main-black mb-3">
                                            <Link to="index.html">
                                                <img loading='lazy' src={logo} alt="Logicgo-Logo" className='col-4 img-fluid' />
                                            </Link>
                                        </div>
                                        <p>Your Ideas, Our Innovation</p>
                                        <ul className="contact-link ps-0">
                                            <li className='pt-3'>
                                                <div className="footer-info-contact">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Phone :-</p>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            <Link to="tel:+9182008-45977">+91 82008-45977</Link></span><br />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='pt-3'>
                                                <div className="footer-info-email">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Email :-</p>
                                                    </div>
                                                    <div>
                                                        <span>
                                                            <Link
                                                                to="mailto:websolexinfotech@gmail">websolexinfotech@gmail.com</Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='pt-3'>
                                                <div className="footer-info-address">
                                                    <div className="footer-contact-heading">
                                                        <p className='fw-bold mb-0'>Address :-</p>
                                                    </div>
                                                    <div>
                                                        <span> A-103 IT Park Mota Varachha Road Surat Gujarat</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0'>
                                <div className="title-footer">
                                    <Accordion.Header className="footer-block__heading fw-bold">Company</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <ul className="footer-quick-links ps-0 pt-10">
                                            <li className='mb-3'>
                                                <Link to="/portfolio" onClick={handleTabClick} className='text-black text-decoration-none'>Portfolio</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/Career" onClick={handleTabClick} className='text-black text-decoration-none'>Career</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/company" onClick={handleTabClick} className='text-black text-decoration-none'>Company</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/blog" onClick={handleTabClick} className='text-black text-decoration-none'>Blog</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/contact" onClick={handleTabClick} className='text-black text-decoration-none'>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border-0'>
                                <Accordion.Header className="footer-block__heading fw-bold">Services</Accordion.Header>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <ul className="footer-quick-links ps-0 pt-10">
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-black text-decoration-none'>Web Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-black text-decoration-none'>Graphic Design</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-black text-decoration-none'>App Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-black text-decoration-none'>Game Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='border-0'>
                                <Accordion.Header className="footer-block__heading fw-bold">Subscribe</Accordion.Header>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <div className="footer-toggle">
                                            <p>Accompany us on our growth journey to glean insights from our experiences </p>
                                            <form onSubmit={onsubmit} className='single-footer-widget'>
                                                <input className="mil-mb-5 mil-rounded-input mil-text-center" type="email"
                                                    id='email'
                                                    name='email'
                                                    placeholder="Enter Your Email"
                                                    value={data.email}
                                                    onChange={onhange}
                                                    required />
                                                <button className="mil-accent-bg mil-button mil-fw" type="submit">
                                                    <span className="text-light">Subscribe</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="col-lg-6 animated fadeInLeft wow">
                            <div className="footer-bottom-content">
                                <div className="footer-bottom-content-copy">
                                    <p className='text-center'>Copyright © 2025 Websolex infotech. All Rights Reserved. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 animated fadeInRight wow">
                            <ul className="d-flex flex-row align-items-right float-right justify-content-center justify-content-lg-end p-0 footer-social ps-lg-3">
                                <li>
                                    <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_new">
                                        <LuFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
                                        <IoLogoInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/"
                                        target="_blank">
                                        <FiLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/unityinfotech" target="_blank">
                                        <SlSocialBehance />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;




import React, { useEffect, useState } from 'react';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone, FaClock, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import EmailJS from 'emailjs-com';
import '../forms.css';
import { AiFillInstagram } from "react-icons/ai";
import FeedbackMessage from './feedback';
import { useGetContactDetailsQuery, useGetSocialDetailsQuery } from '../redux/apiSlice'
import Loader from './loader';
const From = () => {
    const { data: diractcontact, loading: contactloading, error: contacterror } = useGetContactDetailsQuery()
    const { data: diractsocial, loading: socialloading, error: socialerror } = useGetSocialDetailsQuery()
    console.log(diractsocial)
    const navigate = useNavigate();
    const [data, setdata] = useState({
        name: "",
        email: "",
        contactnumber: "",
        subject: "",
        message: "",
    });
    const [showtextbox, setotherinput] = useState(false);
    const [errors, seterror] = useState({
        email: "",
        contactnumber: "",
    });
const [feedback, setFeedback] = useState({ message: "", type: "" })
const handleClear = () => {
    setFeedback({ message: "", type: "" })
}
useEffect(() => {
    if (contacterror || socialerror) {
        setFeedback({
            message: `Error fetching : ${contacterror?.Message || socialerror?.Message}`,
            type: "error",
        })
    }

}, [contacterror, socialerror])



if (contactloading || socialloading) {
    return <Loader />
}





const validateemail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatenumber = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
};

const onChange = (e) => {
    const { name, value } = e.target;
    setdata(prevdata => ({
        ...prevdata,
        [name]: value
    }));

    if (name === 'email') {
        if (!validateemail(value)) {
            seterror(preverror => ({
                ...preverror,
                email: "Please enter a valid email address"
            }));
        } else {
            seterror(preverror => ({
                ...preverror,
                email: "",
            }));
        }
    }

    if (name === 'contactnumber') {
        if (!validatenumber(value)) {
            seterror(preverror => ({
                ...preverror,
                contactnumber: "Please enter a valid contact number"
            }));
        } else {
            seterror(preverror => ({
                ...preverror,
                contactnumber: "",
            }));
        }
    }

    if (name === "subject" && value === "Other") {
        setotherinput(true);
        setdata((prevdata) => ({ ...prevdata, subject: "" }));
    } else if (name === "subject") {
        setotherinput(false);
    }
};

const sendEmail = (emailParams) => {
    return EmailJS.send('service_soybehv', 'template_73gw0e4', emailParams, 'yC07B7kWN5O46D558')
        .then(response => {
            if (response.status === 200) {
                setFeedback({
                    message: `Email successfully sent via EmailJS: ${response}`,
                    type: "success",
                })
                return true;
            } else {
                setFeedback({
                    message: `Error : EmailJS failed to send.`,
                    type: "error",
                })
            }
        })
        .catch(error => {
            setFeedback({
                message: `Error fetching : ${error.message}`,
                type: "error",
            })
        });
};

const submitFormToAPI = (emailParams) => {
    return fetch("https://websolex-admin.vercel.app/contactform", {
        method: "POST",
        body: JSON.stringify(emailParams),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                    setFeedback({
                        message: `Error linnno:186 : ${errorMessage}`,
                        type: "error",
                    })
                });
            }
            return response.json();
        })
        .catch(error => {
            setFeedback({
                message: `Error linnno:195  : ${error.message}`,
                type: "error",
            })
        });
};

const onSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.contactnumber) {
        setFeedback({
            message: `Error : Please correct email and contact number.`,
            type: "error",
        })
        return;
    }

    const emailParams = {
        name: data.name,
        email: data.email,
        contactnumber: data.contactnumber,
        subject: data.subject,
        message: data.message
    };

    try {
        await sendEmail(emailParams);
        await submitFormToAPI(emailParams);
        setFeedback({
            message: `Form submitted successfully!`,
            type: "success",
        })
        navigate("/thankyou");
        setdata({
            name: "",
            email: "",
            contactnumber: "",
            subject: "",
            message: "",
        });


    } catch (error) {
        console.log(error)
        setFeedback({
            message: `An error occurred : ${error.message}`,
            type: "error",
        })
    }
};





return (
    <>
        {feedback.message && <FeedbackMessage message={feedback.message} type={feedback.type} onClear={handleClear} />}
        <section className="contact_form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-6 text-center contact_heading mb-4 mb-xxl-5">
                        <h3 className="animate__animated animate__fadeInDown fw-semibold mb-4 wow">Let’s Connect and Create Something Amazing!</h3>
                        <p className='animate__animated animate__fadeInDown wow'>We’re here to answer your questions, discuss your ideas, and help your business grow. Reach out to us anytime we’d love to hear from you!</p>
                    </div>
                    <div className="col-12 d-flex flex-wrap align-items-center">
                        <div className="col-12 col-xl-6 mb-5 mb-xl-0">
                            <div className="m-xl-3 rounded-3 contact_form_sub">
                                <h2 className="text-center animate__animated animate__fadeInDown mb-4 wow">Get in Touch with Us</h2>
                                <form onSubmit={onSubmit}>
                                    <div className="d-flex flex-wrap input_main_menu">
                                        <div className="col-12 col-md-6 input_sub_box ps-0">
                                            <div className="m-2 animate__animated animate__fadeInBottomLeft wow">
                                                <input
                                                    type="text"
                                                    id='name'
                                                    name='name'
                                                    placeholder="Enter Your Name"
                                                    className="col-12 border-0 rounded-2 mb-3 pe-2 ps-3 py-2"
                                                    value={data.name}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            {errors.name && (
                                                <small className='text-danger'> {errors.name} </small>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 input_sub_box ps-0">
                                            <div className="m-2 animate__animated animate__fadeInBottomRight wow">
                                                <input
                                                    type="email"
                                                    id='email'
                                                    name='email'
                                                    placeholder="Enter Your Email"
                                                    className="col-12 border-0 rounded-2 mb-3 pe-2 ps-3 py-2"
                                                    value={data.email}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            {errors.email && (
                                                <small className='text-danger'> {errors.email} </small>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 input_sub_box ps-0">
                                            <div className="m-2 animate__animated animate__fadeInBottomLeft wow">
                                                <input
                                                    type="tel"
                                                    id='contactnumber'
                                                    name='contactnumber'
                                                    placeholder="Contact Number"
                                                    className="col-12 border-0 rounded-2 mb-3 pe-2 ps-3 py-2"
                                                    value={data.contactnumber}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            {errors.contactnumber && (
                                                <small className='text-danger'> {errors.contactnumber} </small>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 input_sub_box ps-0">
                                            <div className="m-2 animate__animated animate__fadeInBottomRight wow">
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    className="col-12 bg-white border-0 rounded-2 mb-3 pe-2 ps-3 py-2"
                                                    value={data.subject}
                                                    onChange={onChange}
                                                    required
                                                >
                                                    <option value="" disabled>Select a Subject</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="UI/UX Design">UI/UX Design</option>
                                                    <option value="Mobile Apps">Mobile Apps</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        {showtextbox && (
                                            <div className="col-12 input_sub_box m-2 animate__animated animate__fadeInUpBig other_input wow">
                                                <input
                                                    type="text"
                                                    id="otherTextInput"
                                                    name="otherText"
                                                    placeholder="Please Specify"
                                                    className="border-0 rounded-2 mb-3 pe-2 ps-3 py-2"
                                                    value={data.subject}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        )}
                                        <div className="col-12 input_sub_box ps-0">
                                            <div className="m-2 animate__animated animate__fadeInUp wow">
                                                <textarea
                                                    id='message'
                                                    name='message'
                                                    placeholder="Submit Your Message Request"
                                                    className="col-12 border-0 rounded-2 pe-2 ps-3 py-2"
                                                    value={data.message}
                                                    onChange={onChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center animate__animated animate__slideInLeft contact_btn mt-4 wow">
                                        <button
                                            type="submit"
                                            className="border m-2 rounded-3 text-light fw-semibold home_btn"
                                            title="Send Your Message!">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 pe-0">
                            <div className="contact_company_details_box">
                                <h2 className="text-center animate__animated animate__fadeInDown fw-bold mb-0 wow">Contact Details</h2>
                            </div>
                            <div className="col-12 d-flex flex-wrap pt-5 px-0">
                                <div className="col-12 col-md-6 ps-0">
                                    <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                        <div className="col-12 d-xxl-flex border rounded-2 text-center text-xxl-start animate__animated animate__fadeInRight contact_sub_boxx mb-4 wow">
                                            <div className="d-flex justify-content-center contact_icons_bg mb-3 mb-xxl-0 me-xxl-3">
                                                <MdLocationPin className='d-flex align-items-center justify-content-center p-2 rounded-3 text-light' />
                                            </div>
                                            <div className="contact_details">
                                                <h4>Address</h4>
                                                <p title={diractcontact?.address} className="mb-0"> {diractcontact?.address} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ps-0">
                                    <div className="me-0 me-xl-2 me-xxl-4">
                                        <div className="col-12 d-xxl-flex border rounded-2 text-center text-xxl-start animate__animated animate__fadeInRight contact_sub_boxx mb-4 mb-md-0 wow">
                                            <div className="d-flex justify-content-center contact_icons_bg mb-3 mb-xxl-0 me-xxl-3">
                                                <FaPhone className='d-flex align-items-center justify-content-center p-2 rounded-3 text-light' />
                                            </div>
                                            <div className="contact_details">
                                                <h4>Mobile</h4>
                                                <a href={`tel:${diractcontact?.phoneno}`}> {diractcontact?.phoneno} </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ps-0">
                                    <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                        <div className="col-12 d-xxl-flex border rounded-2 text-center text-xxl-start animate__animated animate__fadeInRight contact_sub_boxx mb-4 mb-md-0 wow">
                                            <div className="d-flex justify-content-center contact_icons_bg mb-3 mb-xxl-0 me-xxl-3">
                                                <FaClock className='d-flex align-items-center justify-content-center p-2 rounded-3 text-light' />
                                            </div>
                                            <div className="contact_details">
                                                <h4>Availability</h4>
                                                <p className="mb-0"> {diractcontact?.avaliablity} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ps-0">
                                    <div className="me-0 me-xl-2 me-xxl-4">
                                        <div className="col-12 d-xxl-flex border rounded-2 text-center text-xxl-start animate__animated animate__fadeInRight contact_sub_boxx wow">
                                            <div className="d-flex justify-content-center contact_icons_bg mb-3 mb-xxl-0 me-xxl-3">
                                                <MdEmail className='d-flex align-items-center justify-content-center p-2 rounded-3 text-light' />
                                            </div>
                                            <div className="contact_details">
                                                <h4>Email</h4>
                                                <a href={`mailto:${diractcontact?.email}`}> {diractcontact?.email} </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-column flex-lg-row align-items-center border-top justify-content-between mt-5 mt-xl-3 pe-0 ps-3 ps-sm-4 py-5 py-sm-4">
                                <h6 className="animate__animated animate__slideInRight font_size fw-bold mb-4 mb-md-0 wow">Social Media:</h6>
                                <ul className="d-flex mb-0 ps-0 social_main_menu">
                                    <li className="animate__animated animate__slideInRight me-3 wow">
                                        <Link to={diractsocial?.facebook} target='_blank' className="d-flex align-items-center border rounded-3">
                                            <FaFacebookF className='text-black fs-5' />
                                        </Link>
                                    </li>
                                    <li className="animate__animated animate__slideInRight me-3 wow">
                                        <Link to={diractsocial?.whatsapp} target='_blank' className="d-flex align-items-center border rounded-3">
                                            <IoLogoWhatsapp className='text-black fs-5' />
                                        </Link>
                                    </li>
                                    <li className="animate__animated animate__slideInRight me-3 wow">
                                        <Link to={diractsocial?.instagram} target='_blank' className="d-flex align-items-center border rounded-3">
                                            <AiFillInstagram className='text-black fs-5' />
                                        </Link>
                                    </li>
                                    <li className="animate__animated animate__slideInRight me-3 wow">
                                        <Link to={diractsocial?.linkedin} target='_blank' className="d-flex align-items-center border rounded-3">
                                            <FaLinkedinIn className='text-black fs-5' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
};

export default From;

import React, { useEffect, useState } from 'react';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone, FaClock, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import EmailJS from 'emailjs-com';
import '../forms.css';
import { AiFillInstagram } from "react-icons/ai";
import FeedbackMessage from './feedback';
const From = () => {
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
    const [diractcontact, setdiractcontact] = useState([]);
    const [diractsocial, setdiractsocial] = useState('');
    useEffect(() => {
        const fetchcontactdata = async () => {
            try {
                const res = await fetch('https://websolex-admin.vercel.app/api/contactdetails', {
                    method: 'GET'
                });
                if (!res.ok) {
                    const errorMessage = await res.text();
                    setFeedback({
                        message: `Error fetching : ${errorMessage}`,
                        type: "error",
                    })
                }
                const data = await res.json();

                setdiractcontact(data[0]);

            } catch (error) {
                setFeedback({
                    message: `Error fetching : ${error.message}`,
                    type: "error",
                })
            }
        };

        const fetchsocialdata = async () => {
            try {
                const res = await fetch('https://websolex-admin.vercel.app/api/socialdetails', {
                    method: 'GET'
                })
                const data = await res.json();
                if (data && data.length > 0) {
                    setdiractsocial(data[0]);
                }
            } catch (error) {
                setFeedback({
                    message: `Error fetching : ${error.message}`,
                    type: "error",
                })
            }
        }


        fetchsocialdata();
        fetchcontactdata();
    }, [])
   

    





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
    const EMAIL_KEY_CONTACT = process.env.EMAIL_KEY_CONTACT
    const EMAIL_TEMPLATE_CONTACT = process.env.EMAIL_TEMPLATE_CONTACT
    const EMAIL_APIKEY_CONTACT = process.env.EMAIL_APIKEY_CONTACT

    const sendEmail = (emailParams) => {
        return EmailJS.send(EMAIL_KEY_CONTACT, EMAIL_TEMPLATE_CONTACT, emailParams, EMAIL_APIKEY_CONTACT)
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
                        <div className="contact_heading text-center col-12 col-xl-6 mb-4 mb-xxl-5">
                            <h3 className="fw-semibold mb-4 wow animate__animated animate__fadeInDown">Let’s Connect and Create Something Amazing!</h3>
                            <p className='wow animate__animated animate__fadeInDown'>We’re here to answer your questions, discuss your ideas, and help your business grow. Reach out to us anytime we’d love to hear from you!</p>
                        </div>
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="col-12 col-xl-6 mb-5 mb-xl-0">
                                <div className="contact_form_sub rounded-3 m-xl-3">
                                    <h2 className="mb-4 text-center wow animate__animated animate__fadeInDown">Get in Touch with Us</h2>
                                    <form onSubmit={onSubmit}>
                                        <div className="input_main_menu d-flex flex-wrap">
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2 wow animate__animated animate__fadeInBottomLeft">
                                                    <input
                                                        type="text"
                                                        id='name'
                                                        name='name'
                                                        placeholder="Enter Your Name"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.name}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                                {errors.name && (
                                                    <small className='text-danger'> {errors.name} </small>
                                                )}
                                            </div>
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2 wow animate__animated animate__fadeInBottomRight">
                                                    <input
                                                        type="email"
                                                        id='email'
                                                        name='email'
                                                        placeholder="Enter Your Email"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.email}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            {errors.email && (
                                                <small className='text-danger'> {errors.email} </small>
                                            )}
                                            </div>
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2 wow animate__animated animate__fadeInBottomLeft">
                                                    <input
                                                        type="tel"
                                                        id='contactnumber'
                                                        name='contactnumber'
                                                        placeholder="Contact Number"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.contactnumber}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            {errors.contactnumber && (
                                                <small className='text-danger'> {errors.contactnumber} </small>
                                            )}
                                            </div>
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2 wow animate__animated animate__fadeInBottomRight">
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12 bg-white"
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
                                                <div className="m-2 other_input col-12 input_sub_box wow animate__animated animate__fadeInUpBig">
                                                    <input
                                                        type="text"
                                                        id="otherTextInput"
                                                        name="otherText"
                                                        placeholder="Please Specify"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3"
                                                        value={data.subject}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                            )}
                                            <div className="input_sub_box col-12 ps-0">
                                                <div className="m-2 wow animate__animated animate__fadeInUp">
                                                    <textarea
                                                        id='message'
                                                        name='message'
                                                        placeholder="Submit Your Message Request"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 col-12"
                                                        value={data.message}
                                                        onChange={onChange}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_btn mt-4 d-flex justify-content-center wow animate__animated animate__slideInLeft">
                                            <button
                                                type="submit"
                                                className="home_btn border text-light rounded-3 m-2 fw-semibold"
                                                title="Send Your Message!">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 pe-0">
                                <div className="contact_company_details_box">
                                    <h2 className="fw-bold text-center mb-0 wow animate__animated animate__fadeInDown">Contact Details</h2>
                                </div>

                                <div className="col-12 d-flex flex-wrap px-0 pt-5">

                                    <div className="col-12 col-md-6 ps-0">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4 wow animate__animated animate__fadeInRight">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <MdLocationPin className='d-flex text-light justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Address</h4>
                                                    <p title={diractcontact.address} className="mb-0"> {diractcontact.address} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0">
                                        <div className="me-0 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4 mb-md-0 wow animate__animated animate__fadeInRight">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <FaPhone className='d-flex text-light justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Mobile</h4>
                                                    <a href={`tel:${diractcontact.phoneno}`}> {diractcontact.phoneno} </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4 mb-md-0 wow animate__animated animate__fadeInRight">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <FaClock className='d-flex text-light justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Availability</h4>
                                                    <p className="mb-0"> {diractcontact.avaliablity} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0">
                                        <div className="me-0 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 wow animate__animated animate__fadeInRight">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <MdEmail className='d-flex text-light justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Email</h4>
                                                    <a href={`mailto:${diractcontact.email}`}> {diractcontact.email} </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 d-flex flex-column flex-lg-row mt-5 mt-xl-3 justify-content-between py-5 ps-3 py-sm-4 ps-sm-4 pe-0 align-items-center border-top">
                                    <h6 className="fw-bold mb-4 mb-md-0 font_size wow animate__animated animate__slideInRight">Social Media:</h6>
                                    <ul className="social_main_menu d-flex ps-0 mb-0">
                                        <li className="me-3 wow animate__animated animate__slideInRight">
                                            <Link to={diractsocial.facebook } target='_blank' className="border rounded-3 d-flex align-items-center">
                                                <FaFacebookF className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3 wow animate__animated animate__slideInRight">
                                            <Link to={diractsocial.whatsapp} target='_blank'  className="border rounded-3 d-flex align-items-center">
                                                <IoLogoWhatsapp className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3 wow animate__animated animate__slideInRight">
                                            <Link to={diractsocial.instagram}  target='_blank' className="border rounded-3 d-flex align-items-center">
                                                <AiFillInstagram className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3 wow animate__animated animate__slideInRight">
                                            <Link to={diractsocial.linkedin}  target='_blank' className="border rounded-3 d-flex align-items-center">
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
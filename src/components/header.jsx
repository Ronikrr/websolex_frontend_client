import React, { useEffect, useState } from 'react';
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import webdevlopment from '../Assets/web devlopment.png'
import graphic from '../Assets/grafhics.png'
import UIUX from '../Assets/uiux-icon.png'
import mobile from '../Assets/mobile.png'
import Digital from '../Assets/digital_marketing.png'

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeTab, setActiveTab] = useState('Home');
    const [mouseEnter, setMouseEnter] = useState(false)
    const [number, setnumber] = useState('');



    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        window.scrollTo(0, 0);
        setIsCollapsed(true);
    };
    useEffect(() => {
        const fetchcontactdata = async () => {
            try {
                const res = await fetch('https://websolex-admin.vercel.app/api/contactdetails', {
                    method: 'GET'
                });
                if (!res.ok) {
                    const errorMessage = await res.text(); // Get the error message from the response
                    throw new Error(`HTTP error! status: ${res.status}, message: ${errorMessage}`);
                }
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    setnumber(data[0].phoneno);
                } else {
                    console.log("Contact data is empty or invalid format.");
                }
            } catch (error) {
                console.error("Error fetching contact data:", error.message);
            }
        };
        fetchcontactdata()
    }, [])





    const ServiceTab = [
        {
            name: "Web Development",
            img: webdevlopment,
            path: '/service/webdevelopment',
            sub: [
                {
                    subName: "React js Development",
                },
                {
                    subName: "Node js Development",
                },
                {
                    subName: "PHP Development",
                },
                {
                    subName: "Laravel Development",
                },
                {
                    subName: "WordPress Development",
                },
                {
                    subName: "Shopify Development",
                },
                {
                    subName: "Angular Development",
                },
                {
                    subName: "Wix Development",
                },
                {
                    subName: "Webflow Development",
                },
            ]
        },
        {
            name: "Graphic Design",
            img: graphic,
            path: '/service/graphic',
            sub: [
                {
                    subName: "Packaging Design",
                },
                {
                    subName: "Info Graphic Design",
                },
                {
                    subName: "Logo Design",
                },
                {
                    subName: "Branding Identity",
                },
                {
                    subName: "Print Design",
                },
            ]
        },
        {
            name: "UI/UX Design",
            img: UIUX,
            path: '/service/uiux',
            sub: [
                {
                    subName: "App Design",
                },
                {
                    subName: "UI/UX Design",
                },
                {
                    subName: "Web Design",
                },
            ]
        },
        {
            name: "Mobile Apps",
            img: mobile,
            path: '/service/mobileapps',
            sub: [
                {
                    subName: "IOS",
                },
                {
                    subName: "Android",
                },
                {
                    subName: "Cross Platform",
                },
            ]
        },
        {
            name: "Digital Marketing",
            img: Digital,
            path: '/service/digital',
            sub: [
                {
                    subName: "Search Engine Optimization",
                },
                {
                    subName: "Pay-Per-Click Advertising",
                },
                {
                    subName: "Social Media Marketing",
                },
                {
                    subName: "Email Marketing",
                },
            ]
        },

    ]

    return (
        <>
            <header>
                <div className="header d-none d-lg-block position-fixed wow animate__animated animate__fadeInDown">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand col-2 " to="/" ><img src={logo} alt="WebSolex Infotech" /></Link>
                                    <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!isCollapsed}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link  ${activeTab === 'Home' ? 'active text-primary fw-bold' : ''}`} to="/"
                                                    onClick={() => handleTabClick('Home')}
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
                                                <Link className={`nav-link link_hover dropdown-toggle ${activeTab === 'Services' ? 'active text-primary fw-bold' : ''}`} to="#"
                                                    onMouseEnter={() => setMouseEnter(true)}
                                                    onClick={() => handleTabClick('Services')}>
                                                    Services
                                                </Link>
                                                {
                                                    mouseEnter && <div className="dropdown-menu megamenu sm-menu border-top">
                                                        <div className="container-fluid">
                                                            <div className="row">
                                                                {
                                                                    ServiceTab.map((v, i) => <div key={i} className="megamenu_width border-right mb-4 px-0 px-xl-2">
                                                                        <div className="d-flex ms-lg-2 ms-xl-4 align-items-center">
                                                                            <img src={v.img} alt="" className='megamenu_icon' />
                                                                            <Link className='text-black text-decoration-none ms-2' onClick={() => setMouseEnter(false)}
                                                                                to={v.path}>{v.name}</Link>
                                                                        </div>
                                                                        {
                                                                            v.sub.map(s => <Link className="dropdown-item">{s.subName}</Link>)
                                                                        }
                                                                    </div>)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                            <li className="nav-item p-3 text-center ">
                                                <Link className={`nav-link link_hover  ${activeTab === 'Portfolio' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Portfolio')}
                                                    to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center ">
                                                <Link onClick={() => handleTabClick('Company')} className={`nav-link link_hover  ${activeTab === 'Company' ? 'active text-primary fw-bold' : ''}`}
                                                    to="/company">
                                                    Company
                                                </Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center ">
                                                <Link onClick={() => handleTabClick('contact')} className={`nav-link link_hover  ${activeTab === 'contact' ? 'active text-primary fw-bold' : ''}`}
                                                    to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <form className="d-none d-lg-flex justify-content-center" role="search">
                                        <Link to={`tel:${number}`} alt="Enquire Now" className="nav-link bg-primary text-light  border-0 rounded-2">
                                            <FaPhone className='pe-2 bell' />{number}
                                        </Link>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <header>
                <div className="header d-block d-lg-none position-fixed ">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg py-3 px-2 px-md-0">
                                <div className="container-fluid d-flex">
                                    <Link className="navbar-brand col-2" to="/" onClick={handleTabClick}><img src={logo} alt="Logo" /></Link>
                                    <button
                                        className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}
                                        type="button"
                                        aria-expanded={!isCollapsed}
                                        aria-label="Toggle navigation"
                                        onClick={toggleNavbar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link ${activeTab === 'Home' ? 'active text-primary fw-bold' : ''}`} to="/"
                                                    onClick={() => handleTabClick('Home')}>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Services' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Services')} to="/service">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Portfolio' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Portfolio')} to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item  p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Company' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Company')} to="/company">
                                                    Company
                                                </Link>
                                            </li>
                                            <li className="nav-item  p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'contact' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('contact')} to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                        <form className="d-flex justify-content-center" role="search">
                                            <Link
                                                to="tel:8200845977"
                                                className="bg-primary text-light  border-0 rounded-2  text-decoration-none"
                                            ><FaPhone className=' bell me-2' />+91 8200845977
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;





